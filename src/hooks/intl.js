import { useIntl } from 'react-intl';

export default function () {
  const intl = useIntl();
  return (id, variables) => intl.formatMessage({ id }, variables);
}
