import CompanyIcon from '@/components/icons/CompanyIcon'
import MenuIcon from '@/components/icons/MenuIcon'
import PersonIcon from '@/components/icons/PersonIcon'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

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
          <PersonIcon />
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
    [theme.breakpoints.down(688)]: {
      padding: theme.spacing(0, 2),
    },
  },
  boxMenuAndLogo: {
    display: 'flex',
    gap: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(4),
    },
    [theme.breakpoints.down(688)]: {
      gap: theme.spacing(1),
    },
    '& svg': {
      cursor: 'pointer',
    },
    '& svg:last-child': {
      [theme.breakpoints.down(688)]: {
        transform: 'scale(0.8)',
      },
    },
  },
  boxLogin: {
    '& svg': {
      width: 40,
      cursor: 'pointer',
    },
  },
}))

export default MainHeader
