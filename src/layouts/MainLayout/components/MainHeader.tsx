import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@/components/icons/MenuIcon'
import CompanyIcon from '@/components/icons/CompanyIcon'
import logoPersonLogin from '@/ui/images/logo-person-login.webp'

const MainHeader = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootMainHeader}>
      <Box className={classes.headerContainer}>
        <Box className={classes.boxMenuAndLogo}>
          <MenuIcon />
          <CompanyIcon />
        </Box>
        <Box className={classes.boxLogin}>
          <img src={logoPersonLogin} alt="Logo-login" />
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootMainHeader: {
    backgroundColor: theme.color.blue.secondary,
    borderBottom: `1px solid rgba(255, 255, 255, 0.15)`,
  },
  headerContainer: {
    maxWidth: 1440,
    height: theme.spacing(8),
    padding: theme.spacing(0, 4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    margin: '0 auto',
  },
  boxMenuAndLogo: {
    display: 'flex',
    gap: theme.spacing(6),
    '& svg': {
      cursor: 'pointer',
    },
  },
  boxLogin: {
    '& img': {
      width: 40,
      cursor: 'pointer',
    },
  },
}))

export default MainHeader
