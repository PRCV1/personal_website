<template>
  <Header />
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-8 col-12">
        <Section title="Über mich">
          Ich bin Softwareentwickler bei AFS-Software GmbH & Co.KG, einer Softwarefirma welche sich auf die Entwicklung und Vertrieb einer eigenen Warenwirtschaft und Kasse spezialisiert hat.
          Ich habe über 5 Jahre Erfahrung in der Backend-Entwicklung und arbeite mit verschiedenen Kunden in ganz Deutschland zusammen. Ich bin auch ein Fan von moderner App-Entwicklung mit Flutter.
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
              <i class="bi bi-geo-alt-fill"></i>
              Philippsthal (Werra), DE
            </li>
            <li>
              <i class="bi bi-link-45deg"></i>
              <BsLink class="text-decoration-none" :show-icon="false" text="lukasmueller.info" url="https://lukasmueller.info" />
            </li>
          </ol>
        </Section>
        <Section title="Fähigkeiten">
          <BsProgressbar label="VB.NET/C#" value="50" />
          <BsProgressbar label="SQL (MySQL/MSSQL)" value="60" />
          <BsProgressbar label="JavaScript" value="50" />
          <BsProgressbar label="EF Core" value="50" />
        </Section>
        <Section title="Ausbildung">
          <Education />
        </Section>
        <Section title="Credits">

        </Section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Header from "./components/Header.vue";
import Section from "./components/Section.vue";
import BsProgressbar from "./components/bsProgressbar.vue";
import Education from "./components/Education.vue";
import Projects from "./components/Projects.vue";
import { onBeforeMount, watch } from "vue";
import BsLink from "./components/bsLink.vue";

import { useDarkmode } from "./helper/useDarkmode"

const {isDarkmode} = useDarkmode();

watch(isDarkmode, (newValue: Boolean, oldValue: Boolean) => {
  let cssClass = newValue ? "bg-dark-2" : "bg-light-2"
  document.querySelector("body")!.classList.value = cssClass
})

</script>