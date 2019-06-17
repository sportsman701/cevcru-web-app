import React, { useState } from 'react'

import { FormattedMessage } from 'react-intl'
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';

import useGlobalStyles from 'hooks/styles';
import { media, useMediaSmallerThan } from 'hooks/media';
import useIntl from 'hooks/intl';
import Button from 'components/button';


import useStyles from './style';

function SetupBusiness(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaSmallerThan = useMediaSmallerThan();

  return (
    <>
      <p className={cx(
        globalClasses.textPrimary,
        globalClasses.textSizeC,
        classes.title
      )}>
        {trans('login.create_your_business_card')}
      </p>
      <p className={cx(
        globalClasses.textNormal
      )}>
        {trans('login.creating_your_business_card')}
      </p>
    </>
  )
}

export default SetupBusiness;
