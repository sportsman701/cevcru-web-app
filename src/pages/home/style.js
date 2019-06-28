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
    color: colors.text.inverse.highlight,

    [theme.breakpoints.up('sm')]: {
      borderLeft: `1px solid ${colors.primary.light}C0`
    }
  },

  mobileHeader: {
    alignItems: 'center',

    '&>div:first-child': {
      textAlign: 'right',

      '& button': {
        width: 36,
        height: 35,
        boxShadow: 'none',
        color: colors.text.inverse.highlight,
        backgroundColor: colors.primary.normal,
        border: `2px solid ${colors.text.inverse.highlight}`,

        '&:hover': {
          backgroundColor: `${colors.primary.light}80`
        }
      }
    },

    '&>div:last-child': {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '15px',
      justifyContent: 'flex-end'
    }
  },

  notifyMenu: {
    zIndex: 3000,
    position: 'absolute',
    right: 0,
    top: 90,
    marginLeft: 30,
    marginRight: 30,
    boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), ' +
               '0px 24px 38px 3px rgba(0,0,0,0.14), ' +
               '0px 9px 46px 8px rgba(0,0,0,0.12)',

    '& nav': {
      maxHeight: 400,
      overflowY: 'auto'
    },

    '& .MuiListItemText-primary': {
      lineHeight: 1
    },

    '& .MuiListItemText-secondary': {
      fontSize: 'smaller'
    },

    '&::before': {
      content: '\' \'',
      position: 'absolute',
      border: '15px solid white',
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      borderTop: 'none',
      right: '50px',
      top: '-15px'
    },

    [theme.breakpoints.only('xs')]: {
      top: 70
    }
  },

  notifyMenuIcon: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: '50%',
    backgroundColor: colors.primary.normal,

    '& svg': {
      fill: colors.background.white,
      width: 20,
      height: 20
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
        textTransform: 'uppercase !important',
        lineHeight: '1.25'
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

    '& button:active': {
      boxShadow: 'none'
    },

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

    [theme.breakpoints.only('xs')]: {
      margin: '0 30px 0 0'
    },

    '& .MuiBadge-badge': {
      marginTop: '3px',
      width: 7,
      height: 7,
      backgroundColor: colors.primary.normal,

      [theme.breakpoints.only('xs')]: {
        backgroundColor: '#FE8500'
      }
    },

    '& svg': {
      fill: colors.text.primary.normal,
      cursor: 'pointer',

      '&:hover': {
        fill: `${colors.text.primary.normal}B0`
      },

      [theme.breakpoints.only('xs')]: {
        fill: colors.background.white,

        '&:hover': {
          fill: `${colors.background.white}B0`
        }
      }
    }
  },

  createNew: {
    lineHeight: 1
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
