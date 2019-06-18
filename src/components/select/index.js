import React from 'react';
import Select from '@material-ui/core/Select';
import Input from '../input';
import useStyles from './style';


function Dropdown(props) {
  const classes = useStyles(props);
  const { children, frame, value, ...other } = props;

  return frame ? (
    <Input
      frame
      select
      {...other}
      value={value}
    >
      {children}
    </Input>
  ) : (
    <Select
      {...other}
      value={value === undefined ? '' : value}
      classes={{select: classes.root}}
      input={<Input/>}
    >
      {children}
    </Select>
  )
}

export default Dropdown;
