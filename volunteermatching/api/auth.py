from flask import jsonify, request, url_for, g
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from volunteermatching import app, db
from volunteermatching.auth.models import User, Role
from .errors import bad_request, error_response

basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()

# Defines the HTTPBasicAuth callback function password verification used
# when basic auth is used on a route function
@basic_auth.verify_password
def verify_password(useremail, password):
    user = User.query.filter_by(email=useremail).first()
    if user is None:
        return False
    g.current_user = user
    return user.verify_password(password)

# Defines the error response if HTTPBasicAuth fails
@basic_auth.error_handler
def error_handler():
    return error_response(401)

# Defines the HTTPTokenAuth callback function token verification used
# when token auth is used on a route function
@token_auth.verify_token
def verify_token(token):
    g.current_user = User.check_token(token) if token else None
    return g.current_user is not None

# Defines the error response if HTTPTokenAuth fails
@token_auth.error_handler
def token_error_handle():
    return error_response(401)

# API GET endpoint returns an individual user. The users email is only returned
# when the include_email argument is pass as True.
@app.route('/api/users/<int:id>', methods=['GET'])
@token_auth.login_required
def get_user_api(id):
    include_email = request.args.get('include_email', False)
    return jsonify(User.query.get_or_404(id).to_dict(include_email))

# API GET endpoint return all users, paginated with given page and quantity
# per page.
@app.route('/api/users', methods=['GET'])
@token_auth.login_required
def get_users_api():
    include_email = request.args.get('include_email', False)
    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 10, type=int), 100)
    data = User.to_colletion_dict(
            User.query, page, per_page, 'get_partners_api',
            include_email=include_email)
    return jsonify(data)

# API POST endpoint to create a new user
@app.route('/api/users', methods=['POST'])
@token_auth.login_required
def create_user_api():
    data = request.get_json() or {}
    if 'email' not in data or 'password' not in data:
        return bad_request('must include user email and password field')
    if User.query.filter_by(email=data['email']).first():
        return bad_request('this user already exists')
    if 'roles' in data:
        for role in data['roles']:
            if not Role.query.filter_by(name=role).first():
                return bad_request('that is not an existing role')
    user = User()
    user.from_dict(data, new_user=True)
    db.session.add(user)
    db.session.commit()
    response = jsonify(user.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('get_user_api', id=user.id)
    return response

# API PUT endpoint to update a user
@app.route('/api/users/<int:id>', methods=['PUT'])
@token_auth.login_required
def update_user_api(id):
    user = User.query.get_or_404(id)
    data = request.get_json() or {}
    if 'email' in data and data['email'] != user.email and \
            User.query.filter_by(email=data['email']).first():
        return bad_request('please use a different email')
    if 'roles' in data:
        for role in data['roles']:
            if not Role.query.filter_by(name=role).first():
                return bad_request('that is not an existing role')
    user.from_dict(data, new_user=False)
    db.session.commit()
    return jsonify(user.to_dict())

# API DELETE endpoint to delete a user
@app.route('/api/users/<int:id>', methods=['DELETE'])
@token_auth.login_required
def delete_user_api(id):
    if not User.query.filter_by(id=id).first():
        return bad_request('this user does not exist')
    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return '', 204