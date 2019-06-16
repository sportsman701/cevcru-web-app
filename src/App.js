import React from 'react';
import { Router, Route } from 'react-router-dom';

import { IntlProvider } from "react-intl";

import Container from '@material-ui/core/Container';

import { history } from './redux/store'

import Login from 'pages/login/index/index';
import Register from 'pages/login/index/register'
import ForgotPassword from 'pages/login/index/forgot-pwd'
import ResetPassword from 'pages/login/index/reset-pwd'
import VerifyEmail from 'pages/login/verify-mail'
import SetupBusinessStart from 'pages/login/setup-business/start'

import en from 'localization/en.json'
import es from 'localization/es.json'
import fr from 'localization/fr.json'
import './App.css'


const languages = { en, es, fr };

function App() {
  return (
    <IntlProvider locale='en' messages={languages['en']}>
      <Container className='App'>
        <Router history={history}>
          <Route path='/login/:account?' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgotpwd' component={ForgotPassword} />
          <Route path='/resetpwd' component={ResetPassword} />
          <Route path='/verify-email' component={VerifyEmail} />
          <Route path='/setup-business' component={SetupBusinessStart} />
          {/* <Route path='/setup-business/create' component={SetupBusiness} />
          <Route path='/setup-business/industry' component={SetupBusiness} />
          <Route path='/setup-business/business' component={SetupBusiness} /> */}
          {/* <Route path='/account-ready' component={AccountReady} /> */}
        </Router>
      </Container>
    </IntlProvider>
  );
}

export default App;
