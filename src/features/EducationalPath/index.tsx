import dataMockup from '@/_mocks/data.json'
import CommonScreenLayout from '@/components/common/CommonScreenLayout'
import { EducationalPathDataObject } from '@/models'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import CandidateInfo from './components/CandidateInfo'
import LearningProgressions from './components/LearningProgressions'
import LessionOverviewMonthly from './components/LessonOverviewMonthly'

const EducationPath = () => {
  const classes = useStyles()

  const [data] = useState<EducationalPathDataObject>(
    JSON.parse(JSON.stringify(dataMockup)).data
  )

  return (
    <CommonScreenLayout title={`Chặng ${data.level_name}`}>
      <Box className={classes.RootEducationPath}>
        <LessionOverviewMonthly sessions={data.sessions} />
        <Box className={classes.rightContent}>
          <LearningProgressions />
          <CandidateInfo />
        </Box>
      </Box>
    </CommonScreenLayout>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootEducationPath: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  rightContent: {
    width: 296,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
  },
}))

export default EducationPath
