<script setup lang="ts">
import { Ref } from 'vue';

const mainStore = useMainStore();

const headerSection = ref<HTMLElement>();
const descSection = ref<HTMLElement>();
const podcastSection = ref<HTMLElement>();
const areopagusSection = ref<HTMLElement>();

const bgSections: {
  backgroundColor: string;
  trigger: Ref<HTMLElement | undefined>;
  rootMargin?: string
  threshold?: number | number[]
}[] = [
    {
      backgroundColor: '#0F6CAF',
      trigger: headerSection,
    },
    { backgroundColor: '#5B14CE', trigger: descSection },
    { backgroundColor: '#1547A8', trigger: podcastSection },
    { backgroundColor: '#FFFFFF', trigger: areopagusSection, threshold: 0.5 },
  ];

bgSections.forEach(({ backgroundColor, trigger, rootMargin = '0px 0px 0px 0px', threshold = 0.0 }) => {
  useIntersectionObserver(trigger, ([{ isIntersecting, }]) => {
    if (isIntersecting) mainStore.value.bgColor = backgroundColor;
  }, { rootMargin, threshold });
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

    <!---- AREOPAGUS SECTION ----->
    <lazy-home-areopagus-section ref="areopagusSection" />
  </div>
</template>
