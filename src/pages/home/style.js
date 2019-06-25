import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';


const drawerWidthExpand = 240;
const drawWidthCollapse = 80;
const iconSize = 24;

export default makeStyles(theme => ({
  appBar: {
    backgroundColor: colors.background.white,
    minHeight: '80px',
    color: 'black',
    transition: 'all ease .5s',
    width: `calc(100% - ${drawWidthCollapse}px)`,
    boxShadow: '0px 4px 20px rgba(21, 58, 112, 0.1)',

    '&.expand': {
      width: `calc(100% - ${drawerWidthExpand}px)`
    },

    [theme.breakpoints.only('xs')]: {
      width: '100% !important',
      boxShadow: 'none'
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
    },

    [theme.breakpoints.only('xs')]: {
      width: '0 !important'
    }
  },

  menubarItem: {
    padding: `24px ${(drawWidthCollapse - iconSize) / 2}px`,
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

  bottomNavigator: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1201,
    minHeight: 0,
    height: '60px',
    transition: 'all ease .5s',
    backgroundColor: colors.background.white,
    boxShadow: `0px 0px 7px 0px ${colors.text.primary.gray}5`,

    [theme.breakpoints.up('sm')]: {
      height: 0
    }
  },

  tab: {
    paddingTop: 0,

    '& span': {
      textTransform: 'none',
      fontSize: 'smaller'
    },

    '& svg': {
      width: 20,
      height: 20,
      transition: 'all ease .5s',
      fill: colors.text.primary.normal,
      fillOpacity: 0.4
    },

    '&.Mui-selected': {
      '& span': {
        color: colors.text.primary.primary
      },

      '& svg': {
        fill: colors.text.primary.primary,
        fillOpacity: 1
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
