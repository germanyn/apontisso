import { User } from "./User"

export interface Appointment {
    id: string
    project: string
    description?: string
    interval: Interval
    appointer: User
}

export interface Interval {
    start: string
    finish: string
}