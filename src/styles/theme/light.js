import { createTheme } from '@mui/material/styles';

const lightTheme = {
  direction: 'ltr',
  MuiSlider: {
    track: { backgroundColor: 'rgb(0, 120, 188)' },
    thumb: { backgroundColor: '#FFFFFF' }
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      smokeWhite: '#fafafa',
      catskillPale: '#edf4f7',
      pattensPale: '#d7e4ea',
      // bigStoneGrey: '#33444c',
      midnightGrey: '#1f3138',
      starCommandBlue: '#007ab4',
      fjordBlue: '#135e82',
      codGrey: '#0e0e0e',
      transparent: 'rgba(0, 0, 0, 0)',
      fullBlack: 'rgba(0, 0, 0, 1)',
      darkBlack: 'rgba(0, 0, 0, 0.87)',
      lightBlack: 'rgba(0, 0, 0, 0.54)',
      minBlack: 'rgba(0, 0, 0, 0.26)',
      faintBlack: 'rgba(0, 0, 0, 0.12)',
      fullWhite: 'rgba(255, 255, 255, 1)',
      darkWhite: 'rgba(255, 255, 255, 0.87)',
      lightWhite: 'rgba(255, 255, 255, 0.54)',
      criticalAlert: '#DB2C28',
      highAlert: '#D64C01',
      mediumAlert: '#D68001',
      lowAlert: '#008943'
    },
    type: 'light',
    primary: {
      50: '#fafafa', // smokeWhite
      100: '#edf4f7', // catskillPale
      200: '#d7e4ea', // pattensPale
      300: '#edf4f7', // catskillPale, used to color table dividers
      400: '#007ab4', // used in button groups, for the selected button
      500: '#007ab4', // used in MuiButton, MuiIndicator,
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff',
      contrastDefaultColor: 'light'
    },
    secondary: {
      50: '#fce4ec',
      100: '#f8bbd0',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#e91e63',
      600: '#d81b60',
      700: '#c2185b',
      800: '#ad1457',
      900: '#880e4f',
      A100: '#ff80ab',
      A200: '#ff4081',
      A400: '#f50057',
      A700: '#c51162',
      contrastDefaultColor: 'light'
    },
    // in the variables.scss file, the first four secondary colors are under $color-warn
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000',
      contrastDefaultColor: 'light'
    },
    grey: {
      50: '#0e0e0e',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#d8e4eb',
      900: '#edf4f7', //  midnightGrey, used in the footer
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
      contrastDefaultColor: 'dark'
    },
    shades: {
      dark: {
        text: {
          primary: 'rgba(255, 255, 255, 1)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
          hint: 'rgba(255, 255, 255, 0.5)',
          icon: 'rgba(255, 255, 255, 0.5)',
          divider: 'rgba(255, 255, 255, 0.12)',
          lightDivider: 'rgba(255, 255, 255, 0.075)'
        },
        input: {
          bottomLine: 'rgba(255, 255, 255, 0.7)',
          helperText: 'rgba(255, 255, 255, 0.7)',
          labelText: 'rgba(255, 255, 255, 0.7)',
          inputText: 'rgba(255, 255, 255, 1)',
          disabled: 'rgba(255, 255, 255, 0.5)'
        },
        action: {
          active: 'rgba(255, 255, 255, 1)',
          disabled: 'rgba(255, 255, 255, 0.3)'
        },
        background: {
          default: '#303030',
          paper: '#424242',
          appBar: '#212121',
          contentFrame: '#212121',
          chip: '#424242'
        },
        line: {
          stepper: '#bdbdbd'
        }
      },
      light: {
        text: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.38)',
          hint: 'rgba(0, 0, 0, 0.38)',
          icon: 'rgba(0, 0, 0, 0.38)',
          divider: 'rgba(0, 0, 0, 0.12)',
          lightDivider: 'rgba(0, 0, 0, 0.075)'
        },
        input: {
          bottomLine: 'rgba(0, 0, 0, 0.42)',
          helperText: 'rgba(0, 0, 0, 0.54)',
          labelText: 'rgba(0, 0, 0, 0.54)',
          inputText: 'rgba(0, 0, 0, 0.87)',
          disabled: 'rgba(0, 0, 0, 0.42)'
        },
        action: {
          active: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.26)'
        },
        background: {
          default: '#fafafa',
          paper: '#fff',
          appBar: '#fff',
          contentFrame: '#eeeeee',
          chip: '#e0e0e0'
        },
        line: {
          stepper: '#bdbdbd'
        }
      }
    },
    text: {
      primary: 'rgba(14, 14, 14, 0.9)',
      secondary: 'rgba(14, 14, 14, 0.73)',
      disabled: 'rgba(14, 14, 14, 0.40)',
      hint: 'rgba(14, 14, 14, 0.40)',
      icon: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      lightDivider: 'rgba(0, 0, 0, 0.075)'
    },
    input: {
      bottomLine: 'rgba(0, 0, 0, 0.42)',
      helperText: 'rgba(0, 0, 0, 0.54)',
      labelText: 'rgba(0, 0, 0, 0.54)',
      inputText: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.42)'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)'
    },
    background: {
      default: '#fafafa',
      paper: '#d7e4ea',
      appBar: '#ffffff',
      contentFrame: '#eeeeee',
      chip: '#e0e0e0'
    },
    line: {
      stepper: '#bdbdbd'
    }
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
    h1: {
      fontSize: '7rem',
      fontWeight: 300,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      marginLeft: '-.06em',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    h2: {
      fontSize: '28px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.02em',
      lineHeight: '28px',
      marginLeft: '-.04em',
      color: 'rgba(14, 14, 14, 0.9)'
    },
    h3: {
      fontSize: '28px',
      fontWeight: 300,
      fontFamily: "'Roboto Light', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '28px',
      marginLeft: '-.04em',
      color: 'rgba(14, 14, 14, 0.9)'
    },
    h4: {
      fontSize: '24px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '24px',
      marginLeft: '-.04em',
      color: 'rgba(14, 14, 14, 0.9)'
    },
    h5: {
      fontSize: '20px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '20px',
      color: 'rgba(14, 14, 14, 0.9)'
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.6rem',
      color: 'rgba(14, 14, 14, 0.9)'
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.6rem',
      color: 'rgba(14, 14, 14, 0.9)'
    },
    body1: {
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '14px',
      color: 'rgba(14, 14, 14, 0.73)',
      letterSpacing: '0.01em'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '15px',
      color: 'rgba(14, 14, 14, 0.9)',
      letterSpacing: '0.01em'
    },
    caption: {
      fontSize: '12px',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '12px',
      color: 'rgba(14, 14, 14, 0.9)'
    },
    button: {
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
    }
  },
  notificationBar: {
    Containers: {
      DefaultStyle: {
        height: '50px',
        width: '460px',
        minWidth: '320px',
        maxWidth: '820px',
        left: '50%',
        margin: '0px auto 0px -230px'
      }
    },
    NotificationItem: {
      // Override the notification item
      DefaultStyle: {
        borderRadius: '4px',
        width: '',
        minHeight: '55px',
        margin: '10px 0 0',
        padding: 0
      },
      error: {
        // Applied only to the error notification item
        borderTop: 'none',
        borderRadius: '4px',
        backgroundColor: '#1F3138',
        color: '#412f2f'
      },
      success: {
        // Applied only to the sucess notification item
        borderTop: 'none',
        borderRadius: '4px',
        backgroundColor: '#153800',
        color: '#412f2f'
      }
    },
    Dismiss: {
      DefaultStyle: {
        width: '25px',
        height: '25px',
        color: 'rgba(0, 0, 0, 0)'
      },

      error: {
        fontSize: '30px',
        top: '20px',
        right: '5px',
        backgroundColor: '',
        borderRadius: '',
        fontWeight: ''
      }
    },
    MessageWrapper: {
      DefaultStyle: {
        display: 'inline-block',
        margin: 8,
        fontSize: '14px',
        fontStyle: 'normal',
        opacity: '73%',
        color: '#FAFAFA',
        fontFamily: 'Roboto'
      }
    },
    Action: {
      DefaultStyle: {
        borderRadius: '4px',
        fontWeight: 'bold',
        margin: '10px',
        height: '35px'
      },

      error: {
        backgroundColor: '#1e88e5',
        color: '#ffffff'
      }
    },

    ActionWrapper: {
      DefaultStyle: {
        display: 'inline-block',
        paddingRight: '14px',
        position: 'absolute',
        right: '10px',
        top: '0px'
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: 35,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 35
      },
      '@media (min-width:600px)': {
        minHeight: 35
      }
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  shadows: [
    'none',
    '2px 2px 2px rgba(14, 14, 14, 0.149019607843137)',
    '1px 3px 0px rgba(114, 163, 189, 0.298039215686275)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
    '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
    '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)'
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  spacing: 8,
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  panel: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#edf4f7',
    borderRadius: '4px',
    boxShadow: 'none'
  },
  forecastChart: {
    pieChart: {
      color: '#2979b4',
      fontSize: '16px'
    }
  },
  summaryPanel: {
    padding: '16px 16px 16px',
    marginTop: 12,
    marginBottom: 16,
    boxShadow: 'none',
    background: '#edf4f7',
    borderRadius: '4px'
  },
  drawerWrapper: {
    root: {
      background: 'rgba(14, 14, 14, 0.9)'
    }
  },
  mapStyle: []
};
const theme = createTheme(lightTheme);
theme.overrides = {
  MuiTabs: {
    root: {
      fontSize: '16px',
      height: '100%'
    },
    indicator: {
      backgroundColor: theme.palette.primary[600],
      height: 4
    },
    fixed: {
      overflow: 'initial !important'
    },
    vertical: {
      flexDirection: 'column'
    }
  },

  PrivateTabIndicator: {
    vertical: {
      backgroundColor: 'transparent !important'
    }
  },
  MuiSwitch: {
    switchBase: {
      color: '#fafafa !important'
    }
  },
  MuiTabIndicator: {
    root: {
      height: '4px'
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary[400]
    }
  },
  MuiTab: {
    label: {
      fontSize: '14px !important',
      fontWeight: '550'
    },
    textColorPrimary: {
      color: theme.palette.common.black
    },
    selected: {
      backgroundColor: '#fff !important'
    },
    root: {
      fontSize: '14px !important',
      fontWeight: '540',
      textTransform: 'capitalize',
      minWidth: 'fit-content !important',
      maxWidth: 'none'
    },
    wrapper: {
      alignItems: 'flex-start',
      marginLeft: 10,
      marginRight: 10,
      whiteSpace: 'nowrap'
    }
  },
  MuiIconButton: {
    root: {
      color: 'inherit',
      padding: 0
    },
    colorPrimary: {
      color: theme.palette.primary[400]
    },
    colorSecondary: {
      color: theme.palette.grey[500]
    },
    disabled: {
      color: '#0e0e0e'
    },
    edgeEnd: {
      marginRight: 0
    }
  },
  MuiAppBar: {
    root: {
      boxShadow: 'none !important'
    },
    colorPrimary: {
      backgroundColor: 'rgba(29, 48, 58, 0.07) !important',
      color: '#fff !important'
    }
  },
  MuiMenuItem: {
    root: {
      ...theme.typography.body1,
      fontSize: 12,
      minHeight: 36,
      padding: 7,
      color: '#000'
    }
  },
  MuiMenu: {
    paper: {
      borderRadius: 4
    },
    list: {
      maxHeight: 300
    }
  },
  MuiButtonBase: {
    disabled: {
      cursor: 'not-allowed !important',
      pointerEvents: 'all !important'
    }
  },
  MuiButton: {
    // FLAT and RAISED deprecated
    // TEXT and CONTAINED to be used
    root: {
      padding: '5px 14px !important',
      margin: '7px 14px',
      borderRadius: '4px !important',
      minWidth: '68px',
      height: '30px'
    },
    outlined: {
      border: 'solid 1px #ADB4B7 !important'
    },
    outlinedPrimary: {
      color: '#ffffff',
      backgroundColor: '#0078d4',
      borderRadius: '5px',
      border: `solid 1px ${theme.palette.primary[700]}`
    },
    containedPrimary: {
      color: '#ffffff !important',
      backgroundColor: '#0078d4 !important',
      borderRadius: '5px',
      marginLeft: '10px',
      boxShadow: 'none',
      lineHeight: 0,
      border: 'none',
      height: '30px',
      '&:hover': {
        backgroundColor: '#106ebe',
        borderColor: '#106ebe'
      }
    },
    containedSecondary: {
      color: '#fafafa !important',
      backgroundColor: 'rgb(94, 116, 126)',
      boxShadow: 'none',
      lineHeight: 0,
      border: '1px solid #FFFFFF !important',
      '&:hover': {
        backgroundColor: 'rgba(29, 48, 58, 0.07)'
      }
    },
    label: {
      display: 'unset',
      textTransform: 'uppercase',
      fontSize: '12px',
      fontWeight: 550
    }
  },

  MuiTableCell: {
    root: {
      padding: '6px 4px 6px 20px',
      fontSize: 13,
      whiteSpace: 'nowrap'
      // textAlign: 'center',
      // borderBottom: 'none',
    },
    head: {
      // backgroundColor: 'grey',
      color: 'rgba(0,0,0,0.88)',
      textShadow: '0 1px 0 rgba(255, 255, 255, 0.05)',
      fontWeight: '550',
      fontSize: '13px',
      lineHeight: 2,
      textAlign: 'left',
      paddingLeft: 10
    },
    body: {
      color: '#000',
      textAlign: 'left',
      paddingLeft: 10
    },
    paddingCheckbox: {
      '&:last-child': {
        paddingLeft: 10
      }
    }
  },

  MuiTableHead: {
    root: {
      padding: '0px 4px 0px 5px'
    }
  },

  MuiTableRow: {
    root: {
      border: '1px solid #d4d4d4',
      backgroundColor: 'white',
      // boxShadow: '0 0 10px rgba(14, 14, 14, 0.149019607843137) !important',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      borderRadius: '3px',
      overflowX: 'auto'
    },

    head: {
      backgroundColor: '#f5f7f7'
    }
  },

  MuiTablePagination: {
    selectRoot: {
      // marginTop: '7px',
    },
    input: {
      marginTop: 3,
      fontSize: 12
    },
    caption: {
      fontSize: 13
    },
    selectIcon: {
      top: 0
    }
  },
  MuiFormLabel: {
    root: {
      color: 'rgba(14, 14, 14, 0.9)',
      '&$focused': {
        color: 'rgba(14, 14, 14, 0.9)'
      },
      fontSize: 12,
      width: 'max-content'
    }
  },
  MuiInputLabel: {
    shrink: {
      transform: 'scale(1)'
    },
    asterisk: {
      color: '#f44336'
    },
    root: {
      whiteSpace: 'nowrap'
    }
  },
  MuiSelect: {
    root: {
      color: '#000',
      fontSize: 12
    },
    icon: {
      color: '#514d4d',
      fontSize: '30px !important',
      top: 'calc(50% - 16px)'
    },
    iconOutlined: {
      right: 0
    }
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: '#fafafa'
    }
  },
  MuiExpansionPanel: {
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      borderRadius: 4,
      boxShadow: 'none',
      padding: '0px 0px',
      marginTop: '5px',
      marginBottom: '5px',
      width: '97%',
      '&:before': {
        display: 'none'
      },
      '&:first-child': {
        borderRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
        // paddingRight: 10,
      },
      '&:last-child': {
        borderRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
      },
      '&:not(:last-child)': {
        borderBottom: 0
      },
      '&$expanded': {
        marginTop: '20px '
      }
    },
    focused: {
      backgroundColor: 'transparent ',
      border: 'none'
    },
    expanded: {
      marginTop: '4px '
    }
  },
  MuiExpansionPanelActions: {
    root: {
      paddingBottom: 14,
      paddingRight: 14,
      margin: '0px',
      width: '100%',
      paddingTop: 0
    }
  },
  MuiExpansionPanelDetails: {
    root: {
      // backgroundColor: '#1f3138',
      paddingLeft: 20,
      paddingTop: 0
    }
  },
  MuiExpansionPanelSummary: {
    content: {
      marginBottom: 0,
      marginTop: 0,
      borderRadius: 4,
      '& > :last-child': {
        paddingRight: 0
      },
      '&$expanded': {
        margin: '5px 5px !important'
      }
    },
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 36,
      '&$expanded': {
        minHeight: '36px !important'
      },
      padding: '0 10px 0 10px'
    },
    expandIcon: {
      color: '#1e88e5',
      marginRight: 0
    },
    expanded: {
      minHeight: '30px !important',
      margin: '0px !important'
    }
  },
  MuiOutlinedInput: {
    root: {
      position: 'relative',
      '& $notchedOutline': {
        borderColor: '#d5d5d5'
      },
      '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
        borderColor: theme.palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderColor: '#d5d5d5'
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.08)'
      }
    },
    focused: {
      // border: '1px solid #c5c5c5',
      borderRadius: 5,
      backgroundColor: '#EDF4F7',
      '&$error': {
        border: 'none'
      }
    },
    disabled: {
      // background: 'rgba(227, 237, 241, 0.6)',
      color: '#0e0e0e'
    },
    input: {
      padding: 5,
      boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075) !important'
    },
    adornedEnd: {
      paddingRight: 3
    },
    adornedStart: {
      paddingLeft: 5
    },
    inputSelect: {
      paddingRight: 30
    }
  },
  MuiInputBase: {
    input: {
      fontSize: 12,
      color: '#0a0a0a',
      padding: '6px 7px 6px 7px',
      height: '1.6em'
    },
    disabled: {
      backgroundColor: '#f5f5f5'
    },
    root: {
      lineHeight: '1.5475em'
    }
  },
  MuiFormHelperText: {
    root: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontSize: 10,
      padding: 1,
      '&$error': {
        color: 'red'
      }
    },
    disabled: {
      color: 'rgba(250, 250, 250, 0.3)'
    },
    contained: {
      margin: '1px 0',
      transformOrigin: 'center top',
      // backgroundColor: '#DB2C28',
      borderRadius: 3
    }
  },
  stepper: {
    iconColor: 'green',
    backgroundColor: '#DB2C28'
  },
  MuiDrawer: {
    paperAnchorRight: {
      backgroundColor: 'rgb(239, 239, 239)'
    }
  },
  MuiCheckbox: {
    colorPrimary: {
      '&$checked': {
        color: '#007ab4'
      }
    }
  },
  MuiBadge: {
    badge: {
      fontSize: theme.typography.pxToRem(18),
      top: -18,
      right: -4
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary[800],
      color: theme.palette.common.white
    }
  },
  MuiTooltip: {
    tooltip: {
      color: '#fafafa',
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontSize: 12
    },
    tooltipPlacementBottom: {
      margin: '0px',
      transformOrigin: 'center top'
    }
  },
  MuiListItemIcon: {
    root: {
      color: theme.palette.common.smokeWhite
    }
  },
  MuiSvgIcon: {
    root: {
      // color: '#a0a0a0',
      // height: '1.2em',
      // width: '1.2em',
    },
    colorPrimary: {
      color: '#106ebe'
    },
    colorSecondary: {
      color: '#ffffff'
    },
    fontSizeLarge: {
      fontSize: '2em'
    }
  },

  MuiPickersCalendarHeader: {
    dayLabel: {
      color: '#000'
    }
  },
  MuiTypography: {
    colorPrimary: {
      color: '#015cda'
    },
    colorInherit: {
      // color :'#000',
    },
    body1: {
      color: '#333333'
      // fontWeight: 550,
    },
    body2: {
      // color: '#333333',
      // fontWeight: 550,
    },
    colorTextSecondary: {
      color: '#333333',
      fontSize: 14,
      whiteSpace: 'nowrap'
    },
    h6: {
      color: '#4b82b0',
      fontSize: '14px',
      fontWeight: '540 !important'
    }
  },
  MuiPickersToolbar: {
    toolbar: {
      height: 70
    }
  },
  MuiDialogTitle: {
    root: {
      padding: '2px !important',
      backgroundColor: '#efefef'
    }
  },
  MuiDialog: {
    paperWidthSm: {
      maxWidth: 'max-content'
    }
  },
  MuiToolbar: {
    gutters: {
      paddingLeft: '5px !important'
    }
  },

  MuiFormControl: {
    marginNormal: {
      marginTop: 5,
      marginBottom: 0
    }
  },
  MuiCard: {
    root: {
      display: 'block',
      backgroundColor: '#fafafa',
      boxShadow: 'none',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      borderRadius: '3px',
      overflowX: 'auto'
    }
  },
  MuiPaper: {
    root: {
      display: 'block',
      backgroundColor: '#fff',
      // boxShadow: '0 0 15px rgba(14, 14, 14, 0.149019607843137) !important',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      borderRadius: '3px'
      // overflowX: 'auto',
      // border: '1px solid #ccc',
    },
    elevation2: {
      boxShadow: 'none !important',
      border: '1px solid  rgba(224, 224, 224, 1)'
    }
  },
  MuiLink: {
    underlineHover: {
      textDecoration: 'none'
      // fontWeight: 550,
    }
  },

  MuiTreeItem: {
    label: {
      padding: '10px'
      // paddingTop:0,
      // paddingBottom:0,
      // marginTop:0,
      // marginBottom:0,
    },
    iconContainer: {
      // display:'none',
      width: '0px'
    }
  },

  MuiList: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0
    }
  },

  MuiTableSortLabel: {
    root: {
      width: 'max-content'
    }
  },
  MuiInputAdornment: {
    positionStart: {
      marginRight: 0
    },
    root: {
      marginTop: '1px',
      color: 'rgba(14, 14, 14, 0.60)'
    },
    positionEnd: {
      marginLeft: 0
    }
  },

  MUIDataTableHeadCell: {
    fixedHeader: {
      background: '#EFEFEF !important',
      paddingTop: 9,
      paddingBottom: 3
    },
    fixedHeaderCommon: {
      backgroundColor: 'none'
    }
  },
  MUIDataTableToolbar: {
    titleText: {
      fontSize: '14px !important'
    }
  },

  MuiDivider: {
    vertical: {
      height: 26,
      backgroundColor: '#fafafa'
    }
  },

  MUIDataTableBodyCell: {
    cellHide: {
      display: 'none !important'
    }
  }
};

export default theme;
