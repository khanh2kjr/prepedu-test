import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import App from './App'
import { theme } from './ui/material-ui/v6'

import './ui/styles'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
