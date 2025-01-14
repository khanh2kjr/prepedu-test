import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const App = () => {
  const classes = useStyles()

  return <div className={classes.RootApp}>App</div>
}

const useStyles = makeStyles((theme: Theme) => ({
  RootApp: {
    color: theme.color.black.primary,
  },
}))

export default App
