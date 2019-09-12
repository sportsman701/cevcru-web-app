import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import cx from 'classnames';
import qs from 'qs';
import { capitalize } from 'lodash'
import { FormattedMessage } from 'react-intl'
import { getInvoice, getAllPayment } from 'redux/sales/actions';

import SnackBar from 'components/snackbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import useGlobalStyles from 'hooks/styles';
import accountLogo from 'resources/sale/larochelle.png'
import stampFullyPaid from 'resources/sale/invoice-fully-paid.svg'
import stampOverdue from 'resources/sale/invoice-over-due.svg'
import stampDeposit from 'resources/sale/invoice-deposit-paid.svg'

import { media, useMediaUp } from 'hooks/media';
import useIntl from 'hooks/intl';
import useStyles from './style';


function Invoice(props) {
  const dispatch = useDispatch();
  const [invoiceData, setInvoiceData] = useState();
  const [showSnack, setShowSnack] = useState(true);
  const trans = useIntl();
  const mediaUp = useMediaUp();
  
  const globalClasses = useGlobalStyles();
  const classes = useStyles();

  const { token, invoiceid, businessid } =
    qs.parse(props.location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    const getInvoiceRequest = new Promise((resolve, reject) => {
      dispatch(getInvoice({
        params: {
          businessid,
          invoiceid,
          userId: token
        },
        onSuccess: data => resolve(data),
        onFail: (status, data) => reject(capitalize(data.Message))
      }));
    });

    const getAllPaymentRequest = new Promise((resolve, reject) => {
      dispatch(getAllPayment({
        params: {
          businessid,
          invoiceid,
          sortby: 'date_created',
          sortorder: 'desc',
          searchquery: '',
          limit: 1000000,
          page: 1,
          fromdate: '',
          todate: '',
          filter: ''
        },
        onSuccess: data => resolve(data),
        onFaile: (status, data) => reject(capitalize(data.Message))
      }));
    });

    Promise.all([getInvoiceRequest, getAllPaymentRequest])
      .then(values => {
        setInvoiceData({ invoice: values[0], payment: values[1] });
        props.onApiSuccess();
      })
      .catch(error => props.onApiFail(error));
  }, []);
  
  if (!invoiceData) {
    return undefined;
  }

  const {invoice} = invoiceData;

  return (
    <>
      <SnackBar
        show={showSnack}
        onClose={() => setShowSnack(false)}
      >
        <FormattedMessage
          id='sales.get_invoice_snack_message'
          values={{
            name: <b>{invoice.client.firstname}</b>,
            account: <b>La Rochelle Bakery</b>
          }}
        />
      </SnackBar>

      <p className={cx(classes.title, globalClasses.textSubTitle)}>
        Invoice {invoice.invoicenumber} for {invoice.client.firstname} {invoice.client.lastname}
      </p>

      <Box className={globalClasses.section}>
        <Grid
          justify='space-between'
          className={classes.overview}
          container
        >
          <Grid item xs className={classes.overviewLeft}>
            <img
              src={accountLogo}
              className={classes.accountLogo}
              alt=''
            />
            <p className={cx(
              globalClasses.textPrimary,
              globalClasses.textLarge
            )}>
              <b>{trans('sales.billed_to')}</b>
            </p>
            <div>
              {invoice.client.firstname} {invoice.client.lastname}
            </div>
            <div className={globalClasses.textPrimary}>
              {invoice.client.companyemail}
            </div>
            <div>
              +{invoice.client.phonenumber}
            </div>
          </Grid>

          <Grid item xs className={classes.overviewStamp}>
            <img src={stampFullyPaid} alt='' />
          </Grid>

          <Grid item xs className={classes.overviewRight}>
            { mediaUp(media.sm) && (
              <>
                <div className={cx(
                  globalClasses.textPrimary,
                  classes.overviewSpace
                )}>
                  <b>La Rochelle sweets</b>
                </div>
                <div>No 7 ajah estate, lagos</div>
                {/* <div>{invoice.client.street}, {invoice.client.city}, {invoice.client.country}</div> */}
                <div>
                  {invoice.client.phonenumber}
                </div>
                <div className={classes.overviewSpace}>
                  {invoice.email}
                </div>
              </>
            )}

            <div className={classes.overviewMeta}>
              <div className={globalClasses.textPrimary}>
                <b>{trans('sales.invoice_number')}</b>
              </div>
              <div>{invoice.invoicenumber}</div>
            </div>

            <div className={classes.overviewMeta}>
              <div className={globalClasses.textPrimary}>
                <b>{trans('sales.date_of_issue')}</b>
              </div>
              <div>31/07/2019</div>
            </div>

            <div className={classes.overviewMeta}>
              <div className={globalClasses.textPrimary}>
                <b>{trans('sales.due_date')}</b>
              </div>
              <div>31/08/2019</div>
            </div>
          </Grid>
        </Grid>
        <hr className={globalClasses.hbar}/>
      </Box>
    </>
  )
}

export default React.memo(Invoice);
