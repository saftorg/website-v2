<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import gsap from 'gsap';
import { PropType } from 'vue';

const props = defineProps({
  suspenseState: Boolean as PropType<boolean | null>,
});

const mainStore = useMainStore();
const links: {
  title: string, ref: string
}[] = [
    { title: "Home", ref: "/", },
    { title: "About", ref: "/about", },
    { title: "Podcast", ref: "/podcast", },
    { title: "Areopagus", ref: "/areopagus", },
  ];
const currentPage = ref(useRoute().path);

const isMobile = useBreakpoints(breakpointsTailwind).smaller('md');
const isMenuAnimating = ref(false);
const isDark = ref(true);
const isBgLight = computed(() => mainStore.value.bgColor === "#FFFFFF");

const overlayPath = ref<HTMLElement>();
const menuLinks = ref<HTMLElement>();
const bodyRef = ref<HTMLElement>();

const openMenu = () => {
  if (isMenuAnimating.value) return;

  mainStore.value.isMenuOpen = true;
  isDark.value = false;
  isMenuAnimating.value = true;

  const onComplete = () => {
    isMenuAnimating.value = false;
  };
  const tl = gsap
    .timeline()
    .set(overlayPath.value!, {
      attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
    })

  if (isMobile.value) {
    tl
      .to(overlayPath.value!, {
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: 'M 0 0 V 70 Q 50 80 100 70 V 0 z' },
      })
      .to(overlayPath.value!, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
      })
      .to(
        menuLinks.value!.querySelectorAll('.menu-link'),
        {
          duration: 0.8,
          ease: 'power3.out',
          y: 0,
          rotate: 0,
          stagger: 0.05,
        },
        0.7
      )
  } else {
    tl
      .to(overlayPath.value!, {
        duration: 0.8,
        ease: 'power4.out',
        attr: { d: 'M 0 0 V 50 Q 50 70 100 50 V 0 z' },
      })
      .to(
        menuLinks.value!.querySelectorAll('.menu-link'),
        {
          duration: 0.8,
          ease: 'power3.out',
          y: 0,
          rotate: 0,
          stagger: 0.05,
        },
        0.2
      )
      .fromTo(
        bodyRef.value!,
        {
          backdropFilter: 'blur(0px)'
        },
        {
          backdropFilter: 'blur(64px)',
          duration: 1,
        },
        0
      );
  }

  tl.to(
    '#menu-1',
    { y: '0.6vh', rotate: -45, ease: 'power2.out', duration: 0.2 },
    0
  )
    .to(
      '#menu-2',
      { y: '-0.6vh', rotate: 45, ease: 'power2.out', duration: 0.2 },
      0
    )
    .eventCallback('onComplete', onComplete);
};


const closeMenu = () => {
  if (isMenuAnimating.value) return;

  isMenuAnimating.value = true;
  const onComplete = () => {
    isDark.value = true;
    isMenuAnimating.value = false;
    mainStore.value.isMenuOpen = false;
  };
  const tl = isMobile.value
    ? gsap
      .timeline()
      .set(overlayPath.value!, {
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
      })
      .to(overlayPath.value!, {
        duration: 0.2,
        ease: 'power3.in',
        attr: { d: 'M 0 0 V 70 Q 50 60 100 70 V 0 z' },
      })
      .to(overlayPath.value!, {
        duration: 0.2,
        ease: 'power2',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        onComplete,
      })
    : gsap
      .timeline()
      .set(overlayPath.value!, {
        attr: { d: 'M 0 0 V 50 Q 50 70 100 50 V 0 z' },
      })
      .to(overlayPath.value!, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        onComplete,
      })
      .to(
        bodyRef!.value,
        {
          backdropFilter: 'blur(0px)'
        },
        0
      );
  tl.to('#menu-1', { y: 0, rotate: 0, ease: 'power2.out', duration: 0.2 }, 0)
    .to('#menu-2', { y: 0, rotate: 0, ease: 'power2.out', duration: 0.2 }, 0)
    .to(
      menuLinks.value!.querySelectorAll('.menu-link'),
      {
        duration: 0.3,
        ease: 'power3.out',
        y: '-150%',
        rotate: -3,
        stagger: { each: 0.05, from: 'end' },
      },
      0
    )
};

watch(() => props.suspenseState, () => {
  if (props.suspenseState === true) {
    isDark.value = false;
  } else {
    isDark.value = true;
  }
})

</script>

