<script setup lang="ts">
import { Ref } from 'vue';
import gsap from 'gsap';
import { ThreedCircle, LightBlueBlur, MediumPurpleBlur } from '~/images';

const mainStore = useMainStore();
const loading = ref<HTMLElement>();
const circleGroup = ref<HTMLElement>();

const loadIn = (isLocked: Ref<boolean>) => {
  const onCompleteLoad = () => {
    mainStore.value.isMenuVisible = true;
  };

  isLocked.value = true;

  gsap
    .timeline({
      onComplete() {
        isLocked.value = false;
      },
    })
    .to(loading.value!, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power4.out',
      autoRound: false,
      onComplete: onCompleteLoad,
    })
    .to(loading.value!, {
      strokeWidth: 0,
      duration: 0.8,
      ease: 'power4.out',
      autoRound: false,
    })
    .to(
      '.header-blob',
      {
        opacity: 1,
        duration: 4,
        ease: 'power2.out',
      },
      2.5
    )
    .fromTo(
      circleGroup.value!,
      { scale: 2, rotate: -35, opacity: 0 },
      {
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'expo.out',
        onComplete() {
          circleGroup.value!.classList.add('animate-spin-long');
        },
      },
      2.5
    )
    .to(
      '#tag-line span',
      {
        className: 'stretch',
        stagger: 0.6,
        duration: 2,
        ease: 'power2.inOut',
      },
      4
    );

  return;
};

tryOnMounted(() => {
  mainStore.value.isMenuVisible = false;
  const isLocked = useScrollLock(document.querySelector('html'));
  loadIn(isLocked);
});
</script>

<template>
  <section>
    <svg
      class="fixed w-full h-full pointer-events-none stroke-1 z-[49] fill-[none] stroke-white"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        ref="loading"
        class="[stroke-dasharray:1] [stroke-dashoffset:1]"
        pathLength="1"
        d="M 0 0 H 100 V 100 H 0 Z"
      />
    </svg>

    <header
      ref="headerSection"
      class="grid relative w-screen h-screen pointer-events-none isolate z-[-1]"
    >
      <img
        :src="MediumPurpleBlur"
        class="header-blob absolute top-[-30vh] left-[-40vw] md:top-[-50vh] z-[-1] md:-left-[30vw] w-[150%] md:w-[90%] opacity-0"
      />

      <img
        :src="LightBlueBlur"
        class="header-blob absolute z-[-1] top-[40vh] left-[50vw] w-[150%] md:w-[90%] opacity-0"
      />

      <h1
        id="tag-line"
        class="place-self-center"
        data-scroll
        data-scroll-speed="-2"
      >
        Equipping the <span>believer</span> to <span>defend</span> their
        <span>faith</span><br />
        <span>anytime, anywhere</span>.
      </h1>

      <div
        ref="circleGroup"
        class="grid absolute h-screen w-screen pointer-events-none aspect-square z-[-1] md:grid-cols-6 md:grid-rows-6 md:aspect-none"
      >
        <img
          :src="ThreedCircle"
          alt="3d-circle"
          class="col-start-2 row-start-6 threed-circle big"
        />
        <img
          :src="ThreedCircle"
          alt="3d-circle"
          class="col-start-2 row-start-5 place-self-end threed-circle small"
        />
        <img
          :src="ThreedCircle"
          alt="3d-circle"
          class="col-start-6 row-start-3 threed-circle rotate-[-130] big"
        />
        <img
          :src="ThreedCircle"
          alt="3d-circle"
          class="col-start-5 row-start-3 justify-self-end self-start threed-circle rotate-[-135] small"
        />
      </div>
    </header>
  </section>
</template>

<style lang="scss" scoped>
.threed-circle {
  @apply relative;

  &.big {
    @apply w-[32vw];
  }

  &.small {
    @apply w-[12vw];
  }
}

#tag-line {
  @apply text-[8vw] leading-9 mx-auto;
  font-family: 'Joyride VF';

  span {
    @apply transition-all;
    @apply ease-in-out-expo;
    @apply duration-1000;
    font-variation-settings: 'wdth' 100;

    &.stretch {
      font-variation-settings: 'wdth' 115;
    }
  }
}

.animate-spin-long {
  animation: spin 60s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
}

@screen md {
  #tag-line {
    @apply text-[3.5vw] w-[80vw] leading-none;
  }

  .threed-circle {
    @apply relative;

    &.big {
      @apply w-[17vw];
    }

    &.small {
      @apply w-[6vw];
    }
  }
}
</style>
