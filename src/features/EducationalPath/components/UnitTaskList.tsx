import { UnitItem } from '@/models'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface UnitTaskListProps {
  unitTaskList: UnitItem[]
  unitTaskColor: string
}

const UnitTaskList = ({ unitTaskList, unitTaskColor }: UnitTaskListProps) => {
  const classes = useStyles({ unitTaskColor })
  return (
    <Box className={classes.RootUnitTaskList}>
      {unitTaskList.map(unitItem => (
        <Box className={classes.unitItem} key={unitItem.unit_id}>
          <Box className={classes.hexagon} sx={{ backgroundColor: unitTaskColor }} />
          <Box className={classes.unitTaskName} title={unitItem.unit_title}>
            {unitItem.unit_title}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootUnitTaskList: {
    height: 'calc(100% - 58px)',
  },
  unitItem: {
    padding: theme.spacing(0.5, 1),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
  },
  hexagon: {
    width: '8px',
    height: '8px',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  },
  unitTaskName: {
    fontSize: 12,
    color: theme.color.gray.primary,
    lineHeight: '16px',
    width: 'calc(100% - 12px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    '&:hover': {
      color: ({ unitTaskColor }: { unitTaskColor: string }) => unitTaskColor,
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
    },
  },
}))

export default UnitTaskList
