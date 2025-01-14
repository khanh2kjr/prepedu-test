export interface Mission {
  actual_completed_units: number
  earned_cups: number
  expected_completed_units: number
  total_cups: number
  total_units: number
}

export interface UnitItem {
  unit_id: number
  unit_title: string
}

export interface SessionItem {
  completion_date: string | null // yyyy-mm-dd
  date: string | null // yyyy-mm-dd
  completed: boolean
  is_scheduled: boolean
  overall_index: number
  proficiency: number
  total_proficiency: number
  day_of_week?: number
  unit_ids: number[]
}

export interface EducationalPathDataObject {
  duration: number
  level_name: string
  remaining_duration: number
  missions: Mission
  units: UnitItem[]
  sessions: SessionItem[]
}
