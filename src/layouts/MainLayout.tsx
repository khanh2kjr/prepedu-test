import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Header from './components/Header'

const MainLayout = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootMainLayout}>
      <Header />
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  RootMainLayout: {},
}))

export default MainLayout
