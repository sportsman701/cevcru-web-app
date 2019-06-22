import React from 'react'

import { withRouter } from "react-router";
import { FormattedMessage } from 'react-intl'
import { Formik } from 'formik';
import { keys } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import pn from 'awesome-phonenumber';
import cx from 'classnames';
import { findIndex } from 'lodash';

import useGlobalStyles from 'hooks/styles';
import { media, useMediaUp } from 'hooks/media';
import useIntl from 'hooks/intl';
import Button from 'components/button';
import Link from 'components/link';

import CreateCard from '../containers/setup-business-step/create-card';
import Industry from '../containers/setup-business-step/industry';
import Business from '../containers/setup-business-step/business';

import setupBusiness from 'resources/setup-business/setup-business.svg';
import vencru from 'resources/logo/vencru.svg';
import hand from 'resources/setup-business/hand.svg';

import useStyles from './style';


const steps = [
  {
    name: 'create-card',
    title: 'login.create_your_business_card',
    content: CreateCard,
    initialValues: {
      firstName: null,
      lastName: null,
      company: null,
      phoneNumber: '',
      addressCity: null,
      addressStreet: null,
      addressCountry: null,
      businessType: false
    }
  },
  {
    name: 'industry',
    title: 'login.about_your_industry',
    initialalues: { },
    content: Industry
  },
  {
    name: 'business',
    title: 'login.about_your_business',
    initialValues: { },
    content: Business
  }
]

const initialValues = Object.assign({}, ...(steps.map(({ initialValues }) => initialValues)));

function SetupBusiness(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();

  const { match, history } = props;
  const step = match.params.step;
  const stepIndex = findIndex(steps, { name: step });
  const stepInfo = steps[stepIndex];
  const StepContent = stepInfo.content;

  if (stepInfo < 0) {
    history.push('/setup-business');
    return null;
  }

  const handleContinueClick = (values, { setSubmitting }) => {
    setSubmitting(false);
    
    if (stepIndex < 2) {
      history.push(`/setup-business/${steps[stepIndex + 1].name}`);
    } else {
      
    }
  }

  const handlePrevClick = () => {
    history.push(`/setup-business/${steps[stepIndex - 1].name}`);
  }

  const validate = stepIndex => values => {
    const errors = {};
    keys(steps[stepIndex].initialValues).forEach(field => {
      if (values[field] === null || values[field] === '') {
        errors[field] = trans('login.required');
      }
    })
    
    switch (stepIndex) {
      case 0:
        if (!pn(values.phoneNumber).isValid()) {
          errors.phoneNumber = trans('login.invalid_format');
        }
        break;

      case 1:
        break;

      case 2:
      default:
        break;
    }

    return errors;
  }
  
  return (
    <Box className={cx(
      classes.root,
      globalClasses.fullHeight,
      globalClasses.fullWidth
    )}>
      <Grid container>
        <Grid
          xs={8} item
          className={classes.leftPanel}
        >
          <Box className={cx(
            globalClasses.fullHeight,
            globalClasses.fullWidth
          )}>
            <Box className={classes.mainContainer}>
              <Box className={classes.logoHeader}>
                <Box className={classes.logo}>
                  <img src={vencru} alt=''/>
                </Box>
              </Box>
              <Box className={classes.mainPanel}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleContinueClick}
                  validate={validate(stepIndex)}
                >
                  {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
                    <Box className={classes.stepContent}>
                      <StepContent
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        values={values}
                      />
                      <Grid container className={classes.navigation}>
                        <Grid item xs={7} sm={4}>
                          { stepIndex > 0 && (
                            <Link
                              className={classes.textPrimary}
                              onClick={handlePrevClick}
                            >
                              <ChevronLeft/>
                              <span>{trans('login.previous_step')}</span>
                            </Link>
                          )}
                        </Grid>
                        <Grid item xs={5} sm={4}>
                          <Button fullWidth onClick={handleSubmit}>
                            {trans('login.continue')}
                          </Button>
                        </Grid>
                        { mediaUp(media.sm) && <Grid item xs={4}/> }
                      </Grid>
                    </Box>
                  )}
                </Formik>
              </Box>
              <Box className={classes.stepList}>
                {steps.map(({ name, title }, key) => (
                  <Box key={key} className={classes.stepIndicator}>
                    <div className={cx(
                      { 'active': name === step },
                      name === step
                        ? globalClasses.textInverseHighlight
                        : globalClasses.textNormal
                    )}>
                      {key + 1}
                    </div>
                    <span className={cx(
                      mediaUp(media.md) && globalClasses.textSubTitle,
                      name === step
                        ? globalClasses.textInverseHighlight
                        : globalClasses.textNormal
                    )}>
                      {trans(title)}
                    </span>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={4} item
          className={classes.rightPanel}
        >
          <Box>
            <img alt='' src={setupBusiness} />
            <p className={cx(
              globalClasses.textTitle,
              globalClasses.textInverseHighlight
            )}>
              {trans('login.setup_your_business')}
            </p>
          </Box>
          <Box className={classes.hand}>
            <img src={hand} alt=""/>
            <Box className={globalClasses.textNormal}>
              <span>
                {trans('login.need_a_helping_hand')}
              </span>
              <br/>
              <small>
                <FormattedMessage
                  id='login.mail_us_at'
                  values={{
                    newline: <br/>,
                    mail: (
                      <Link
                        className={globalClasses.textInverseHighlight}
                        inverse
                      >
                        help@vencru.com
                      </Link>
                    ),
                    number: (
                      <Link
                        className={globalClasses.textInverseHighlight}
                        inverse
                      >
                        1 (818) 351-9390
                      </Link>
                    )
                  }}
                />
              </small>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default withRouter(SetupBusiness);
