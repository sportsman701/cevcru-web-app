import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import qs from 'qs';
import { capitalize } from 'lodash'
import { getInvoice, getAllPayment } from 'redux/sales/actions';


function Invoice(props) {
  const dispatch = useDispatch();
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
        onSuccess: () => resolve(),
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
        onSuccess: () => resolve(),
        onFaile: (status, data) => reject(capitalize(data.Message))
      }));
    });

    Promise.all([getInvoiceRequest, getAllPaymentRequest])
      .then(props.onApiSuccess)
      .catch(error => props.onApiFail(error));
  }, []);
    // props.onApiSuccess()
  
  return <div>Invoice</div>
}

export default React.memo(Invoice);
