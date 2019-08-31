import React, { Component } from 'react';
import './App.scss';

import history from '../../utils/helpers/history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { store } from '../../redux/store';
import { authSuccess } from '../../redux/actions';

import { getUser } from '../../utils/services/user/getUser';
import { isAuth } from '../../utils/helpers/isAuth';

// COMPONENTS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// ROUTES
import Signin from '../../pages/Signin/Signin';
import Page404 from '../../pages/Page404/Page404';
import Page401 from '../../pages/Page401/Page401';
import Opportunities from '../../pages/Opportunities/Opportunities';

class App extends Component {
  componentDidMount() {
    if (isAuth(this.props.user)) return;
    // Auto Sign-In users with a session cookie
    getUser()
      .then(({ data }) => {
        this.props.authSuccess(data);
      });
  }

  render () {
    const { user } = this.props;

    return (
      <div className="app-wrapper">
        <Router history={history}>
          <Navbar/>
          <Switch>
            {(() => {
              if (isAuth(user)) {
                return [
                  <Route component={Opportunities} exact path="/opportunities"/>
                ]
              }
              return [
                <Route component={Page401} exact path="/opportunities"/>,
                <Route component={Page401} exact path="/partners"/>,
                <Route component={Page401} exact path="/admin/dashboard"/>
              ];
            })()}
            <Route component={() => <Redirect to="/signin"/>} exact path="/"/>
            <Route component={Signin} exact path="/signin"/>
            <Route component={Page404}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = () => ({
  authSuccess
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;