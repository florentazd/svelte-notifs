import { writable } from "svelte/store";

type toastOptions = {
    type?: "info" | "danger" | "success" | "warning"
    duration?: number
}

type notification = {
    id: number
    text: string
    options?: toastOptions
}

export const notifications = writable<notification[]>([])

export const counter = writable(0)