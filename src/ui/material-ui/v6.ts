import { createTheme } from '@mui/material/styles'
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme'

export const themeColors = {
  color: {
    blue: {
      primary: '#0071F9',
      secondary: '#007FF4',
      tertiary: '#2792F6',
      fourth: '#EBF5FF',
    },
    green: {
      primary: '#00B135',
      secondary: '#F0FDF4',
    },
    orange: {
      primary: '#F89C1C',
      secondary: '#FFFBEB',
    },
    gray: {
      primary: '#6B7280',
      secondary: '#F9FAFB',
      tertiary: '#E5E7EB',
      fourth: '#EBEDF4',
    },
    black: {
      primary: '#23242D',
    },
  },
} as const

const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  palette: {
    primary: {
      main: themeColors.color.blue.primary,
    },
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
}

type CustomTheme = {
  [Key in keyof typeof themeColors]: (typeof themeColors)[Key]
}
declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export const theme = createTheme({ ...themeColors, ...themeOptions })
