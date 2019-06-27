import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { findIndex } from 'lodash'

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Dialog from '@material-ui/core/Dialog';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from 'components/button';
import { useMediaUp, media } from 'hooks/media';
import useIntl from 'hooks/intl';

import { ReactComponent as ToggleLeftMenuIcon } from 'resources/home/toggle-left-menu.svg';
import { ReactComponent as NotificationIcon } from 'resources/home/notification.svg';
import { ReactComponent as BusinessIcon } from 'resources/home/business.svg';
import { ReactComponent as HomeIcon } from 'resources/home/home.svg';
import { ReactComponent as MoreIcon } from 'resources/home/more.svg';
import { ReactComponent as DashboardIcon } from 'resources/home/dashboard.svg';
import { ReactComponent as SalesIcon } from 'resources/home/sale.svg';
import { ReactComponent as ExpenseIcon } from 'resources/home/expense.svg';
import { ReactComponent as ClientIcon } from 'resources/home/client.svg';
import { ReactComponent as InventoryIcon } from 'resources/home/inventory.svg';
import { ReactComponent as SettingIcon } from 'resources/home/setting.svg';
import { ReactComponent as ShareIcon } from 'resources/home/share.svg';
import { ReactComponent as HelpIcon } from 'resources/home/help.svg';
import { ReactComponent as SendIcon } from 'resources/home/send.svg';

import useGlobalStyles from 'hooks/styles';
import useStyles from './style';


const menubar = [
  { icon: HomeIcon, label: 'home.home', link: '/' },
  { icon: DashboardIcon, label: 'home.dashboard', link: '/dashboard' },
  { icon: SalesIcon, label: 'home.sales', link: '/sales' },
  { icon: ExpenseIcon, label: 'home.expenses', link: '/expenses' },
  { icon: ClientIcon, label: 'home.clients', link: '/clients' },
  { icon: InventoryIcon, label: 'home.inventory', link: '/inventory' },
  { icon: SettingIcon, label: 'home.account_settings', link: '/settings' },
  { icon: ShareIcon, label: 'home.share_earn', link: '/share' },
  { icon: HelpIcon, label: 'home.help', link: '/help' }
]

const sidebar = [
  { icon: InventoryIcon, label: 'home.items', link: '/inventory' },
  { icon: ClientIcon, label: 'home.clients', link: '/clients' },
  { },
  { icon: DashboardIcon, label: 'home.dashboard', link: '/dashboard' },
  { icon: SalesIcon, label: 'home.sales', link: '/sales' },
  { icon: ExpenseIcon, label: 'home.expenses', link: '/expenses' },
  { },
  { icon: SettingIcon, label: 'home.account_settings', link: '/settings' },
  { icon: ShareIcon, label: 'home.share_earn', link: '/share' },
  { icon: HelpIcon, label: 'home.help', link: '/help' }
]

function AccountDialog(props) {
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
          {trans('home.your_business_accounts')}
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
              primary={trans('home.add_new_account')}
            />
          </ListItem>
        </List>
      </Dialog>
    </ClickAwayListener>
  );
}

const accounts = [
  { name: 'Rochelle', email: 'Vencru.creative@gmail.com', value: 0 },
  { name: 'Le Hombre Salon', email: 'team.support@gmail.com', value: 1 }
]

