import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
interface CommonButtonProps {
  children: string
  onClick: () => void
}
const CommonButton = ({ children, onClick }: CommonButtonProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.RootCommonButton} onClick={onClick}>
      <Box className={classes.label}>{children}</Box>
    </Box>
  )
}
const useStyles = makeStyles((theme: Theme) => ({
  RootCommonButton: {
    borderRadius: theme.spacing(1.5),
    border: `1px solid ${theme.color.gray.tertiary}`,
    padding: theme.spacing(0, 2),
    height: 40,
    lineHeight: '40px',
    backgroundColor: '#FFF',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.color.gray.fourth,
    },
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  },
}))
export default CommonButton
