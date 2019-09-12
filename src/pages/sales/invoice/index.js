import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import cx from 'classnames';
import qs from 'qs';
import { capitalize } from 'lodash'
import { FormattedMessage } from 'react-intl'
import { getInvoice, getAllPayment } from 'redux/sales/actions';

import SnackBar from 'components/snackbar';
import Split from 'components/split';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Button from 'components/button';

import useGlobalStyles from 'hooks/styles';
import accountLogo from 'resources/sale/larochelle.png'
import paystack from 'resources/sale/paystack.png'
import stampFullyPaid from 'resources/sale/invoice-fully-paid.svg'
import stampOverdue from 'resources/sale/invoice-over-due.svg'
import stampDeposit from 'resources/sale/invoice-deposit-paid.svg'
import vencru from 'resources/logo/vencru-horizontal-mobile.svg'

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

  document.title = 'Vencru - Invoice';
  
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

      <p className={cx(
        classes.title,
        globalClasses.textXLarge
      )}>
        Invoice {invoice.invoicenumber} for {invoice.client.firstname} {invoice.client.lastname}
      </p>

      <Box className={cx(
        globalClasses.section,
        classes.invoiceSection
      )}>
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
            {invoice.invoicestatus !== 'not paid' && (
                <img
                  alt=''
                  src={ invoice.invoicestatus === 'deposit paid' ? stampDeposit
                     : invoice.invoicestatus === 'fully paid' ? stampFullyPaid
                     : stampOverdue  }
                />
            )}
          </Grid>

          <Grid item xs className={classes.overviewRight}>
            { mediaUp(media.md) && (
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
              <div>{invoice.issue_date.slice(0, 10)}</div>
            </div>

            <div className={classes.overviewMeta}>
              <div className={globalClasses.textPrimary}>
                <b>{trans('sales.due_date')}</b>
              </div>
              <div>{invoice.due_date.slice(0, 10)}</div>
            </div>
          </Grid>
        </Grid>
        
        <Split/>

        {mediaUp(media.md) ? (
          <table className={classes.invoiceTable}>
            <thead>
              <tr>
                <th className={globalClasses.textPrimary}>
                  {trans('sales.item')}
                  <div className={classes.itemDescription}>
                    {trans('sales.description')}
                  </div>
                </th>
                <th className={globalClasses.textPrimary}>
                  {trans('sales.price')}
                </th>
                <th className={globalClasses.textPrimary}>
                  {trans('sales.qty')}
                </th>
                <th className={cx(
                  globalClasses.textPrimary,
                  classes.alignRight
                )}>
                  {trans('sales.amount')}
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map(({ id, price, quantity, description, amount, productname }) => (
                <tr key={id}>
                  <td>
                    { productname || description }
                    <br/>
                    <i className={classes.itemDescription}>
                      {description}
                    </i>
                  </td>
                  <td>${ price }</td>
                  <td>{ quantity }</td>
                  <td className={classes.alignRight}>${ amount }</td>
                </tr>
              ))}
              <tr className={classes.alignRight}>
                <td colSpan={2} rowSpan={7}></td>
                <td>{trans('sales.subtotal')}</td>
                <td>${ invoice.subtotal }</td>
              </tr>
              <tr className={classes.alignRight}>
                <td>
                  {Math.round(invoice.discount * 100 / invoice.subtotal)}%
                  &nbsp;
                  {trans('sales.discount')}
                </td>
                <td>${ invoice.discount }</td>
              </tr>
              <tr className={classes.alignRight}>
                <td>
                  {(invoice.amountdue - invoice.subtotal + invoice.discount) * 100 / invoice.subtotal}%
                  &nbsp;
                  {trans('sales.tax')}
                </td>
                <td>${invoice.amountdue - invoice.subtotal + invoice.discount}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Split thin />
                </td>
              </tr>
              <tr className={cx(
                classes.alignRight,
                globalClasses.textLarge
              )}>
                <td className={globalClasses.textPrimary}>
                  <b>{trans('sales.amount_due')}</b>
                </td>
                <td>${ invoice.amountdue }</td>
              </tr>
              <tr className={classes.alignRight}>
                <td>
                  {Math.round(invoice.deposit * 100 / invoice.subtotal)}%
                  &nbsp;
                  {trans('sales.deposit')}
                </td>
                <td>${ invoice.deposit }</td>
              </tr>
              <tr className={cx(
                classes.alignRight,
                globalClasses.textLarge
              )}>
                <td className={globalClasses.textGreen}>
                  <b>{trans('sales.amount_paid')} (USD)</b>
                </td>
                <td>${invoice.amountpaid}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className={classes.invoiceTable}>
            <thead>
              <tr>
                <th className={globalClasses.textPrimary}>
                  {trans('sales.description')}
                </th>
                <th className={cx(
                  globalClasses.textPrimary,
                  classes.alignRight
                )}>
                  {trans('sales.total_amount')}
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map(({ id, price, quantity, description, amount, productname }) => (
                <tr key={id}>
                  <td>
                    { productname || description }
                    <br/>
                    <span className={classes.itemDescription}>
                      <FormattedMessage
                        id='sales.qty_price_unit'
                        values={{ qty: quantity, price: `$${price}` }}
                      />
                    </span>
                  </td>
                  <td className={classes.alignRight}>
                    ${amount}
                  </td>
                </tr>
              ))}
              <tr className={classes.alignRight}>
                <td>{trans('sales.subtotal')}</td>
                <td>${invoice.subtotal}</td>
              </tr>
              <tr className={classes.alignRight}>
                <td>
                  {Math.round(invoice.discount * 100 / invoice.subtotal)}%
                  &nbsp;
                  {trans('sales.discount')}
                </td>
                <td>${invoice.discount}</td>
              </tr>
              <tr className={classes.alignRight}>
                <td>
                  {(invoice.amountdue - invoice.subtotal + invoice.discount) * 100 / invoice.subtotal}%
                  &nbsp;
                  {trans('sales.tax')}
                </td>
                <td>${invoice.amountdue - invoice.subtotal + invoice.discount}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Split thin className={classes.tableSplit}/>
                </td>
              </tr>
              <tr className={cx(
                classes.alignRight,
                globalClasses.textLarge
              )}>
                <td className={globalClasses.textPrimary}>
                  <b>{trans('sales.amount_due')}</b>
                </td>
                <td>${invoice.amountdue}</td>
              </tr>
              <tr className={classes.alignRight}>
                <td>
                  {Math.round(invoice.deposit * 100 / invoice.subtotal)}%
                  &nbsp;
                  {trans('sales.deposit')}
                </td>
                <td>${invoice.deposit}</td>
              </tr>
              <tr className={cx(
                classes.alignRight,
                globalClasses.textLarge
              )}>
                <td className={globalClasses.textGreen}>
                  <b>{trans('sales.amount_paid')} (USD)</b>
                </td>
                <td>${invoice.amountpaid}</td>
              </tr>
            </tbody>
          </table>
        )}

        <Grid container className={classes.topSpacing}>
          <Grid
            item xs={12}
            className={classes.leftAlign}
          >
            <p className={cx(
              globalClasses.textPrimary,
              globalClasses.textLarge,
            )}>
              {trans('sales.payment_instructions')}
            </p>
            <div>
              {trans('sales.direct_bank_transfer')}
            </div>
            <div className={globalClasses.textPrimary}>
              {trans('sales.bank_name')}: {invoice.bankname || 'N/A'}
            </div>
            <div className={globalClasses.textPrimary}>
              {trans('sales.account_number')}: {invoice.accountnumber || 'N/A'}
            </div>
            <div className={globalClasses.textPrimary}>
              {trans('sales.account_name')}: {invoice.accountname || 'N/A'}
            </div>
          </Grid>
          {/* <Grid
            item xs={12} sm={6}
            className={cx({[classes.topSpacing]: !mediaUp(media.sm)})}
          >
            <p className={cx({[classes.leftAlign]: !mediaUp(media.sm)})}>
              {trans('sales.online_bank_or_card_payment')}
            </p>
            <div className={classes.paynow}>
              <Button thin green fullWidth>
                {trans('sales.pay_now')}
              </Button>
            </div>

            <div className={classes.paystack}>
              <small>{trans('sales.secured_by')}</small>
              <img src={paystack} alt='' />
            </div>
          </Grid>*/}
        </Grid>

        <Box className={classes.leftAlign}>
          <p className={cx(
            globalClasses.textPrimary,
            globalClasses.textLarge,
          )}>
            {trans('sales.notes_and_terms')}
          </p>
          <div>
            {trans('sales.thank_you_for_your_order')}
          </div>
        </Box>

        <Split />

        <Box className={classes.footer}>
          <span>{trans('sales.powered_by')}</span>
          <img src={vencru} alt='' />
        </Box>

        {mediaUp(media.sm) && (
          <p className={cx(
            globalClasses.textNormal,
            classes.footerDesc
          )}>
            <i><small>{trans('sales.track_your_business_profits')}</small></i>
          </p>
        )}
      </Box>

      <div className={classes.historySection}>
        <p className={cx(
          classes.leftAlign,
          classes.historyTitle,
          globalClasses.textXLarge
        )}>
          {trans('sales.all_payments_for_invoice')}
          &nbsp;
          {invoice.invoicenumber}
        </p>

        {mediaUp(media.sm) ? (
          <>
            <Grid container className={classes.historyTableHeader}>
              <Grid item sm={1} />
              <Grid item sm={3} md={2}>
                {trans('sales.date')}
              </Grid>
              <Grid item sm={3} md={2}>
                {trans('sales.type')}
              </Grid>
              <Grid item sm={5} md={7}>
                {trans('sales.payment_made')}
              </Grid>
            </Grid>
            {Array(5).fill(0).map((item, key) => (
              <Grid
                container
                key={key}
                className={globalClasses.miniSection}
              >
                <Grid item sm={1} />
                <Grid item sm={3} md={2}>
                  30/08/2018
                </Grid>
                <Grid item sm={3} md={2}>
                  {trans('sales.cache')}
                </Grid>
                <Grid item sm={5} md={7}>
                  $2,500
                </Grid>
              </Grid>
            ))}
          </>
        ) : (
          <table className={classes.historyTable}>
            <thead>
              <tr>
                <th>{trans('sales.basic_info')}</th>
                <th className={classes.alignRight}>
                  {trans('sales.payment_made')}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill(0).map((item, key) => (
                <React.Fragment key={key}>
                  <tr>
                    <td colSpan={2}>
                      <Split thin light={key > 0} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      25/08/2019
                      <br/>
                      <small className={globalClasses.textNormal}>
                        {trans('sales.cache')}
                      </small>
                    </td>
                    <td className={cx(
                      globalClasses.textPrimary,
                      classes.alignRight
                    )}>
                      $2,500.00
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default React.memo(Invoice);