function Home(props) {
  const globalClasses = useGlobalStyles();
  const trans = useIntl();
  const mediaUp = useMediaUp();
  const classes = useStyles();
  const [ expandLeftMenu, setExpandLeftMenu ] = useState(true);
  const [ openSideBar, setOpenSideBar ] = useState(false);
  const [ accountDialog, setAccountDialog ] = useState(false);
  const [ account, setAccount ] = useState(0)

  const page = props.match.params.page || '';
  const pageIndex = findIndex(menubar, { link: `/${page}`});

  const initial = accounts[account].name.split(' ').map(v => v.toUpperCase()[0]).join('');

  const handleToggleLeftMenuClick = () => setExpandLeftMenu(stat => !stat)

  const handleBottomMoreClick = () => setOpenSideBar(true)

  const handleAccountDialogClose = value => {
    setAccountDialog(false);
    if (value >= 0 && account !== value) {
      setAccount(value);
    }
  }

  return (
    <>
      <AppBar className={cx(
        classes.appbar,
        { expand: expandLeftMenu }
      )}>
        <Toolbar className={classes.toolbar}>
          { mediaUp(media.sm) ? (
            <>
              <div className={classes.accountSelector}>
                <Button onClick={() => setAccountDialog(stat => !stat)}>
                  <BusinessIcon />
                  {accounts[account].name}
                  <ExpandMoreIcon/>
                </Button>
              </div>
              <Grid container spacing={2}>
                <Grid item>
                  <Button thin inverse>
                    <SendIcon/>
                    {trans('home.invite')}
                  </Button>
                </Grid>
                <Grid item>
                  <Button thin hasIconRight>
                    {trans('home.create_new')}
                    <ExpandMoreIcon/>
                  </Button>
                </Grid>
                <Grid item>
                  <Badge variant='dot' className={classes.notification}>
                    <NotificationIcon/>
                  </Badge>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              mobile
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{paper: cx(
          classes.drawerPaper,
          { expand: expandLeftMenu }
        )}}
      >
        <div className={classes.leftMenuToggleBar}>
          <Button
            hasIconRight
            className={classes.toggleMenu}
            onClick={handleToggleLeftMenuClick}
          >
            <ToggleLeftMenuIcon/>
          </Button>
          <div></div>
        </div>
        <Divider/>
        <List>
          {menubar.map(({ icon: Icon, label, link}, key) => (
            <ListItem
              button
              component={Link}
              to={link}
              key={key}
              className={cx(
                classes.menubarItem,
                { expand: expandLeftMenu }
              )}
            >
              <ListItemIcon>
                <Icon className={cx(
                  classes.menubarIcon,
                  { active: key === pageIndex }
                )}/>
              </ListItemIcon>
              {expandLeftMenu && (
                <ListItemText
                  primary={trans(label)}
                  className={globalClasses.textContrast}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <SwipeableDrawer
        anchor="right"
        open={openSideBar}
        className={classes.sideDrawer}
        onOpen={() => setOpenSideBar(true)}
        onClose={() => setOpenSideBar(false)}
      >
          <div
            role="presentation"
            className={classes.sidebar}
            onClick={() => setOpenSideBar(false)}
            onKeyDown={() => setOpenSideBar(false)}
          >
            <div className={classes.sidebarAvatar}>
              <Button fullWidth onClick={() => setAccountDialog(true)}>
                <div className={globalClasses.textInverseHighlight}>
                  <p>{ accounts[account].name }</p>
                  <p>{ accounts[account].email }</p>
                </div>
                <Avatar
                  className={classes.avatar}
                  style={{ fontSize:
                    initial.length > 3 ? '14px' :
                    initial.length === 3 ? '18px' : '24px'
                  }}
                >
                  {initial}
                </Avatar>
              </Button>
            </div>
            <List>
              {sidebar.map(({ icon: Icon, label, link}, key) =>
                link ? (
                  <ListItem
                    button
                    to={link}
                    key={key}
                    component={Link}
                    className={classes.sidebarItem}
                  >
                    <ListItemIcon className={classes.sidebarIcon}>
                      <Icon className={cx({active: link === `/${page}`})}/>
                    </ListItemIcon>
                    <ListItemText
                      primary={trans(label)}
                      className={globalClasses.textNormal}
                    />
                  </ListItem>
                ) : <Divider key={key} />
              )}
            </List>
          </div>
      </SwipeableDrawer>
      <div
        className={classes.bottomNavigator}
        onClick={openSideBar ? () => setOpenSideBar(false) : undefined}
      >
        <Tabs
          value={pageIndex < 4 ? pageIndex : undefined}
          variant="scrollable"
          scrollButtons="off"
          indicatorColor="primary"
          textColor="primary"
        >
          {menubar.slice(0, 4).map(({ icon: Icon, label, link}, key) => (
            <Tab
              key={key}
              label={trans(label)}
              component={Link}
              to={link}
              icon={<Icon/>}
              className={classes.tab}
            />  
          ))}
          <Tab
            onClick={handleBottomMoreClick}
            label="More"
            icon={<MoreIcon />}
            className={classes.tab}
          />
        </Tabs>
      </div>
      <AccountDialog
        data={accounts}
        open={accountDialog}
        selected={account}
        onClose={handleAccountDialogClose}
        menuExpand={expandLeftMenu}
      />
    </>
  )
}

export default React.memo(Home);
