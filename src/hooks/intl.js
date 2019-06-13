import { useIntl } from 'react-intl';

export default function () {
  return (id, variables) => useIntl().formatMessage({ id }, variables)
}