<template>
  <div>
    <svg class="fixed w-full h-full pointer-events-none z-[49]" :class="{
      'fill-white': !isBgLight,
      'fill-[#01124F]': isBgLight
    }" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path id="overlay-path" ref="overlayPath" vector-effect="non-scaling-stroke"
        d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
    </svg>

    <div class="
        grid
        fixed
        z-50
        grid-cols-12
        items-center
        mx-auto
        w-screen
        transition
        duration-300
        py-[2vh]
        bg-opacity-[0.1]
        backdrop-blur-3xl
      " :class="{
        'bg-white': !isBgLight,
        'bg-[#01124F]': isBgLight,
        'text-white': (isDark || !isBgLight) && (!isDark || isBgLight),
        'text-[#01124F]': (!isDark || isBgLight) && (isDark || !isBgLight),
        '-translate-y-[7vh]': !mainStore.isMenuVisible,
      }">
      <saft-logo class="
          hidden
          col-span-full
          row-start-1
          mx-auto
          fill-current
          md:block
          w-[12vw]
        " />

      <svg class="
          block
          col-span-full
          row-start-1
          mx-auto
          fill-current
          md:hidden
          w-[11vw]
        " viewBox="0 0 293 272">
        <path
          d="M 149 111 L 139 223 C 139 227 135 230 132 230 L 80 230 C 79 230 77 230 76 231 L 11 271 C 7 273 3 272 1 268 C 0 266 0 265 0 263 L 10 185 L 10 122 C 10 118 13 115 17 114 L 142 103 C 146 103 150 106 149 112 Z M 188 111 C 188 107 192 104 196 104 L 196 104 L 285 112 C 289 112 292 116 292 119 L 292 119 L 292 220 C 292 224 289 227 284 227 L 284 227 L 205 227 C 201 227 198 224 197 220 L 197 220 Z M 285 0 C 289 0 293 3 293 7 L 293 7 L 293 50 C 293 54 290 57 286 57 L 286 57 L 196 66 C 192 66 188 63 188 58 L 193 8 C 193 4 196 0 200 0 Z M 137 0 C 141 0 144 3 144 7 L 149 58 C 149 62 146 66 142 66 L 20 55 C 16 55 13 52 13 48 L 13 8 C 13 3 16 0 20 0 Z">
        </path>
      </svg>

      <button class="flex col-start-10 col-end-12 row-start-1 items-center w-full h-full cursor-pointer"
        @click="!mainStore.isMenuOpen ? openMenu() : closeMenu()">
        <div class="ml-auto md:mb-0 w-fit mb-[0.5vh]">
          <div id="menu-1" class="h-px bg-current origin-center w-[10vw] md:w-[2vw]"></div>
          <div id="menu-2" class="
              h-px
              bg-current
              origin-center
              mt-[1.2vh]
              w-[10vw]
              md:mt-[1vh] md:w-[2vw]
            "></div>
        </div>
      </button>
    </div>

    <nav id="menu-links" ref="menuLinks" class="
        fixed
        my-auto
        w-full
        pointer-events-none
        md:px-0 md:my-0 md:h-fit
        px-[3vw]
        h-[80vh]
        z-[51]
        translate-y-[22vh]
      " :class="{
        'text-white': isBgLight,
        'text-[#01124F]': !isBgLight,
      }">
      <div class="flex flex-col mx-auto w-fit md:flex-row md:space-x-[7vw]">
        <div class="overflow-hidden" v-for="{ title, ref } in links" :key="title">
          <div @click="currentPage = ref">
            <nuxt-link :to="ref" class="menu-link">
              {{ title }}
              <span :class="{ active: currentPage === ref }"></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>

    <div ref="bodyRef" class="w-screen h-screen fixed top-0 left-0 pointer-events-none">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-link {
  @apply block;
  @apply relative;
  transform: translate3d(0, -150%, 0) rotate(-3deg);
  @apply text-[15vw];
  @apply pointer-events-auto;
  @apply cursor-pointer;

  span {
    @apply absolute;
    @apply bg-current;
    @apply bottom-0;
    @apply left-0;
    @apply h-[2px];
    @apply w-full;
    @apply origin-bottom-right;
    @apply scale-x-0;
    @apply transition-transform;
    @apply ease-in-out;
    @apply duration-300;
  }

  &:hover span,
  span.active {
    @apply origin-bottom-left;
    @apply scale-x-100;
  }
}

@screen md {
  .menu-link {
    @apply text-[4vw];
  }
}
</style>
