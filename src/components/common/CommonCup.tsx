import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import CupIcon from '../icons/CupIcon'

interface CommonCupProps {
  totalCups: number
  numberOfCupsWon: number
  className?: string
}

const CommonCup = ({
  totalCups,
  numberOfCupsWon,
  className,
}: CommonCupProps) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.RootCommonCup, className && className)}>
      <CupIcon />
      <Box>
        {numberOfCupsWon}/{totalCups}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootCommonCup: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    fontSize: 16,
    color: theme.color.gray.primary,
    fontWeight: 500,
  },
}))

export default CommonCup
