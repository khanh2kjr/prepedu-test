import CommonButton from '@/components/common/CommonButton'
import { SessionItem } from '@/models'
import { categorizeSessionsByMonth } from '@/utils'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ListLessonMonthlyItem from './ListLessionMonthlyItem'

interface LessionOverviewMonthlyProps {
  sessions: SessionItem[]
}

const LessionOverviewMonthly = ({ sessions }: LessionOverviewMonthlyProps) => {
  const classes = useStyles()

  const sessionMonthly = categorizeSessionsByMonth(sessions)

  const scrollToTodaysLesson = () => {}

  return (
    <Box className={classes.RootLessionOverviewMonthly}>
      <Box className={classes.header}>
        <CommonButton onClick={scrollToTodaysLesson}>Hôm nay</CommonButton>
        <Box className={classes.title}>Tổng quan</Box>
      </Box>
      <Box className={classes.body}>
        {Object.keys(sessionMonthly).map(monthKey => (
          <ListLessonMonthlyItem key={monthKey} yearMonthString={monthKey} listOfLessons={sessionMonthly[monthKey]} />
        ))}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootLessionOverviewMonthly: {
    width: 'calc(100% - 296px - 16px)',
    backgroundColor: '#FFF',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      width: 'calc(100% - 260px - 16px)',
    },
    [theme.breakpoints.down(688)]: {
      width: '100%',
    },
  },
  header: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    [theme.breakpoints.down(688)]: {
      fontSize: 18,
    },
    [theme.breakpoints.down(360)]: {
      fontSize: 14,
    },
  },
  body: {
    borderTop: `1px solid ${theme.color.gray.fourth}`,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
}))

export default LessionOverviewMonthly
