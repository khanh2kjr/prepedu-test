import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { theme } from './ui/material-ui/v6.ts'
import App from './App.tsx'

import './ui/styles'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
