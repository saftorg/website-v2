<script setup lang="ts">
import { Ref } from 'vue';

const mainStore = useMainStore();

const headerSection = ref<HTMLElement>();
const descSection = ref<HTMLElement>();
const podcastSection = ref<HTMLElement>();

const bgSections: {
  backgroundColor: string;
  trigger: Ref<HTMLElement | undefined>;
}[] = [
  {
    backgroundColor: '#0F6CAF',
    trigger: headerSection,
  },
  { backgroundColor: '#5B14CE', trigger: descSection },
  { backgroundColor: '#1547A8', trigger: podcastSection },
];

bgSections.forEach(({ backgroundColor, trigger }) => {
  useIntersectionObserver(trigger, ([{ isIntersecting }]) => {
    if (isIntersecting) mainStore.value.bgColor = backgroundColor;
  });
});
</script>

<template>
  <div class="scroller">
    <!---- HEADER SECTION ----->
    <home-header-section ref="headerSection" />

    <!---- DESCRIPTION SECTION ----->
    <lazy-home-desc-section ref="descSection" />

    <!---- PODCAST SECTION ----->
    <lazy-home-podcast-section ref="podcastSection" />
  </div>
</template>
