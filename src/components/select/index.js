import React from 'react';
import cx from 'classnames';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '../input';
import useStyles from './style';


function Dropdown(props) {
  const classes = useStyles(props);
  const { children, frame, value, error, ...other } = props;
  
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
      error={error}
      IconComponent={ExpandMoreIcon}
      value={value === undefined ? '' : value}
      classes={{
        select: cx(classes.root, {'error': error}),
        icon: classes.icon
      }}
      input={<Input/>}
    >
      {children}
    </Select>
  )
}

export default Dropdown;
