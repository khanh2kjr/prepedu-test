import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const MainContainer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootMainContainer}>
      <Box className={classes.containerCenter}>1</Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootMainContainer: {
    height: 'calc(100vh - 64px)',
    backgroundImage: `linear-gradient(to bottom, ${theme.color.blue.secondary} , ${theme.color.blue.fourth});`,
  },
  containerCenter: {
    maxWidth: 1376,
    padding: theme.spacing(2.5, 4),
    margin: '0 auto',
  },
}))

export default MainContainer