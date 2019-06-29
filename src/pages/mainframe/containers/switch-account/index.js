import React from 'react';
import cx from 'classnames';

import Avatar from '@material-ui/core/Avatar';

import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

import { ReactComponent as BusinessIcon } from 'resources/mainframe/business.svg';

import useIntl from 'hooks/intl';
import useStyles from './styles';

function SwitchAccount(props) {
  const trans = useIntl();
  const { data, onClose, selected, menuExpand, ...other } = props;
  const classes = useStyles();
  
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Dialog
        className={cx(
          classes.accountDialog,
          { 'expand': menuExpand }
        )}
        onClose={() => onClose(selected)}
        {...other}
      >
        <DialogTitle>
          {trans('mainframe.your_business_accounts')}
        </DialogTitle>
        <List>
          {data.map(({ name, email }, key) => (
            <ListItem
              button
              key={key}
              onClick={() => onClose(key)}
              className={cx(
                classes.accountMenuItem,
                {[classes.accountSelected]: key === selected}
              )}
            >
              <ListItemAvatar>
                <Avatar>
                  <BusinessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={email}
              />
              {selected === key && (
                <CheckIcon/>
              )}
            </ListItem>
          ))}

          <ListItem button onClick={() => onClose(-1)}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.accountMenuItem}
              primary={trans('mainframe.add_new_account')}
            />
          </ListItem>
        </List>
      </Dialog>
    </ClickAwayListener>
  );
}

export default SwitchAccount;
