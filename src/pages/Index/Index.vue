<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-8 col-12">
                <Section title="Über mich">
                    Ich bin Softwareentwickler bei AFS-Software GmbH & Co.KG, einer Softwarefirma im Zentrum von
                    Deutschland, welche sich auf die Entwicklung und Vertrieb einer eigenen Warenwirtschaft sowie eines
                    Kassensystems spezialisiert hat.
                    Ich habe über 5 Jahre Erfahrung in der Backend-Entwicklung und arbeite mit verschiedenen Kunden in
                    ganz Deutschland zusammen. Auch bin ich ein großer Fan von moderner App-Entwicklung mit Flutter.
                </Section>
                <Section title="Meine Projekte">
                    <Projects />
                </Section>
            </div>
            <div class="col-lg-4 col-12">
                <Section title="Kontakt">
                    <ol class="list-unstyled">
                        <li class="mb-3">
                            <i class="bi bi-geo-alt-fill"></i>
                            Philippsthal (Werra), DE
                        </li>
                        <li class="mb-3">
                            <BsLink class="text-decoration-none" :show-icon="true" icon="bi bi-link-45deg"
                                text="lukasmueller.info" url="https://lukasmueller.info" />
                        </li>
                        <li class="mb-3">
                            <BsLink class="text-decoration-none" :show-icon="true" icon="bi bi-envelope"
                                url="mailto:muellerlukas@posteo.de?subject=Kontaktanfrage über Webseite"
                                text="Kontaktanfrage" />
                        </li>
                    </ol>
                </Section>
                <Section title="Fähigkeiten">
                    <Skills />
                </Section>
                <Section title="Ausbildung">
                    <Education />
                </Section>
                <Section title="Credits">
                    <Credits />
                </Section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Education from "./components/Education.vue"
import Projects from "./components/Projects.vue"
import Credits from "./components/Credits.vue"
import Skills from "./components/Skills.vue"
import BsLink from "../../components/bsLink.vue"
import Section from "../../components/Section.vue"
import { onMounted } from "vue";

onMounted(() => {
    setTimeout(() => window.scrollTo({ top: 0 }), 150)
})

</script>