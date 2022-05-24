import { createTheme } from '@mui/material/styles';

const darkTheme = {
  direction: 'ltr',
  MuiSlider: {
    track: { backgroundColor: 'rgb(0, 120, 188)' },
    thumb: { backgroundColor: '#FFFFFF' }
  },
  palette: {
    primary1Color: 'red',
    common: {
      black: '#000',
      white: '#ffffff',
      smokeWhite: '#fafafa',
      catskillPale: '#edf4f7',
      pattensPale: '#d7e4ea',
      bigStoneGrey: '#33444c',
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
      criticalAlert: '#f24343',
      highAlert: '#f24343',
      mediumAlert: '#f09502',
      mediumToLowAlert: '#FFFF00',
      lowAlert: '#DB72E0',
      noAlert: '#00cd63'
    },
    severity: {
      5: '#FFFF00',
      4: '#f24343',
      3: '#f09502',
      2: '#DB72E0',
      1: '#00cd63',
      0: '#fff'
    },
    type: 'dark',
    primary: {
      50: '#1f3139',
      100: '#2a3b41',
      200: '#33444b',
      300: '#0e0e0e', // used to color table dividers
      400: '#38a4dc', // bright blue, colors some accent items
      500: '#1f3138', // used in the inner panels of order-details page
      600: '#11a4dc', // used as the active tab color on the demand page
      700: '#d7e4ea', // used in the map icons, pattensPale
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
      A400: '#00cd63', // controls Typography component's accent color
      A700: '#c51162',
      contrastDefaultColor: 'light'
    },
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
      A400: '#ff1744', // controls Typography component's error color
      A700: '#d50000',
      contrastDefaultColor: 'light'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#40484c',
      900: '#1f3138',
      1000: '#5e747e',
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
      primary: 'rgba(255, 255, 255, .9)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      accent: 'rgba(0, 205, 99, 1)',
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
      paper: '#33444a',
      appBar: '#203139',
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
    display5: {
      fontSize: '18px',
      fontWeight: 300,
      fontFamily: "'Roboto Light', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '28px',
      marginLeft: '-.04em',
      color: '#fafafa'
    },
    h1: {
      fontSize: '7rem',
      fontWeight: 300,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      marginLeft: '-.06em',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    link: {
      unclicked: '#11a4dc'
    },
    h2: {
      fontSize: '28px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.02em',
      lineHeight: '28px',
      marginLeft: '-.04em',
      color: 'rgba(255, 255, 255, 0.9)'
    },
    h3: {
      fontSize: '28px',
      fontWeight: 300,
      fontFamily: "'Roboto Light', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '28px',
      marginLeft: '-.04em',
      color: '#fafafa'
    },
    h4: {
      fontSize: '24px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '24px',
      marginLeft: '-.04em',
      color: 'rgba(255, 255, 255, 0.9)'
    },
    h5: {
      fontSize: '20px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '20px',
      color: 'rgba(255, 255, 255, 1)'
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.6rem',
      color: 'rgba(250, 250, 250, 1.0)'
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.6rem',
      color: 'rgba(255, 255, 255, 0.9)'
    },
    body1: {
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '18px',
      color: '#fafafa',
      letterSpacing: '0.01em',
      paddingRight: '0.73em'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '15px',
      color: 'rgba(250, 250, 250, 0.73)',
      letterSpacing: '0.01em'
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '12px',
      paddingRight: '0.73em',
      color: 'rgba(250, 250, 250, 0.73)'
    },
    button: {
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
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
    '3px 3px 2px rgba(14, 14, 14, 0.898039215686275)',
    'rgb(0, 0, 0) 1px 3px 0px',
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
  PanelSummary: {
    root: {},
    highlights: {
      width: '100%'
    }
  },
  Panel: {
    root: {
      padding: '7px 14px',
      marginBottom: '14px',
      backgroundColor: '#42565d',
      borderRadius: '4px',
      boxShadow: 'none'
    },
    highlights: {
      padding: '14px 7px 7px',
      margin: '0px 0px 14px 0px',
      borderRadius: '0px 0px 4px 4px',
      borderTop: '#bec3c5 solid 1px',
      backgroundColor: '#1f3138'
    }
    // height: '100%',
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
    background: '#2a3b41',
    borderRadius: '4px'
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
        margin: '10px 0 0',
        width: '',
        minHeight: '55px',
        padding: 0,
        boxShadow: 'none'
      },
      error: {
        // Applied only to the error notification item
        borderTop: 'none',
        borderRadius: '4px',
        backgroundColor: '#d7e4ea',
        color: '#0e0e0e',
        paddingLeft: 16,
        paddingRight: 8
      }
    },
    Dismiss: {
      DefaultStyle: {
        width: '25px',
        height: '25px'
      },

      error: {
        fontSize: '35px',
        top: '20px',
        right: '10px',
        backgroundColor: '',
        borderRadius: '',
        width: '20px',
        height: '20px',
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
        color: '#0E0E0E',
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
  mapStyle: [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 36
        },
        {
          color: '#007ab4'
        },
        {
          lightness: 40
        },
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#5e747e'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#33444c'
        },
        {
          lightness: '0'
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#203339'
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#33444b'
        },
        {
          lightness: '0'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#33444b'
        },
        {
          lightness: '0'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#2d3f46'
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        },
        {
          saturation: '-62'
        },
        {
          lightness: '11'
        },
        {
          gamma: '0.48'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [
        {
          color: '#43565e'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          lightness: 19
        },
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#203339'
        },
        {
          lightness: '0'
        }
      ]
    }
  ]
};
const theme = createTheme(darkTheme);
theme.overrides = {
  // These following three overrides are used for the tabs on the Demand and Supply pages
  MuiTabs: {
    root: {
      backgroundColor: '##1f3138',
      fontSize: '16px'
    },
    indicator: {
      backgroundColor: theme.palette.primary[600],
      height: 4
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
      fontSize: '16px',
      fontWeight: '500'
    },
    textColorPrimary: {
      color: theme.palette.common.smokeWhite
    },
    selected: {
      color: `${theme.palette.primary[400]}!important`
    },
    root: {
      fontSize: '14px !important'
    }
  },
  MuiIconButton: {
    root: {
      color: '#fafafa',
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
    }
  },
  MuiAppBar: {
    root: {
      boxShadow: 'none'
    }
  },
  MuiMenuItem: {
    root: {
      ...theme.typography.body1,
      minHeight: 36,
      padding: 7
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
  MuiButton: {
    // FLAT and RAISED deprecated
    // TEXT and CONTAINED to be used
    outlinedPrimary: {
      color: '#ffffff',
      backgroundColor: '#007AB4',
      borderRadius: '5px',
      border: `solid 1px ${theme.palette.primary[700]}`
    },
    containedPrimary: {
      color: '#ffffff',
      backgroundColor: 'rgb(0, 122, 180)',
      borderRadius: '5px',
      marginLeft: '10px',
      boxShadow: 'none',
      lineHeight: 0,
      border: 'none',
      height: '30px',
      '&:hover': {
        backgroundColor: '#135e82'
      }
    },
    containedSecondary: {
      color: '#ffffff',
      backgroundColor: 'rgb(94, 116, 126)',
      borderRadius: '5px',
      marginLeft: '10px',
      boxShadow: 'none',
      lineHeight: 0,
      border: 'none',
      height: '30px',
      '&:hover': {
        backgroundColor: '#135e82'
      }
    },
    label: {
      display: 'unset',
      textTransform: 'none'
    }
  },
  MuiTableHead: {
    root: {
      backgroundColor: '#fff'
    }
  },
  MuiFormLabel: {
    root: {
      color: 'white',
      '&$focused': {
        color: 'white'
      },
      fontSize: 12,
      paddingTop: 4,
      width: 'max-content'
    }
  },
  MuiInputLabel: {
    shrink: {
      transform: 'scale(1)'
    }
  },
  MuiSelect: {
    root: {
      color: 'white',
      fontSize: 12
    },
    icon: {
      color: 'white'
    }
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: '#fafafa'
    }
  },
  MuiExpansionPanel: {
    root: {
      backgroundColor: '#1f3138',
      borderRadius: 4,
      boxShadow: 'none',
      padding: '0px 0px',
      marginTop: '5px',
      marginBottom: '5px',
      '&:before': {
        backgroundColor: 'none'
      },
      '&:first-child': {
        borderRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        // paddingRight: 10,
        width: 'auto'
      },
      '&:last-child': {
        borderRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
      }
    },
    focused: {
      backgroundColor: 'transparent !important',
      border: 'none'
    },
    expanded: {
      marginTop: '4px !important'
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
      backgroundColor: '#1f3138'
    }
  },
  MuiExpansionPanelSummary: {
    content: {
      marginBottom: 0,
      marginTop: 0,
      borderRadius: 4,
      background: theme.palette.primary[500],
      '& > :last-child': {
        paddingRight: 0
      }
    },
    root: {
      paddingLeft: 0,
      paddingRight: 10,
      userSelect: 'text'
    },
    expandIcon: {
      color: theme.palette.primary[400],
      marginRight: 0
    }
  },
  MuiOutlinedInput: {
    root: {
      backgroundColor: '#3B4D54',
      '& $notchedOutline': {
        borderColor: 'rgba(255,255,255, 0.5)'
      },
      '&$error $notchedOutline': {
        border: 'none',
        borderBottom: '2px solid red',
        '&:$focus': {
          borderColor: 'rgba(255,255,255, 0)' // not working
        }
      }
    },
    focused: {
      border: '1px solid #0A6A97',
      borderRadius: 5,
      // backgroundColor: 'rgba(0,0,0,0.2)',
      '& $error': {
        border: 'none'
      }
    },
    disabled: {
      color: '#fafafa !important'
    },
    input: {
      padding: 6,
      color: '#FAFAFA'
    }
  },
  MuiInputBase: {
    input: {
      fontSize: 12,
      padding: '6px 0 7px 5px'
    }
  },
  MuiFormHelperText: {
    root: {
      paddding: 0,
      fontSize: '10px',
      color: 'rgba(250, 250, 250, 0.5)'
    },
    disabled: {
      color: 'rgba(250, 250, 250, 0.3) !important'
    },
    contained: {
      margin: '5px 0 0 0'
    }
  },
  stepper: {
    iconColor: 'green',
    backgroundColor: 'red'
  },
  MuiDrawer: {
    paperAnchorRight: {
      backgroundColor: '#334449'
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
      backgroundColor: theme.palette.common.fjordBlue,
      fontSize: theme.typography.pxToRem(20)
    }
  },
  MuiListItemIcon: {
    root: {
      color: theme.palette.common.smokeWhite
    }
  },
  MuiSvgIcon: {
    root: {
      height: '1.2em',
      width: '1.2em'
    }
  },
  MuiTableCell: {
    root: {
      border: '1px solid rgb(42, 59, 65)',
      borderRadius: 3,
      padding: '10px 4px 10px 20px',
      borderBottom: 'none'
      // textAlign: 'center',
    },
    head: {
      // backgroundColor: 'transparent',
      color: '#fafafa',
      fontWeight: 550,
      fontSize: '14px',
      // padding: '0 0 0 20px',
      border: 'none'
      // textAlign: 'center',
    }
  },
  MuiTableRow: {
    root: {
      backgroundColor: '#1f3138',
      borderRadius: 3
    },
    head: {
      // backgroundColor: 'transparent',
    }
  },
  MuiBox: {
    root: {
      padding: 10
    }
  },
  MuiPickersCalendarHeader: {
    dayLabel: {
      color: '#fafafa'
    }
  },
  MuiTypography: {
    colorPrimary: {
      color: '#11a4dc'
    },
    colorTextSecondary: {
      color: '#fafafa',
      fontSize: 14
    }
  },
  MuiPickersToolbar: {
    toolbar: {
      height: 70
    }
  },
  MuiDialogTitle: {
    root: {
      padding: 0
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
      backgroundColor: '#33444b',
      boxShadow: 'none',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      borderRadius: '3px',
      overflowX: 'auto'
    }
  },
  MuiPaper: {
    root: {
      display: 'block',
      backgroundColor: 'rgb(31, 49, 56)',
      boxShadow: 'none !important',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      borderRadius: '3px',
      overflowX: 'auto'
    }
  },

  MuiList: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0
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
  }
};
export default theme;
