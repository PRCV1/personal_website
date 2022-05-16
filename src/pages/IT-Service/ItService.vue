<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-8 col-12">
                <Section title="IT-Service Lukas Müller">
                    Die IT ist seit einigen Jahren aus dem täglichen Leben nicht mehr wegzudenken. Viele Menschen sind darauf tag täglich angewiesen. Doch was, wenn es mal Probleme gibt?
                    Dann sind viele aufgeschmissen. Und genau hier stehe ich zur Verfügung. Kurz und knapp analysiere ich das Problem und behebe es im Handumdrehen.
                    <br><br>
                    Der Markt ist voll von Hard & Softwarelösungen, doch was brauche ich wirklich?
                    Jeden Tag stehen Betriebe vor unnötigen Problemen mit der IT, aufgrund von mangelhafter Beratung, irreführender Werbung oder falschen Versprechen mancher Vertriebspersonen.
                    <b>Aber das geht auch besser!</b>
                </Section>
                <Section title="Leistungen">
                    <ul>
                        <li>
                            Beratung bei der Anschaffung neuer Computersysteme
                        </li>
                        <li>
                            Upgrade & Aufbauservice von Computersystemen
                        </li>
                        <li>
                            Einrichten von Datensicherungen und dazugehörigen Lösungen
                        </li>
                        <li>
                            Finden und beheben von Problemen (Hardware & Software) 
                        </li>
                        <li>
                            Umzugsservice (neuer Computer)
                        </li>
                    </ul>
                </Section>
            </div>
            <div class="col-lg-4 col-12">
                <Section title="Open Startup">
                    <Revenue />
                </Section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Section from "../../components/Section.vue"
import Revenue from "./components/Revenue.vue"
import { onMounted } from "vue";

onMounted(() => {
    setTimeout(() => window.scrollTo({ top: 0 }), 150)
})

</script>