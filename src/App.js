import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Container from '@material-ui/core/Container';

import { history } from './redux/store'

import Login from 'pages/login/index/index';
import Register from 'pages/login/index/register'
import ForgotPassword from 'pages/login/index/forgot-pwd'
import ResetPassword from 'pages/login/index/reset-pwd'
import VerifyEmail from 'pages/login/verify-mail'

import SetupBusiness from 'pages/login/setup-business'
import SetupBusinessStart from 'pages/login/setup-business/start'

import { authSelector } from 'redux/account/selectors'

import en from 'localization/en.json'
import es from 'localization/es.json'
import fr from 'localization/fr.json'
import './App.css'


const languages = { en, es, fr };

function App() {

  const auth = useSelector(authSelector);

  const login = props => {
    if (auth) {
      return <Redirect to='/' />
    }
    return <Login {...props} />;
  }

  const passAuthentication = Page => props => {
    if (!auth) {
      return <Redirect to='/login' />
    }
    return <Page {...props} />
  }

  return (
    <IntlProvider locale='en' messages={languages['en']}>
      <Container className='App'>
        <Router history={history}>
          <Route
            path='/login/:account?'
            render={login} />
          <Route
            path='/register'
            component={Register} />
          <Route
            path='/forgot-password'
            component={ForgotPassword} />
          <Route
            path='/reset-password'
            component={ResetPassword} />
          
          <Route
            path="/" exact
            render={passAuthentication(() => <div>logged in</div>)}/>
          <Route
            path='/verify-email'
            render={passAuthentication(VerifyEmail)} />
          <Route
            path='/setup-business' exact
            render={passAuthentication(SetupBusinessStart)} />
          <Route
            path='/setup-business/:step'
            render={passAuthentication(SetupBusiness)} />
          {/* <Route path='/setup-business/industry' component={SetupBusiness} />
          <Route path='/setup-business/business' component={SetupBusiness} /> */}
          {/* <Route path='/account-ready' component={AccountReady} /> */}

          <Redirect to='/' />
        </Router>
      </Container>
    </IntlProvider>
  );
}

export default React.memo(App);
