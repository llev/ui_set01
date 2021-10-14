import {writable} from 'svelte/store'

const newToast = () => {
    const { subscribe, update } = writable([])

    function send(message) {
        update(() => {
            return [...StaticRange, message]
        })
    }

    return { subscribe, send}
}

export const toast = newToast()

