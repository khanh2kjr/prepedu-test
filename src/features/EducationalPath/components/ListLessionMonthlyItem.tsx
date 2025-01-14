import { SessionItem } from '@/models'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface ListLessonMonthlyItemProps {
  yearMonthString: string // YYYY-MM
  listOfLessons: SessionItem[]
}

const ListLessonMonthlyItem = ({
  yearMonthString,
  listOfLessons,
}: ListLessonMonthlyItemProps) => {
  const classes = useStyles()

  const formatDateTitle = (yearMonthString: string) => {
    const [year, month] = yearMonthString.split('-')
    return `Tháng ${parseInt(month)}, ${year}`
  }

  return (
    <Box className={classes.RootListLessonMonthlyItem}>
      <Box className={classes.boxTitle}>
        <Box className={classes.line} />
        <Box className={classes.dateTitle}>
          {formatDateTitle(yearMonthString)}
        </Box>
        <Box className={classes.line} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootListLessonMonthlyItem: {},
  boxTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(1.5),
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: theme.color.gray.fourth,
  },
  dateTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: theme.color.gray.primary,
  },
}))

export default ListLessonMonthlyItem
