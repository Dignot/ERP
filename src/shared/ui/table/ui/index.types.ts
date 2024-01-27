/* eslint-disable camelcase */
import { MRT_ColumnDef } from 'material-react-table'

import type { ButtonProps } from '@mui/material/Button'

export interface TableProps<T extends object> {
  title?: string
  data?: T[]
  columns?: MRT_ColumnDef<T>[]
  isLoading?: boolean
  maxSelectRow?: number
  handleSelectRow?: (rows: string[]) => void
  isSelectRow?: boolean
  actions?: ButtonProps[]
  handleClickRow?: (row: T) => void
  isSelectAll?: boolean
  isCleanSelectState?: boolean
  isDisabled?: boolean
  isColumnResize?: boolean
}
