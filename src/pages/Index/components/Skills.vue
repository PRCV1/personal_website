<template>
    <BsProgressbar v-for="(item, index) in skills" :label="item.title" :value="item.value" />
</template>

<script setup lang="ts">
import BsProgressbar from '../../../components/bsProgressbar.vue';

interface ISkill {
    title: String,
    value: Number,
}

const skills: ISkill[] = [
    {
        title: "VB.NET/C#",
        value: 80
    },
    {
        title: "SQL (MySQL/MSSQL)",
        value: 50
    },
    {
        title: "JS/TS",
        value: 40
    },
    {
        title: "Entity Framework (Core)",
        value: 80
    }
]

</script>