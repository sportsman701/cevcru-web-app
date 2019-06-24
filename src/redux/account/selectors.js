import { mapKeys, findIndex } from 'lodash'

const fields = {
  "userid":               "userId",
  "email":                "email",
  "emailconfirmed":       "emailConfirmed",
  "loginprovider":        "loginProvider",
  "firstname":            "firstName",
  "lastname":             "lastName",
  "currentbusinessid":    "currentBusinessId",
  "profileimageurl":      "profileImageUrl",
  "profileimagekey":      "profileImageKey",
  "date_created":         "dateCreated",
  "LastLoginTime":        "lastLoginTime",
  "IsAdmin":              "isAdmin",
  "IsActive":             "isActive",
  "AdminRole":            "adminRole",
  "ReferralCode":         "referralCode",
  "ReferredBy":           "referredBy",
  "ReferredPoints":       "referredPoints",
  "IsPayStackConnected":  "isPayStackConnected",
  "userplan":             "userPlan",
  "planid":               "planId",
  "planname":             "planName",
  "plantype":             "planType",
  "planKey":              "planKey",
  "price":                "price",
  "date_expire":          "dateExpire",
  "isactive":             "isActive",
  "planinfo":             "planInfo",
  "referencenumber":      "referenceNumber",
  "trialdays":            "trialDays",
  "promocode":            "promoCode",
  "authcode":             "authCode",
  "business":             "business"
}

export default ({ account }) => {
  const root = mapKeys(account, (value, key) => fields[key]);
  root.userPlan = mapKeys(root.userPlan, (value, key) => fields[key]);
  return root;
}

export const identitySelector = ({ account }) => ({
  userId: account.userid,
  email: account.email
})

export const initialSetupSelector = ({ account }) => ({
  emailConfirmed: account.emailconfirmed,
  businessSetup: findIndex(account.business, ['id', account.currentbusinessid]) >= 0
})
