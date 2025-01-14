import dataMockup from '@/_mocks/data.json'
import CommonScreenLayout from '@/components/common/CommonScreenLayout'
import { EducationalPathDataObject } from '@/models'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import LessionOverviewMonthly from './components/LessonOverviewMonthly'

const EducationPath = () => {
  const classes = useStyles()

  const [data] = useState<EducationalPathDataObject>(
    JSON.parse(JSON.stringify(dataMockup)).data
  )

  return (
    <CommonScreenLayout title={`Chặng ${data.level_name}`}>
      <Box className={classes.RootEducationPath}>
        <LessionOverviewMonthly units={data.units} sessions={data.sessions} />
        <Box>Right</Box>
      </Box>
    </CommonScreenLayout>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootEducationPath: {
    display: 'flex',
    gap: theme.spacing(2),
  },
}))

export default EducationPath
