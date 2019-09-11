import React from 'react';

function ViewLoader(props) {
  const {subview: SubView, ...subprops} = props;

  function handleApiSuccess() {

  }

  function handleApiFail() {

  }
  
  return (
    <SubView
      {...subprops}
      onApiSuccess={handleApiSuccess}
      onApiFail={handleApiFail}
    />
  )
}

export default React.memo(ViewLoader);
