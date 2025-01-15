import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MainContainer from './components/MainContainer'
import MainHeader from './components/MainHeader'

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
