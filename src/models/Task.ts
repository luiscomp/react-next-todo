import { Priority } from "@/app/types"

export interface Task {
    name: string
    priority: Priority
    completed: boolean
}