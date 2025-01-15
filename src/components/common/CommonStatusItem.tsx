import { StatusItemColor } from '@/models'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import { ReactElement } from 'react'

interface CommonStatusItemProps {
  label: string
  endIcon?: ReactElement | null
  color: StatusItemColor
}

const CommonStatusItem = ({ label, endIcon, color }: CommonStatusItemProps) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.RootCommonStatusItem, color && color)}>
      <Box className={classes.label}>{label}</Box>
      {!!endIcon && endIcon}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootCommonStatusItem: {
    background: theme.color.green.primary,
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(0, 1),
    gap: theme.spacing(0.5),
    height: 28,
    '&.blue': {
      background: theme.color.blue.primary,
    },
    '&.orange': {
      background: theme.color.orange.primary,
    },
    '&.green': {
      background: theme.color.green.primary,
    },
    '&.gray': {
      background: theme.color.gray.primary,
    },
  },
  label: {
    fontSize: 14,
    lineHeight: '20px',
    color: '#FFF',
    fontWeight: 700,
  },
}))

export default CommonStatusItem
