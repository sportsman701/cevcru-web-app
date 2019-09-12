import { useSelector, shallowEqual } from 'react-redux';
import accountSelector from 'redux/account/selectors'


export default function () {
  const account = useSelector(accountSelector, shallowEqual);
  return () => account;
}
