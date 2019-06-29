import React, { useState, useReducer } from 'react';
import { createAction } from 'redux-actions';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { findIndex } from 'lodash'

import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SwitchAccount from './switch-account';
import Button from 'components/button';
import { useMediaUp, media } from 'hooks/media';
import useIntl from 'hooks/intl';

import { ReactComponent as ToggleLeftMenuIcon } from 'resources/mainframe/toggle-left-menu.svg';
import { ReactComponent as NotificationIcon } from 'resources/mainframe/notification.svg';
import { ReactComponent as BusinessIcon } from 'resources/mainframe/business.svg';
import { ReactComponent as HomeIcon } from 'resources/mainframe/home.svg';
import { ReactComponent as MoreIcon } from 'resources/mainframe/more.svg';
import { ReactComponent as DashboardIcon } from 'resources/mainframe/dashboard.svg';
import { ReactComponent as SalesIcon } from 'resources/mainframe/sale.svg';
import { ReactComponent as ExpenseIcon } from 'resources/mainframe/expense.svg';
import { ReactComponent as ClientIcon } from 'resources/mainframe/client.svg';
import { ReactComponent as InventoryIcon } from 'resources/mainframe/inventory.svg';
import { ReactComponent as SettingIcon } from 'resources/mainframe/setting.svg';
import { ReactComponent as SignoutIcon } from 'resources/mainframe/setting.svg';
import { ReactComponent as ShareIcon } from 'resources/mainframe/share.svg';
import { ReactComponent as HelpIcon } from 'resources/mainframe/help.svg';
import { ReactComponent as SendIcon } from 'resources/mainframe/send.svg';

import useGlobalStyles from 'hooks/styles';
import useStyles from './style';


const menubarContent = [
  { icon: HomeIcon, label: 'mainframe.home', link: '/' },
  { icon: DashboardIcon, label: 'mainframe.dashboard', link: '/dashboard' },
  { icon: SalesIcon, label: 'mainframe.sales', link: '/sales' },
  { icon: ExpenseIcon, label: 'mainframe.expenses', link: '/expenses' },
  { icon: ClientIcon, label: 'mainframe.clients', link: '/clients' },
  { icon: InventoryIcon, label: 'mainframe.inventory', link: '/inventory' },
  { icon: SettingIcon, label: 'mainframe.account_settings', link: '/settings' },
  { icon: ShareIcon, label: 'mainframe.share_earn', link: '/share' },
  { icon: HelpIcon, label: 'mainframe.help', link: '/help' }
]

const sidebarContent = [
  { icon: InventoryIcon, label: 'mainframe.items', link: '/inventory' },
  { icon: ClientIcon, label: 'mainframe.clients', link: '/clients' },
  { },
  { icon: DashboardIcon, label: 'mainframe.dashboard', link: '/dashboard' },
  { icon: SalesIcon, label: 'mainframe.sales', link: '/sales' },
  { icon: ExpenseIcon, label: 'mainframe.expenses', link: '/expenses' },
  { },
  { icon: SettingIcon, label: 'mainframe.account_settings', link: '/settings' },
  { icon: ShareIcon, label: 'mainframe.share_earn', link: '/share' },
  { icon: SignoutIcon, label: 'mainframe.sign_out', link: undefined },
  { icon: HelpIcon, label: 'mainframe.help', link: '/help' }
]

const accounts = [
  { name: 'Rochelle', email: 'Vencru.creative@gmail.com', value: 0 },
  { name: 'Le Hombre Salon', email: 'team.support@gmail.com', value: 1 }
]

const actionShowPopup = createAction('SHOW_POPUP');

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_POPUP':
      const { popup, show } = payload;
      const popups = {
        sidebar: false,
        accountDialog: false,
        avatarMenu: false,
        notifyMenu: false
      }

      popups[popup] = true;

      if (show === false) {
        return {...state, [popup]: false}
      } else {
        return {...state, ...popups}
      }

    default:
  }
}

function AccountInitial({initial, ...other}) {
  const classes = useStyles();

  return (
    <Avatar
      {...other}
      className={classes.avatar}
      style={{ fontSize:
        initial.length > 3 ? '14px' :
        initial.length === 3 ? '18px' : '24px'
      }}
    >
      {initial}
    </Avatar>
  )
}

