import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ReactElement } from 'react'

interface CommonScreenLayoutProps {
  title: string
  children: ReactElement
}

const CommonScreenLayout = ({ title, children }: CommonScreenLayoutProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.RootCommonScreenLayout}>
      <Box className={classes.title}>{title}</Box>
      {children}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootCommonScreenLayout: {},
  title: {
    marginBottom: theme.spacing(2),
    color: '#FFF',
    lineHeight: '32px',
    fontSize: 24,
    fontWeight: 700,
  },
}))

export default CommonScreenLayout
