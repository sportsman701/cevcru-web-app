import React from 'react';

function Invoice(props) {
  console.log(props)
  return <div>Invoice</div>
}

export default React.memo(Invoice);
