import React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ReactComponent as DashboardIcon } from 'resources/home/dashboard.svg';
import { ReactComponent as SalesIcon } from 'resources/home/sale.svg';
import { ReactComponent as ExpenseIcon } from 'resources/home/expense.svg';
import { ReactComponent as ClientIcon } from 'resources/home/client.svg';
import { ReactComponent as InventoryIcon } from 'resources/home/inventory.svg';
import { ReactComponent as SettingIcon } from 'resources/home/setting.svg';
import { ReactComponent as ShareIcon } from 'resources/home/share.svg';
import { ReactComponent as HelpIcon } from 'resources/home/help.svg';

import useStyles from './style';


const menubar = [
  { icon: DashboardIcon, label: 'Dashboard', link: '/' },
  { icon: SalesIcon, label: 'Sales', link: '/sales' },
  { icon: ExpenseIcon, label: 'Expenses', link: '/expenses' },
  { icon: ClientIcon, label: 'Clients', link: '/clients' },
  { icon: InventoryIcon, label: 'Inventory', link: '/inventory' },
  { icon: SettingIcon, label: 'Account Settings', link: '/settings' },
  { icon: ShareIcon, label: 'Share & Earn', link: '/share' },
  { icon: HelpIcon, label: 'Help', link: '/help' }
]

const sidebar = [

]

const bottombar = [

]

function Home(props) {
  const classes = useStyles();
  const { match } = props;

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
          >
          <div className={classes.toolbar}></div>
          <Divider/>
          <List>
            {menubar.map(({ icon: Icon, label, link}, key) => (
              <ListItem
                button
                component={Link}
                to={link}
                key={key}
              >
                <ListItemIcon >
                  <Icon className={classes.menubarIcon} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </>
  )
}

export default React.memo(Home);