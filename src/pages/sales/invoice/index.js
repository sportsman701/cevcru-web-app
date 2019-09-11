import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import qs from 'qs';
import { capitalize } from 'lodash'
import { getInvoice, getAllPayment } from 'redux/sales/actions';


function Invoice(props) {
  const dispatch = useDispatch();
  const [invoiceData, setInvoiceData] = useState();

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
    <div>invoice</div>
  )
}

export default React.memo(Invoice);
