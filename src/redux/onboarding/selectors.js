import { mapKeys } from 'lodash'

const fields = { }

export default ({ onboarding }) => {
  const root = mapKeys(onboarding, (value, key) => fields[key]);
  return root;
}

export const currencySelector = ({ onboarding }) => onboarding.currency
