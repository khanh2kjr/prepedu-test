import { SessionItem } from '@/models'

export const categorizeSessionsByMonth = (sessions: SessionItem[]) => {
  type Result = {
    [month: string]: SessionItem[]
  }

  const result: Result = {}

  sessions.forEach((session, index) => {
    let monthKey: string = ''
    if (session.date) {
      monthKey = session.date.slice(0, 7)
    } else {
      for (let i = index - 1; i >= 0; i--) {
        if (sessions[i].date) {
          monthKey = sessions[i].date?.slice(0, 7) || ''
          break
        }
      }
      if (!monthKey) {
        for (let i = index + 1; i < sessions.length; i++) {
          if (sessions[i].date) {
            monthKey = sessions[i].date?.slice(0, 7) || ''
            break
          }
        }
      }
    }

    if (!result[monthKey]) {
      result[monthKey] = []
    }

    result[monthKey].push(session)
  })

  return result
}
