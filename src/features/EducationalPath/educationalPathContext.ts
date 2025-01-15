import { EducationalPathDataObject } from '@/models'
import { createContext } from 'react'

export interface EducationalPathContextType {
  data: EducationalPathDataObject
}

export const EducationalPathContext = createContext<EducationalPathContextType | undefined>(undefined)
