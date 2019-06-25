import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';


const drawerWidth = 240;

export default makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  appBar: {
    backgroundColor: colors.background.white,
    marginLeft: drawerWidth,
    boxShadow: 'none',

    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      boxShadow: '0px 4px 20px rgba(21, 58, 112, 0.1)'
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  menubarIcon: {
    width: 24,
    height: 24,
    fill: colors.text.primary.normal,
    fillOpacity: 0.4
  }
}));
