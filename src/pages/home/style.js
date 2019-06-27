import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';


const drawerWidthExpand = 240;
const drawWidthCollapse = 80;
const iconSize = 24;
const bottomNavHeight = 60;
const appbarHeight = 80;
const appbarMobileHeight = 60;

export default makeStyles(theme => ({
  appbar: {
    backgroundColor: colors.background.white,
    minHeight: appbarHeight,
    color: 'black',
    transition: 'all ease .5s',
    width: `calc(100% - ${drawWidthCollapse}px)`,
    boxShadow: '0px 4px 20px rgba(21, 58, 112, 0.1)',
    zIndex: '1201',

    '&.expand': {
      width: `calc(100% - ${drawerWidthExpand}px)`
    },

    [theme.breakpoints.only('xs')]: {
      backgroundColor: colors.primary.normal,
      minHeight: appbarMobileHeight,
      width: '100% !important',
      boxShadow: 'none'
    }
  },

  toolbar: {
    flexGrow: 1,
    padding: 0,
    justifyContent: 'space-between',

    [theme.breakpoints.up('sm')]: {
      borderLeft: `1px solid ${colors.primary.light}C0`
    }
  },

  accountSelector: {
    background: colors.primary.light,
    
    '& button': {
      display: 'flex',
      borderRadius: 0,
      alignItems: 'center',
      padding: '10px 15px',
      height: appbarHeight,
      backgroundColor: 'initial',
      color: colors.text.inverse.highlight,

      '& .MuiButton-label': {
        textTransform: 'uppercase !important'
      },

      '& svg:first-child': {
        marginRight: '10px'
      }
    },

    '& + div': {
      padding: '0 20px',
      justifyContent: 'flex-end',
      flexWrap: 'nowrap',
      alignItems: 'center'
    }
  },

  accountDialog: {
    '& .MuiBackdrop-root': {
      backgroundColor: '#0006'
    },

    '& .MuiDialog-container': {
      position: 'relative',
      transition: 'all ease .5s !important',
    },

    '&.expand .MuiDialog-container': {
      [theme.breakpoints.up('sm')]: {
        left: drawerWidthExpand
      }
    },

    [theme.breakpoints.up('sm')]: {
      top: `${appbarHeight}px !important`,
      
      '& .MuiBackdrop-root': {
        top: appbarHeight
      },

      '& .MuiDialog-container': {
        height: 'auto',
        justifyContent: 'start',
        left: drawWidthCollapse,
      
        '& .MuiDialog-paper': {
          borderRadius: 0,
          margin: 0,
  
          '& .MuiDialogTitle-root .MuiTypography-root': {
            fontSize: '20px'
          }
        }
      }
    }
  },

  sidebarAvatar: {
    height: appbarMobileHeight,
    backgroundColor: colors.primary.normal,

    '& button': {
      display: 'flex',
      height: '100%',
      padding: '0 10px',
      alignItems: 'center',
      borderRadius: 0,
      textTransform: 'none',

      '& div:first-child': {
        flexGrow: 1,
        textAlign: 'right',
        marginRight: 15,
  
        '& p': {
          margin: '0',
          fontSize: 'smaller'
        }
      }
    }
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: '10%'
  },

  leftMenuToggleBar: {
    minHeight: appbarHeight,
    display: 'flex',
    backgroundColor: colors.primary.normal,
    transition: 'all ease .5s',

    '& div:last-child': {
      flexGrow: 1,
      backgroundColor: colors.primary.light
    },

    [theme.breakpoints.only('xs')]: {
      minHeight: appbarMobileHeight,
    }
  },

  notification: {
    margin: '0 10px',

    '& .MuiBadge-badge': {
      marginTop: '3px',
      width: 7,
      height: 7,
      backgroundColor: colors.primary.normal
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
    borderRight: 'none',
    boxShadow: '4px 0 20px rgba(21, 58, 112, 0.1)',

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

  accountMenuItem: {
    '& .MuiListItemText-secondary': {
      color: colors.text.primary.gray
    },
  },

  accountSelected: {
    backgroundColor: `${colors.primary.light}50`,

    '& .MuiSvgIcon-root': {
      marginLeft: '40px',
      fill: colors.primary.normal
    }
  },

  sideDrawer: {
    zIndex: '1201 !important',

    '& .MuiBackdrop-root': {
      backgroundColor: `${colors.background.modal}`
    },

    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },

  sidebar: {
    width: 260,
  },

  sidebarItem: {
    padding: '16px',

    '& .MuiListItemText-root': {
      margin: 0
    }
  },

  sidebarIcon: {
    minWidth: 32,

    '& svg': {
      width: 16,
      height: 16,
      fill: colors.text.primary.contrast,
      fillOpacity: 0.4,
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
    zIndex: 1202,
    minHeight: 0,
    height: bottomNavHeight,
    transition: 'all ease .5s',
    backgroundColor: colors.background.white,
    boxShadow: `0px 0px 7px 0px ${colors.text.primary.gray}5`,

    [theme.breakpoints.up('sm')]: {
      height: 0
    }
  },

  tab: {
    paddingTop: 0,
    transition: 'background-color ease .5s',

    '&:hover': {
      backgroundColor: `${colors.text.primary.gray}4`
    },

    '& span': {
      textTransform: 'none',
      fontSize: 'smaller'
    },

    '& svg': {
      width: 20,
      height: 20,
      transition: 'all ease .5s',
      fill: colors.text.primary.contrast,
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
