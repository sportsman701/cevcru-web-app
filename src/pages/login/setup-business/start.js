import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router";
import { useDispatch } from 'react-redux'

import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import cx from 'classnames';

import Button from 'components/button';
import { Alert, AlertContent } from 'components/alert';

import useGlobalStyles from 'hooks/styles';
import { media, useMediaSmallerThan } from 'hooks/media';
import useIntl from 'hooks/intl';
import { pop } from 'helpers/navigateWithData';

import { getCurrency, getOtherIndustry } from 'redux/onboarding/actions'
import image from 'resources/setup-business/setup-business-start.png';

import useStyles from './style';


function SetupBusinessStart(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaSmallerThan = useMediaSmallerThan();
  const [ alert, setAlert ] = useState(null);
  const dispatch = useDispatch();
  const { history } = props;

  useEffect(() => {
    setAlert(pop('alert'));
    dispatch(getCurrency());
    dispatch(getOtherIndustry());
  }, []);

  const handleStartSetupBusiness = () => history.push('setup-business/create-card');


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
        <Alert open={!!alert} onClose={() => setAlert(false)}>
          <AlertContent>
            {alert}
          </AlertContent>
        </Alert>

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
            <Button onClick={handleStartSetupBusiness}>
              {trans('login.setup_my_business')}
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default withRouter(SetupBusinessStart);
