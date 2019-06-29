import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';


const drawerWidthExpand = 240;
const drawWidthCollapse = 80;
const appbarHeight = 80;

export default makeStyles(theme => ({
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
  }
}));
