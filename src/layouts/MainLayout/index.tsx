import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MainHeader from './components/MainHeader'
import MainContainer from './components/MainContainer'

const MainLayout = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootMainLayout}>
      <MainHeader />
      <MainContainer />
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  RootMainLayout: {},
}))

export default MainLayout
