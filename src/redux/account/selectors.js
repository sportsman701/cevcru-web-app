import { mapKeys, camelCase } from 'lodash'

export const accountSelector = ({ account }) => mapKeys(account, (value, key) => {
  switch (key) {
    case 'userName':
      return 'email';
    
    case 'emailconfirmed':
      return 'emailConfirmed';
    
    default:
      return camelCase(key);
  }
})
