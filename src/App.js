import React, { useEffect, useRef } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Container from '@material-ui/core/Container';

import Login from 'pages/login/index/index';
import Register from 'pages/login/index/register'
import ForgotPassword from 'pages/login/index/forgot-pwd'
import ResetPassword from 'pages/login/index/reset-pwd'
import VerifyEmail from 'pages/login/verify-mail'

import SetupBusiness from 'pages/login/setup-business'
import SetupBusinessStart from 'pages/login/setup-business/start'
import Home from 'pages/home'

import { history } from './redux/store'
import { restoreSession } from './redux/session'
import { initialSetupSelector } from 'redux/account/selectors'

import en from 'localization/en.json'
import es from 'localization/es.json'
import fr from 'localization/fr.json'
import './App.css'


const languages = { en, es, fr };

function App() {
  const { emailConfirmed, businessSetup } = useSelector(initialSetupSelector, shallowEqual);
  const session = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const reducers = ['account', 'onboarding'];
      const restored = reducers.map(reducer => JSON.parse(localStorage.getItem(reducer)));
      
      session.current = true;
      dispatch(restoreSession(
        Object.assign({}, ...(restored.map((store, key) => !!store ? { [reducers[key]]: store } : {})))
      ));
    } catch (e) { }
  }, []);

  const login = props => {
    const auth = localStorage.getItem('auth');
    
    if (auth && session.current) {
      return <Redirect to='/' />
    }

    session.current = true;
    return <Login {...props} />;
  }

  const passAuthentication = Page => props => {
    const auth = localStorage.getItem('auth');
    const page = props.match.params.page;
    const pages = [
      'expenses',
      'help',
      'inventory',
      'sales',
      'settings',
      'share',
      'clients'
    ];

    if (!auth) {
      return <Redirect to='/login' />
    }

    if (!session.current) {
      return null;
    }

    if (!!page && !pages.includes(page)) {
      return <Redirect to='/' />
    }

    switch (Page) {
      case Home:
        if (!emailConfirmed) return <Redirect to='/verify-email'/>
        if (!businessSetup) return <Redirect to='/setup-business'/>
        break;

      case VerifyEmail:
        if (emailConfirmed) {
          if (businessSetup) {
            return <Redirect to='/'/>
          } else {
            return <Redirect to='/setup-business'/>
          }
        }
        break;

      case SetupBusinessStart:
        if (!emailConfirmed) return <Redirect to='/verify-email'/>
        if (businessSetup) return <Redirect to='/'/>
        break;

      case SetupBusiness:
        if (businessSetup) return <Redirect to='/'/>
        break;
      
      default:
    }

    return <Page {...props} />
  }

  return (
    <IntlProvider locale='en' messages={languages['en']}>
      <Container className='App'>
        <BrowserRouter>
          <Switch>
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
              path='/verify-email'
              render={passAuthentication(VerifyEmail)} />
            <Route
              path='/setup-business'
              render={passAuthentication(SetupBusinessStart)} />
            <Route
              path='/setup-business/:step'
              render={passAuthentication(SetupBusiness)} />
              
            <Route
              path="/:page?"
              render={passAuthentication(Home)}/>
          </Switch>
        </BrowserRouter>
      </Container>
    </IntlProvider>
  );
}

export default React.memo(App);
