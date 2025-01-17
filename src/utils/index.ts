import { SessionItem } from '@/models'

export const categorizeSessionsByMonth = (sessions: SessionItem[]) => {
  type Result = {
    [month: string]: SessionItem[]
  }
  const result: Result = {}
  const _sessions = structuredClone(sessions).sort((pre, next) => pre.overall_index - next.overall_index)
  _sessions.forEach((session, index) => {
    let monthKey: string = ''
    if (session.date) {
      monthKey = session.date.slice(0, 7)
    } else {
      for (let i = index - 1; i >= 0; i--) {
        if (_sessions[i].date) {
          monthKey = _sessions[i].date?.slice(0, 7) || ''
          break
        }
      }
      if (!monthKey) {
        for (let i = index + 1; i < _sessions.length; i++) {
          if (_sessions[i].date) {
            monthKey = _sessions[i].date?.slice(0, 7) || ''
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

/**
 * Converts a date string in 'YYYY-MM-DD' format to a Vietnamese date format.
 * Output format: 'Thứ X, day thg MM' (e.g., 'Thứ Tư, 15 thg 01').
 *
 * @param {string} dateString - The input date string in 'YYYY-MM-DD' format.
 * @returns {string} - The formatted date string in Vietnamese.
 */
export const formatDateToVietnamese = (dateString: string | null): string => {
  if (!dateString) return 'Invalid Date'
  const daysOfWeek: string[] = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
  const months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  const date: Date = new Date(dateString.trim())
  if (isNaN(date.getTime())) {
    return 'Invalid Date'
  }
  const dayOfWeek: string = daysOfWeek[date.getDay()]
  const day: number = date.getDate()
  const month: string = months[date.getMonth()]
  return `${dayOfWeek}, ${day} thg ${month}`
}

export const getLessonElementIdInfo = (
  dateInput: Date
): {
  id: string
  dateString: string
} => {
  const date: Date = new Date(dateInput)
  if (isNaN(date.getTime())) {
    return {
      id: '',
      dateString: '',
    }
  }
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  return { id: `lesson_${dateString}`, dateString }
}
