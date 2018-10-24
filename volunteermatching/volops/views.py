from volunteermatching import app, db
from .models import Partner, Opportunity, Passion, AgeGroupInterest, Skill, \
    Frequency
from .forms import PassionForm, AgeGroupInterestForm
from flask import render_template, request, flash, url_for, redirect
from flask_login import login_required

@app.route('/admin/categories', methods=["GET", "POST"])
@login_required
def admin_categories():
    passions = Passion.query.all()
    passion_form = PassionForm()
    age_group_interests = AgeGroupInterest.query.all()
    agi_form = AgeGroupInterestForm()
    if passion_form.validate_on_submit() and passion_form.submit.data:
        name = Passion(name=passion_form.name.data)
        db.session.add(name)
        db.session.commit()
        return redirect(url_for('admin_categories'))
    elif agi_form.validate_on_submit() and agi_form.submit_agi.data:
        name = AgeGroupInterest(name=agi_form.name.data)
        db.session.add(name)
        db.session.commit()
        return redirect(url_for('admin_categories'))

    return render_template('volops/categories.html', title='Admin Passions',
                           passions=passions, passion_form=passion_form,
                           age_group_interests=age_group_interests,
                           agi_form=agi_form)


@app.route('/admin/categories/passions/<id>', methods=["GET", "POST"])
@login_required
def admin_passions_delete(id):
    passion = Passion.query.filter_by(id=id).first()
    if passion is not None:
        db.session.delete(passion)
        db.session.commit()
        return redirect(url_for('admin_categories'))
    return redirect(url_for('admin_categories'))


@app.route('/admin/categories/agegroupinterest/<id>', methods=["GET", "POST"])
@login_required
def admin_age_group_interest_delete(id):
    age_group_interest = AgeGroupInterest.query.filter_by(id=id).first()
    if age_group_interest is not None:
        db.session.delete(age_group_interest)
        db.session.commit()
        return redirect(url_for('admin_categories'))
    return redirect(url_for('admin_categories'))