function MainFrame(props) {
  const globalClasses = useGlobalStyles();
  const trans = useIntl();
  const mediaUp = useMediaUp();
  const classes = useStyles();
  const [{
    sidebar,
    accountDialog,
    avatarMenu,
    notifyMenu
  }, dispatch] = useReducer(reducer, {});
  const [ expandLeftMenu, setExpandLeftMenu ] = useState(true);
  const [ account, setAccount ] = useState(0)

  const page = props.match.params.page || '';
  const pageIndex = findIndex(menubarContent, { link: `/${page}`});

  const initial = accounts[account].name.split(' ').map(v => v.toUpperCase()[0]).join('');

  const handleToggleLeftMenuClick = () => setExpandLeftMenu(stat => !stat)
  
  const showPopup = (popup, show) =>
    dispatch(actionShowPopup({ popup, show }))
  
  const handleAccountDialogClose = value => {
    showPopup('accountDialog', false);
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
                <Button onClick={() => showPopup('accountDialog', !accountDialog)}>
                  <BusinessIcon />
                    {accounts[account].name}
                  <ExpandMoreIcon/>
                </Button>
              </div>

              <Grid container spacing={2}>
                {mediaUp(media.md) && (
                  <Grid item>
                    <Button thin inverse>
                      <SendIcon/>
                      {trans('mainframe.invite')}
                    </Button>
                  </Grid>
                )}
                <Grid item>
                  <Button thin hasIconRight className={classes.createNew}>
                    {trans('mainframe.create_new')}
                    <ExpandMoreIcon/>
                  </Button>
                </Grid>
                <Grid item>
                  <Badge variant='dot' className={classes.notification}>
                    <NotificationIcon onClick={() => showPopup('notifyMenu', !notifyMenu)} />
                  </Badge>
                </Grid>
                <Grid item>
                  <AccountInitial
                    initial={initial}
                    onClick={() => showPopup('avatarMenu', !avatarMenu)}
                />
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid className={classes.mobileHeader} container>
              <Grid item xs={4}>
                <Fab size='small'>
                  <AddIcon />
                </Fab>
              </Grid>
              <Grid item xs={4} className={globalClasses.textSizeD}>
                Home
              </Grid>
              <Grid item xs={4}>
                <Badge variant='dot' className={classes.notification}>
                  <NotificationIcon onClick={() => showPopup('notifyMenu', !notifyMenu)}/>
                </Badge>
                <AccountInitial
                  initial={initial}
                  onClick={() => showPopup('avatarMenu', !avatarMenu)}
                />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>

      <ClickAwayListener onClickAway={() => showPopup('notifyMenu', false)}>
        <Grow in={!!notifyMenu}>
          <Paper className={classes.notifyMenu}>
            <List component='nav'>
              <ListItem button onClick={() => showPopup('notifyMenu', false)}>
                <ListItemIcon>
                  <div className={classes.notifyMenuIcon}>
                    <ExpenseIcon/>
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary='You have X paid invoices and Y overdue invoices'
                  secondary='1h 57min ago'
                />
              </ListItem>
              <ListItem button onClick={() => showPopup('notifyMenu', false)}>
                <ListItemIcon>
                  <div className={classes.notifyMenuIcon}>
                    <ExpenseIcon/>
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary='You have not uploaded your expenses in 30 days'
                  secondary='23min ago'
                />
              </ListItem>
            </List>
          </Paper>
        </Grow>
      </ClickAwayListener>
      
      <ClickAwayListener onClickAway={() => showPopup('avatarMenu', false)}>
        <Grow in={!!avatarMenu}>
          <Paper className={classes.avatarMenu}>
            <List component='nav'>
              <ListItem
                button
                component={Link}
                to='/settings'
                onClick={() => showPopup('avatarMenu', false)}
              >
                <ListItemIcon>
                  <SettingIcon/>
                </ListItemIcon>
                <ListItemText primary={trans('mainframe.account_settings')} />
              </ListItem>
              <ListItem button onClick={() => showPopup('avatarMenu', false)}>
                <ListItemIcon>
                  <SignoutIcon/>
                </ListItemIcon>
                <ListItemText primary={trans('mainframe.sign_out')}/>
              </ListItem>
            </List>
          </Paper>
        </Grow>
      </ClickAwayListener>

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
          {menubarContent.map(({ icon: Icon, label, link}, key) => (
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
        open={!!sidebar}
        className={classes.sideDrawer}
        onOpen={() => showPopup('sidebar')}
        onClose={() => showPopup('sidebar', false)}
      >
        <div
          role="presentation"
          className={classes.sidebar}
          onClick={() => showPopup('sidebar', false)}
          onKeyDown={() => showPopup('sidebar', false)}
        >
          <div className={classes.sidebarAvatar}>
            <Button fullWidth onClick={() => showPopup('accountDialog')}>
              <div className={globalClasses.textInverseHighlight}>
                <p>{ accounts[account].name }</p>
                <p>{ accounts[account].email }</p>
              </div>
              <AccountInitial initial={initial} />
            </Button>
          </div>
          <List>
            {sidebarContent.map(({ icon: Icon, label, link}, key) =>
              label ? (
                <ListItem
                  button
                  to={link}
                  key={key}
                  component={link && Link}
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
        onClick={sidebar ? () => showPopup('sidebar', false) : undefined}
      >
        <Tabs
          value={pageIndex < 4 ? pageIndex : undefined}
          variant="scrollable"
          scrollButtons="off"
          indicatorColor="primary"
          textColor="primary"
        >
          {menubarContent.slice(0, 4).map(({ icon: Icon, label, link}, key) => (
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
            onClick={() => showPopup('sidebar')}
            label={trans('mainframe.more')}
            icon={<MoreIcon />}
            className={classes.tab}
          />
        </Tabs>
      </div>
      <SwitchAccount
        data={accounts}
        open={!!accountDialog}
        selected={account}
        onClose={handleAccountDialogClose}
        menuExpand={expandLeftMenu}
      />
    </>
  )
}

export default React.memo(MainFrame);
