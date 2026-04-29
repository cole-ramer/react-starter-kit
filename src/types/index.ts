/** Generic API response wrapper */
export interface ApiResponse<T> {
  data: T
  error: string | null
  status: number
}

/** Generic paginated list */
export interface Paginated<T> {
  items: T[]
  total: number
  page: number
  perPage: number
  totalPages: number
}

/** Utility type: make selected keys required */
export type RequiredKeys<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>

/** Utility type: make all keys optional recursively */
export type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T
