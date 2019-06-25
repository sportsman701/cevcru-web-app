import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ReactComponent as ToggleLeftMenu } from 'resources/home/toggle-left-menu.svg';
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
  const globalClasses = useGlobalStyles();
  const classes = useStyles();
  const [expandLeftMenu, setExpandLeftMenu] = useState(true);
  const page = props.match.params.page || '';

  const handleToggleLeftMenuClick = () => setExpandLeftMenu(stat => !stat)

  return (
    <>
      <AppBar className={cx(
        classes.appBar,
        { expand: expandLeftMenu }
      )}>
        <Toolbar>sd
        </Toolbar>
      </AppBar>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{paper: cx(
            classes.drawerPaper,
            { expand: expandLeftMenu }
          )}}
          variant="permanent"
        >
          <div className={classes.leftMenuToggleBar}>
            <Button
              className={classes.toggleMenu}
              onClick={handleToggleLeftMenuClick}
            >
              <ToggleLeftMenu/>
            </Button>
            <div></div>
          </div>
          <Divider/>
          <List>
            {menubar.map(({ icon: Icon, label, link}, key) => (
              <ListItem
                button
                className={cx(
                  classes.menubarItem,
                  { expand: expandLeftMenu }
                )}
                component={Link}
                to={link}
                key={key}
              >
                <ListItemIcon>
                  <Icon className={cx(
                    classes.menubarIcon,
                    { active: link === `/${page}` }
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
      </Hidden>
    </>
  )
}

export default React.memo(Home);