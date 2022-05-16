<template>
    <table class="table" :class="textClass">
        <thead>
            <tr>
                <th>Jahr</th>
                <th>Monat</th>
                <th>Umsatz</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in revenues" :key="index">
                <th>
                    {{ item.date }}
                </th>
                <th>
                    {{ item.title }}
                </th>
                <th>
                    {{ item.revenue }}
                </th>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, registerables } from "chart.js";
import { useDarkmode } from "../../../helper/useDarkmode"

const { textClass } = useDarkmode()

Chart.register(...registerables);

const revenues: Ref<IRevenue[]> = ref([])

interface IRevenue {
    date: Date,
    title: String,
    revenue: Number
}

onMounted(async () => {
    var response = await fetch("revenue.json")
    revenues.value = Object.assign([], await response.json())
})

</script>