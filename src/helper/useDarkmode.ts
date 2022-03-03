import { ref } from "vue"

const listener = window.matchMedia("(prefers-color-scheme: dark)")
const isDarkmode = ref(listener.matches)

const setIsDarkmode = (value: boolean) => {
    isDarkmode.value = value
}

export function useDarkmode() {
    return {
        isDarkmode,
        setIsDarkmode
    }
}