import { ref } from "vue"

const listener = window.matchMedia("(prefers-color-scheme: dark)")
const isDarkmode = ref(listener.matches)

const setIsDarkmode = (value: boolean) => {
    isDarkmode.value = value
    localStorage.setItem("darkmode", String(value))
}

export function useDarkmode() {
    isDarkmode.value = Boolean(localStorage.getItem("darkmode")) ?? false;
    return {
        isDarkmode,
        setIsDarkmode
    }
}