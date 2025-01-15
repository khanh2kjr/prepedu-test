import CommonCup from '@/components/common/CommonCup'
import CommonStatusItem from '@/components/common/CommonStatusItem'
import ArrowHitTheTargetIcon from '@/components/icons/ArrowHitTheTargeIcon'
import TaskDoneIcon from '@/components/icons/TaskDoneIcon'
import WarningIcon from '@/components/icons/WarningIcon'
import { EducationalPathDataObject, SessionItem, StatusItemColor } from '@/models'
import { themeColors } from '@/ui/material-ui/v6'
import { formatDateToVietnamese } from '@/utils'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ReactElement, useContext, useMemo } from 'react'
import { EducationalPathContext, EducationalPathContextType } from '../educationalPathContext'
import UnitTaskList from './UnitTaskList'

interface LessonItemProps {
  lessonItem: SessionItem
}

interface LessonStyles {
  statusColorType: StatusItemColor
  backgroundColor: string
  unitTaskColor: string
  icon: ReactElement | null
}

const isLessonToday = (lessonDate: Date) => {
  if (!lessonDate || !lessonDate?.getTime()) return false
  const today = new Date()
  return (
    today.getFullYear() === lessonDate.getFullYear() &&
    today.getMonth() === lessonDate.getMonth() &&
    today.getDate() === lessonDate.getDate()
  )
}

const LessonItem = ({ lessonItem }: LessonItemProps) => {
  const classes = useStyles()
  const educationalPathContext: EducationalPathContextType | undefined = useContext(EducationalPathContext)
  const data = educationalPathContext?.data as EducationalPathDataObject

  const objectDates = useMemo(() => {
    const today = new Date()
    const lessonDateObject = new Date(lessonItem.date || '')
    return { today, lessonDateObject }
  }, [lessonItem])

  const unitTaskList = useMemo(() => {
    return data.units.filter(unit => lessonItem.unit_ids.includes(unit.unit_id))
  }, [lessonItem.unit_ids])

  const messageStatus = useMemo(() => {
    const { today, lessonDateObject } = objectDates
    if (lessonItem.completed && !lessonItem.date && !lessonItem.completion_date) {
      return 'Đã hoàn thành trước khi khởi tạo Study Plan'
    }
    if (lessonItem.completion_date && lessonItem.completed) {
      return `Đã hoàn thành ${formatDateToVietnamese(lessonItem.completion_date)}`
    }
    if (!lessonItem.completed && today.getTime() - lessonDateObject.getTime() > 0 && !isLessonToday(lessonDateObject)) {
      return 'Bạn chưa hoàn thành buổi học này'
    }
    return ''
  }, [lessonItem, objectDates])

  const lessonStyles = useMemo(() => {
    const { today, lessonDateObject } = objectDates
    if (lessonItem.completed) {
      return {
        statusColorType: 'green',
        backgroundColor: themeColors.color.green.secondary,
        unitTaskColor: themeColors.color.green.primary,
        icon: <TaskDoneIcon />,
      } as LessonStyles
    }
    if (isLessonToday(lessonDateObject)) {
      return {
        statusColorType: 'blue',
        backgroundColor: themeColors.color.blue.fourth,
        unitTaskColor: themeColors.color.blue.primary,
        icon: <ArrowHitTheTargetIcon />,
      } as LessonStyles
    }
    if (!lessonItem.completed && today.getTime() - lessonDateObject.getTime() > 0) {
      return {
        statusColorType: 'orange',
        backgroundColor: themeColors.color.orange.secondary,
        unitTaskColor: themeColors.color.orange.primary,
        icon: <WarningIcon />,
      } as LessonStyles
    }
    return {
      statusColorType: 'gray',
      backgroundColor: themeColors.color.gray.secondary,
      unitTaskColor: themeColors.color.blue.primary,
      icon: null,
    } as LessonStyles
  }, [lessonItem, objectDates])

  return (
    <Box
      className={classes.RootLessonItem}
      sx={{
        backgroundColor: lessonStyles.backgroundColor,
        border: isLessonToday(objectDates.lessonDateObject) ? `2px solid ${lessonStyles.unitTaskColor}` : 'none',
      }}
    >
      <Box className={classes.header}>
        <Box className={classes.boxStatusDate}>
          <CommonStatusItem
            label={`Buổi ${lessonItem.overall_index}`}
            endIcon={lessonStyles.icon}
            color={lessonStyles.statusColorType}
          />
          {!!lessonItem.date && <Box className={classes.date}>{formatDateToVietnamese(lessonItem.date)}</Box>}
        </Box>
        <CommonCup totalCups={lessonItem.total_proficiency} numberOfCupsWon={lessonItem.proficiency} />
      </Box>
      <UnitTaskList unitTaskList={unitTaskList} unitTaskColor={lessonStyles.unitTaskColor} />
      <Box className={classes.messageStatus} sx={{ color: themeColors.color[lessonStyles.statusColorType].primary }}>
        {messageStatus}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootLessonItem: {
    height: 192,
    width: 'calc((100% - 16px) / 3)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.98)',
      transition: 'all .2s',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  boxStatusDate: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  date: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '20px',
  },
  messageStatus: {
    marginTop: theme.spacing(1),
    fontSize: 12,
  },
}))

export default LessonItem
