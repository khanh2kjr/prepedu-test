import chit from '@/ui/images/chit.png'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const CandidateInfo = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootCandidateInfo}>
      <Box className={classes.candidateName}>Nguyễn Văn Khánh</Box>
      <Box className={classes.boxChit}>
        <img src={chit} alt="chit" />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootCandidateInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2.5),
    '& img': {
      width: 236,
    },
  },
  candidateName: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFF',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: theme.spacing(2),
    textAlign: 'center',
    padding: theme.spacing(2),
    lineHeight: '24px',
  },
  boxChit: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default CandidateInfo
