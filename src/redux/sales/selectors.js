import { mapKeys, findIndex } from 'lodash'

const fields = {
  // "userid":               "userId",
  // "email":                "email",
  // "emailconfirmed":       "emailConfirmed",
  // "loginprovider":        "loginProvider",
  // "firstname":            "firstName",
  // "lastname":             "lastName",
  // "currentbusinessid":    "currentBusinessId",
  // "profileimageurl":      "profileImageUrl",
  // "profileimagekey":      "profileImageKey",
  // "date_created":         "dateCreated",
  // "LastLoginTime":        "lastLoginTime",
  // "IsAdmin":              "isAdmin",
  // "IsActive":             "isActive",
  // "AdminRole":            "adminRole",
  // "ReferralCode":         "referralCode",
  // "ReferredBy":           "referredBy",
  // "ReferredPoints":       "referredPoints",
  // "IsPayStackConnected":  "isPayStackConnected",
  // "userplan":             "userPlan",
  // "planid":               "planId",
  // "planname":             "planName",
  // "plantype":             "planType",
  // "planKey":              "planKey",
  // "price":                "price",
  // "date_expire":          "dateExpire",
  // "isactive":             "isActive",
  // "planinfo":             "planInfo",
  // "referencenumber":      "referenceNumber",
  // "trialdays":            "trialDays",
  // "promocode":            "promoCode",
  // "authcode":             "authCode",
  // "business":             "business"
}

export default ({ sales }) => {
  return mapKeys(sales, (value, key) => fields[key]);
}

// export const invoiceSelector = ({ sales }) => sales.invoice
