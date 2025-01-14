import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MainLayout from '@/layouts/MainLayout'

const App = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootApp}>
      <MainLayout />
      {/* other layouts */}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootApp: {
    color: theme.color.black.primary,
  },
}))

export default App
