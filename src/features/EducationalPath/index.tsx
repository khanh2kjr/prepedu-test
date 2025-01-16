import dataMockup from '@/_mocks/data.json'
import CommonScreenLayout from '@/components/common/CommonScreenLayout'
import { EducationalPathDataObject } from '@/models'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import CandidateInfo from './components/CandidateInfo'
import LearningProgressions from './components/LearningProgressions'
import LessionOverviewMonthly from './components/LessonOverviewMonthly'
import { EducationalPathContext } from './educationalPathContext'

const EducationPath = () => {
  const classes = useStyles()

  const [data] = useState<EducationalPathDataObject>(JSON.parse(JSON.stringify(dataMockup)).data)
  const title = `Chặng ${data.level_name}`

  return (
    <EducationalPathContext.Provider value={{ data }}>
      <CommonScreenLayout title={title}>
        <Box className={classes.RootEducationPath}>
          <LessionOverviewMonthly sessions={data.sessions} />
          <Box className={classes.rightContent}>
            <LearningProgressions />
            <CandidateInfo />
          </Box>
        </Box>
      </CommonScreenLayout>
    </EducationalPathContext.Provider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootEducationPath: {
    display: 'flex',
    gap: theme.spacing(2),
    [theme.breakpoints.down(688)]: {
      flexDirection: 'column-reverse',
    },
  },
  rightContent: {
    width: 296,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    height: 'calc(100vh - 133px)',
    position: 'sticky',
    top: 0,
    [theme.breakpoints.down('lg')]: {
      width: 260,
    },
    [theme.breakpoints.down(688)]: {
      width: '100%',
      height: 'unset',
      position: 'unset',
      top: 'unset',
    },
  },
}))

export default EducationPath
