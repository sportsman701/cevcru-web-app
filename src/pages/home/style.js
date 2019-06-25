import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';


const drawerWidthExpand = 240;
const drawWidthCollapse = 80;
const iconSize = 24;

export default makeStyles(theme => ({
  appBar: {
    backgroundColor: colors.background.white,
    marginLeft: drawWidthCollapse,
    boxShadow: 'none',
    minHeight: '80px',
    color: 'black',
    transition: 'all ease .5s',

    '&.expand': {
      width: drawerWidthExpand
    },

    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawWidthCollapse}px)`,
      boxShadow: '0px 4px 20px rgba(21, 58, 112, 0.1)',

      '&.expand': {
        width: `calc(100% - ${drawerWidthExpand}px)`,
      }
    }
  },

  leftMenuToggleBar: {
    minHeight: '80px',
    display: 'flex',
    backgroundColor: colors.primary.normal,

    '& div:last-child': {
      flexGrow: 1,
      backgroundColor: colors.primary.light
    }
  },

  toggleMenu: {
    width: '80px',
    borderRadius: 0
  },

  drawerPaper: {
    width: drawWidthCollapse,
    transition: 'all ease .5s',
    overflow: 'hidden',

    '&.expand': {
      width: drawerWidthExpand
    }
  },

  menubarItem: {
    padding: `32px ${(drawWidthCollapse - iconSize) / 2}px`,
    transition: 'padding ease .5s',

    '& .MuiListItemText-root': {
      margin: 0
    },
    
    '& .MuiListItemIcon-root': {
      minWidth: iconSize,

      '.expand &': {
        minWidth: `${iconSize + 16}px`
      }
    }
  },

  menubarIcon: {
    width: iconSize,
    height: iconSize,
    fill: colors.text.primary.normal,
    fillOpacity: 0.4,
    transition: 'all ease .5s',
  
    '&.active': {
      fill: colors.text.primary.primary,
      fillOpacity: 1
    }
  }
}));
