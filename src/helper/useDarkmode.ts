import { ref, watch } from "vue"

const listener = window.matchMedia("(prefers-color-scheme: dark)")
const isDarkmode = ref(Boolean(localStorage.getItem("darkmode") ?? listener.matches))

const textClass = ref(Boolean(localStorage.getItem("darkmode") ?? listener.matches) ? "text-white-50" : "text-dark")
const bgClass = ref(Boolean(localStorage.getItem("darkmode") ?? listener.matches) ? "bg-dark" : "bg-light")

watch(isDarkmode, (newValue: boolean) => {
    textClass.value = newValue ? "text-white-50" : "text-dark"
    bgClass.value = newValue ? "bg-dark-trans" : "bg-light-trans"
})

const setIsDarkmode = (value: boolean) => {
    isDarkmode.value = value
    localStorage.setItem("darkmode", String(value))
}

export function useDarkmode() {
    return {
        isDarkmode,
        setIsDarkmode,
        textClass,
        bgClass
    }
}