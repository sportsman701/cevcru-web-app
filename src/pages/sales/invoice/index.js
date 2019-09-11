import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import qs from 'qs';
import { capitalize } from 'lodash'
import { FormattedMessage } from 'react-intl'
import { getInvoice, getAllPayment } from 'redux/sales/actions';

import SnackBar from 'components/snackbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useGlobalStyles from 'hooks/styles';
import useStyles from './style';


function Invoice(props) {
  const dispatch = useDispatch();
  const [invoiceData, setInvoiceData] = useState();
  const [showSnack, setShowSnack] = useState(true);
  
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

  return (
    <>
      <SnackBar
        show={showSnack}
        onClose={() => setShowSnack(false)}
      >
        <FormattedMessage
          id='sales.get_invoice_snack_message'
          values={{
            name: <b>{invoiceData.invoice.client.firstname}</b>,
            account: <b>La Rochelle Bakery</b>
          }}
        />
      </SnackBar>

      <Typography className={classes.title}>
        Invoice 00000010 for Jane Data
      </Typography>

      <Box className={globalClasses.section}>
      </Box>
    </>
  )
}

export default React.memo(Invoice);
