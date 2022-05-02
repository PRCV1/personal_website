import { ref } from "vue"

const listener = window.matchMedia("(prefers-color-scheme: dark)")
const isDarkmode = ref(Boolean(localStorage.getItem("darkmode") ?? listener.matches))

const setIsDarkmode = (value: boolean) => {
    isDarkmode.value = value
    localStorage.setItem("darkmode", String(value))
}

export function useDarkmode() {
    return {
        isDarkmode,
        setIsDarkmode
    }
}