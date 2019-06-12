import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

import { IntlProvider , addLocaleData } from "react-intl";
import localeEn from 'react-intl/locale-data/en';
import localeFr from 'react-intl/locale-data/fr';
import localeEs from 'react-intl/locale-data/es';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';

import { history } from './redux/store'
import Input from 'components/input'

import en from 'localization/en.json'
import es from 'localization/es.json'
import fr from 'localization/fr.json'


addLocaleData([
  ...localeEn,
  ...localeFr,
  ...localeEs
])

const languages = { en, es, fr }

function App() {
  return (
    <IntlProvider locale='en' messages={languages['en']}>
      <Container>
        <FormControl error>
          <Input placeholder='hi' id='my-helper-text'/>
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <Router history={history}>
          <Route/>
        </Router>
      </Container>
    </IntlProvider>
  );
}

export default App;
