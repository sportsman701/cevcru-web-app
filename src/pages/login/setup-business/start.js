import React, { useState } from 'react'

import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import cx from 'classnames';

import useGlobalStyles from 'hooks/styles';
import { media, useMediaSmallerThan } from 'hooks/media';
import useIntl from 'hooks/intl';
import Button from 'components/button';

import image from 'resources/setup-business/setup-business-start.png';

import useStyles from './style';


function SetupBusinessStart() {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaSmallerThan = useMediaSmallerThan();

  return (
    <Box className={cx(
      classes.root,
      globalClasses.fullHeight,
      globalClasses.fullWidth
    )}>
      <Box
        className={cx(
          classes.startMainPanel,
          mediaSmallerThan(media.sm) && [
            globalClasses.fullHeight,
            globalClasses.fullWidth
          ]
        )}
      >
        <Box className={cx(
          globalClasses.formPanel,
          classes.content
        )}>
          <p className={cx(
            globalClasses.textPrimary,
            globalClasses.textTitleFixed
          )}>
            {trans('login.welcome_to_vencru')}
          </p>
          <p className={cx(
            globalClasses.textNormal,
            classes.description
          )}>
            {trans('login.your_business_manager_is_just_ahead')}
          </p>
          <div className={classes.startPreview}>
            <img alt="" src={image}/>
          </div>
          <FormControl className={classes.setupBusiness}>
            <Button>
              {trans('login.setup_my_business')}
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default SetupBusinessStart;
