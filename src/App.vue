<script setup>
import Header from "./components/Header.vue";
import Candidate from "./components/Candidate.vue";
import LatestEvent from "./components/LatestEvent.vue";
import PolicyIssues from "./components/PolicyIssues.vue";
import Donated from "./components/Donated.vue";
import Mail from "./components/Mail.vue";
import Footer from "./components/Footer.vue";

import { ref, onMounted } from "vue";

const headerRef = ref(null);

const latestEventRef = ref(null);

onMounted(() => {
  // 這是要監聽的新聞區塊

  console.log(latestEventRef.value.targetElement);

  const observer = new IntersectionObserver(callback, {
    threshold: 0.9,
  });
  observer.observe(latestEventRef.value.targetElement);
});

const callback = (entries, observer) => {
  console.log(entries);

  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log("visible");
    } else {
      console.log("88");
    }
  });
};
</script>

<template>
  <Header ref="headerRef" />
  <Candidate />
  <LatestEvent ref="latestEventRef" />
  <PolicyIssues />
  <Donated />
  <Mail />
  <Footer />
</template>

<style></style>
