import React from 'react';
import { Router, Route } from 'react-router-dom';

import { IntlProvider , addLocaleData } from "react-intl";
import localeEn from 'react-intl/locale-data/en';
import localeFr from 'react-intl/locale-data/fr';
import localeEs from 'react-intl/locale-data/es';

import Container from '@material-ui/core/Container';

import { history } from './redux/store'
import Login from 'pages/login';

import en from 'localization/en.json'
import es from 'localization/es.json'
import fr from 'localization/fr.json'


addLocaleData([
  ...localeEn,
  ...localeFr,
  ...localeEs
]);

const languages = { en, es, fr };

function App() {
  return (
    <IntlProvider locale='en' messages={languages['en']}>
      <Container>
        <Router history={history}>
          <Route path='/' exact component={Login} />
        </Router>
      </Container>
    </IntlProvider>
  );
}

export default App;
