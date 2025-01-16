import { SessionItem } from '@/models'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LessonItem from './LessonItem'

interface ListLessonMonthlyItemProps {
  yearMonthString: string
  listOfLessons: SessionItem[]
}

const ListLessonMonthlyItem = ({ yearMonthString, listOfLessons }: ListLessonMonthlyItemProps) => {
  const classes = useStyles()

  const formatDateTitle = (yearMonthString: string) => {
    const [year, month] = yearMonthString.split('-')
    return `Tháng ${parseInt(month)}, ${year}`
  }

  return (
    <Box className={classes.RootListLessonMonthlyItem}>
      <Box className={classes.boxTitle}>
        <Box className={classes.line} />
        <Box className={classes.dateTitle}>{formatDateTitle(yearMonthString)}</Box>
        <Box className={classes.line} />
      </Box>
      <Box className={classes.listOfLessons}>
        {listOfLessons.map(lessonItem => (
          <LessonItem key={lessonItem.overall_index} lessonItem={lessonItem} />
        ))}
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
    padding: theme.spacing(2, 0, 1.5, 0),
    position: 'sticky',
    top: theme.spacing(9),
    backgroundColor: '#FFF',
    zIndex: 1,
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
    [theme.breakpoints.down(360)]: {
      fontSize: 14,
    },
  },
  listOfLessons: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  },
}))

export default ListLessonMonthlyItem
