import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import Welcome from '../containers/welcome';
import Input from 'components/input';
import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import useGlobalStyles from 'hooks/styles';
import {
  media,
  useMediaUp,
  useMediaSmallerThan
} from 'hooks/media';
import useIntl from 'hooks/intl';
import colors from 'helpers/colors';


import logoVerticalMobile from 'resources/logo/logo-vertical-mobile.svg';
import google from 'resources/registration/google.svg';

import useStyles from './style';


function Login(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();
  const [ showAccount, setShowAccount ] = useState(false);
  const { history, match } = props;

  return (
    <Box className={cx(
      classes.root,
      globalClasses.fullHeight,
      globalClasses.fullWidth
    )}>
      <Grid container className={classes.mainPanel}>
      </Grid>
    </Box>
  )
}

export default withRouter(Login);
