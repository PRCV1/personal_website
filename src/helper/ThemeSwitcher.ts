import { Ref, ref } from "vue"

class ThemeSwitcher {

    isDarkmode: Ref<boolean>

    constructor() {
        const listener = window.matchMedia("(prefers-color-scheme: dark)")

        this.isDarkmode = ref(listener.matches)

        listener.addEventListener("change", ev => this.isDarkmode.value = ev.matches)
    }

    switch(): void {
        this.isDarkmode.value = !this.isDarkmode.value
    }

}

export default new ThemeSwitcher()