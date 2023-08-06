import { type GENRES } from '@/constants/genre'

export type AvailableGenres = keyof typeof GENRES

export type ObjectWithKeyGenres<T> = Record<AvailableGenres, T>
