import { counter, notifications } from "$lib/stores/main"

type toastOptions = {
    type: "info" | "danger" | "success" | "warning"
    duration: number
}

export const push = (text: string, options?: toastOptions) => {
    let id = 0;

    counter.update((c) => {
        id = c
        return c += 1
    })

    notifications.update((n) => ([...n, { id: id, text: text, options: options }]))

    const duration = options?.duration || 2500;

    setTimeout(() => {
        notifications.update((n) => {
            n.shift()
            return n;
        })
    }, duration)
}

export const pop = () => {
    notifications.set([])
}
