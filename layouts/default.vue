<script setup lang="ts">
import gsap from 'gsap';

const mainStore = useMainStore();
const bodyRef = ref<HTMLElement>();
const isPageLoading = ref<null | true | false>(null);

useParallaxScroll();

tryOnMounted(() => {
  document.querySelector('body')!.style.backgroundColor =
    mainStore.value.bgColor;
});

const leaveFunction = (_: Element, done: () => void) => {
  const overlayPath = document.querySelector('#overlay-path');
  const menuLinks = document.querySelector('#menu-links');

  isPageLoading.value = true;

  gsap
    .timeline({ onComplete: done })
    .set(
      bodyRef.value,
      {
        filter: 'blur(0px)',
      },
      0
    )
    .to(overlayPath, {
      duration: 0.3,
      ease: 'power2',
      attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
    })
    .to('#menu-1', { y: 0, rotate: 0, ease: 'power2.out', duration: 0.2 }, 0)
    .to('#menu-2', { y: 0, rotate: 0, ease: 'power2.out', duration: 0.2 }, 0)
    .to(
      menuLinks.querySelectorAll('.menu-link'),
      {
        duration: 0.3,
        ease: 'power3.out',
        y: '-150%',
        rotate: -3,
        stagger: { each: 0.05, from: 'end' },
      },
      0
    );
}

const enterFunction = (_: Element, done: () => void) => {
  const overlayPath = document.querySelector('#overlay-path');

  gsap
    .timeline({
      onComplete() {
        isPageLoading.value = false;
        mainStore.value.isMenuOpen = false;
        done();
      }
    })
    .set(overlayPath, {
      attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
    })
    .to(overlayPath, {
      duration: 0.2,
      ease: 'power3.in',
      attr: { d: 'M 0 0 V 70 Q 50 60 100 70 V 0 z' },
    })
    .to(overlayPath, {
      duration: 0.2,
      ease: 'power2',
      attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
    })
}

const log = console.log;
</script>

<template>
  <main class="text-center text-white">
    <navbar :suspense-state="isPageLoading" />

    <div class="
        fixed
        z-[-1]
        w-screen
        h-screen
        top-0
        left-0
        bg-[#0F6CAF]
        pointer-events-none
        transition
        duration-500
      " :style="{ backgroundColor: mainStore.bgColor }">
      <div id="noise"></div>
    </div>

    <div ref="bodyRef" class="overflow-x-hidden relative top-0 left-0 w-screen">
      <router-view v-slot="{ Component }">
        <transition mode="out-in" @enter="enterFunction" @leave="leaveFunction">
          <component :is="Component" />
        </transition>
      </router-view>
      <Footer :class="{
        'text-white fill-white': mainStore.isDark,
        'text-[#01124F] fill-[#01124F]': !mainStore.isDark,
      }" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
#noise {
  background: url('~/assets/noise.svg') repeat;
  @apply w-full;
  @apply h-full;
  @apply mix-blend-multiply;
}
</style>
