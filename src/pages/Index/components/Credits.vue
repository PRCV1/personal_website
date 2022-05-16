<template>
    <ol class="list-group">
        <li v-for="(item, index) in credits" :key="index" :class="textClass"
            class="border-0 list-group-item list-group-item-dark bg-transparent d-flex justify-content-between align-items-start">
            <i :class="item.icon"></i>
            <div class="ms-2 me-auto">
                <div class="fw-bold">{{ item.title }}</div>
                {{ item.text }}
            </div>
        </li>
    </ol>
</template>

<script setup lang="ts">
import { useDarkmode } from "../../../helper/useDarkmode"

const { textClass } = useDarkmode()

interface ICredit {
    title: String,
    text: String,
    icon: String
}

const credits: ICredit[] = [
    {
        title: "Bootstrap",
        text: "CSS-Framework + Icons",
        icon: "bi bi-bootstrap"
    },
    {
        title: "Vue 3",
        text: "JS-Framework",
        icon: "bi bi-filetype-js"
    }
]

</script>