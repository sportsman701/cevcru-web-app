import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import BarLoader from 'components/loader';

import { ReactComponent as Logo } from 'resources/logo/vencru.svg';

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
  const classes = useStyles();

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
      <Box display={{ xs: apiState === apiStates.success ? 'block' : 'none' }}>
        <SubView
          {...subprops}
          onApiSuccess={handleApiSuccess}
          onApiFail={handleApiFail}
        />
      </Box>
    </>
  )
}

export default React.memo(ViewLoader);
