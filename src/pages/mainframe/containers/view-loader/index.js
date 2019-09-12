import React, { useState } from 'react';
import cx from 'classnames';

import Typography from '@material-ui/core/Typography';

import BarLoader from 'components/loader';

import { ReactComponent as Logo } from 'resources/logo/vencru.svg';

import useAuth from 'hooks/auth';
import useStyles from './style';

const apiStates = {
  fetching: 0,
  success: 1,
  fail: 2
}

function ViewLoader(props) {
  const {subview: SubView, ...subprops} = props;
  const initState = {apiState: apiStates.fetching, message: undefined};
  const [{ apiState, message }, setViewState] = useState(initState);
  const auth = useAuth();
  const classes = useStyles({ auth: !!auth() });

  function handleApiSuccess() {
    setViewState({ apiState: apiStates.success });
  }

  function handleApiFail(message) {
    setViewState({ apiState: apiStates.fail, message })
  }
  
  return (
    <>
      {apiState === apiStates.fetching && (
        <div className={classes.statusShower}>
          <div className={classes.statusContainer}>
            <Logo className={classes.logo}/>
            <BarLoader loading />
          </div>
        </div>
      )}
      {apiState === apiStates.fail && (
        <div className={classes.statusShower}>
          <div className={classes.statusContainer}>
            <Typography>{message}</Typography>
          </div>
        </div>
      )}
      {SubView && (
        <div className={cx(
          classes.viewContainer, {'show': apiState === apiStates.success}
        )}>
          <SubView
            {...subprops}
            onApiSuccess={handleApiSuccess}
            onApiFail={handleApiFail}
          />
        </div>
      )}
    </>
  )
}

export default React.memo(ViewLoader);
