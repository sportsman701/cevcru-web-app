import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import Input from '../input';
import useStyles from './style';

function Dropdown(props) {
  const classes = useStyles(props);
  const { children } = props;
  const [ value, setValue ] = useState('');

  const handleChange = event => setValue(event.target.value);

  return (
    <Select
      {...props}
      value={value}
      onChange={handleChange}
      classes={{select: classes.root}}
      input={<Input/>}
    >
      {children}
    </Select>
  )
}

export default Dropdown;
