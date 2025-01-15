import CommonCup from '@/components/common/CommonCup'
import { EducationalPathDataObject } from '@/models'
import { themeColors } from '@/ui/material-ui/v6'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import { useContext, useMemo } from 'react'
import { EducationalPathContext, EducationalPathContextType } from '../educationalPathContext'

interface LearningProgressionsProps {}

const LearningProgressions = ({}: LearningProgressionsProps) => {
  const classes = useStyles()
  const educationalPathContext: EducationalPathContextType | undefined = useContext(EducationalPathContext)

  const data = educationalPathContext?.data as EducationalPathDataObject
  const { missions, remaining_duration, duration } = data
  const { actual_completed_units, expected_completed_units, total_units, total_cups, earned_cups } = missions

  const message = useMemo(() => {
    if (actual_completed_units > expected_completed_units) {
      return 'Bạn đang học nhanh hơn kế hoạch'
    } else if (actual_completed_units < expected_completed_units) {
      return 'Bạn đang học chậm hơn kế hoạch'
    } else {
      return 'Bạn đang học đúng với kế hoạch'
    }
  }, [data.missions])

  return (
    <Box className={classes.RootLearningProgressions}>
      <Box className={classes.title}>Tiến trình học</Box>
      <Box className={classes.body}>
        <Box className={classes.option}>
          <Box className={classes.label}>Số ngày còn lại</Box>
          <Box className={classes.value}>
            {remaining_duration}/{duration} ngày
          </Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>Số cúp đã đạt</Box>
          <CommonCup className={classes.value} totalCups={total_cups} numberOfCupsWon={earned_cups} />
        </Box>
        <Box className={classes.boxUnitStatistics}>
          <Box className={classes.label}>Số Unit đạt 02 cup / Tổng số Unit</Box>
          <Box className={classes.lineProgressBar}>
            <Box
              className={clsx(classes.lineValue, classes.lineActualProgress)}
              sx={{ width: `${(actual_completed_units / total_units) * 100}%` }}
            />
            <Box
              className={clsx(classes.lineValue, classes.lineExpectedProgress)}
              sx={{ width: `${(expected_completed_units / total_units) * 100}%` }}
            />
          </Box>
          <Box className={classes.boxDotValue}>
            <Box className={classes.dot} sx={{ backgroundColor: themeColors.color.green.primary }} />
            <Box className={classes.value}>
              Thực tế: {actual_completed_units}/{total_units}
            </Box>
          </Box>
          <Box className={classes.boxDotValue}>
            <Box className={classes.dot} sx={{ backgroundColor: themeColors.color.blue.primary }} />
            <Box className={classes.value}>
              Kế hoạch: {expected_completed_units}/{total_units}
            </Box>
          </Box>
          <Box className={classes.value}>{message}</Box>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootLearningProgressions: {
    background: '#FFF',
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.spacing(2),
  },
  title: {
    fontSize: 20,
    lineHeight: '28px',
    fontWeight: 700,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down(688)]: {
      fontSize: 18,
    },
    [theme.breakpoints.down(360)]: {
      fontSize: 16,
    },
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    paddingBottom: theme.spacing(1.5),
    borderBottom: `1px solid ${theme.color.gray.tertiary}`,
  },
  label: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 600,
    [theme.breakpoints.down(360)]: {
      fontSize: 13,
    },
  },
  value: {
    fontSize: 14,
    color: theme.color.gray.primary,
    [theme.breakpoints.down(360)]: {
      fontSize: 13,
    },
  },
  boxUnitStatistics: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  boxDotValue: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
  },
  lineProgressBar: {
    height: 16,
    borderRadius: theme.spacing(2.5),
    backgroundColor: theme.color.neutral.primary,
    position: 'relative',
    [theme.breakpoints.down(360)]: {
      height: 14,
    },
  },
  lineActualProgress: {
    backgroundColor: theme.color.green.primary,
    zIndex: 1,
  },
  lineExpectedProgress: {
    backgroundColor: theme.color.blue.primary,
  },
  lineValue: {
    position: 'absolute',
    height: '100%',
    borderRadius: theme.spacing(2.5),
  },
}))

export default LearningProgressions
