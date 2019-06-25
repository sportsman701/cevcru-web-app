import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { findIndex } from 'lodash'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ReactComponent as ToggleLeftMenuIcon } from 'resources/home/toggle-left-menu.svg';
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

import useGlobalStyles from 'hooks/styles';
import useStyles from './style';


const menubar = [
  { icon: HomeIcon, label: 'Home', link: '/' },
  { icon: DashboardIcon, label: 'Dashboard', link: '/dashboard' },
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
  const globalClasses = useGlobalStyles();
  const classes = useStyles();
  const [expandLeftMenu, setExpandLeftMenu] = useState(true);
  const { history } = props;
  const page = props.match.params.page || '';
  const pageIndex = findIndex(menubar, { link: `/${page}`});

  const handleToggleLeftMenuClick = () => setExpandLeftMenu(stat => !stat)

  const handleBottomNavigatorChange = (event, newValue) => {}

  return (
    <>
      <AppBar className={cx(
        classes.appBar,
        { expand: expandLeftMenu }
      )}>
        <Toolbar>sd
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
                  primary={label}
                  className={globalClasses.textContrast}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.bottomNavigator}>
        <Tabs
          value={pageIndex < 4 ? pageIndex : -1}
          // onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleBottomNavigatorChange} 
        >
          {menubar.slice(0, 4).map(({ icon: Icon, label, link}, key) => (
            <Tab
              key={key}
              label={label}
              component={Link}
              to={link}
              icon={<Icon/>}
              className={classes.tab}
            />  
          ))}
          <Tab
            label="More"
            icon={<MoreIcon />}
            className={classes.tab}
          />
        </Tabs>
      </div>
    </>
  )
}

export default React.memo(Home);