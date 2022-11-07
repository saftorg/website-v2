<script setup lang="ts">
import {
  ThreedCircle,
  LightBlueBlur,
  MediumPurpleBlur,
  DownArrow,
} from '~/images';

const landmarks: {
  title: string;
  ref: string;
}[] = [
  { title: 'What we pursue', ref: '#pursue' },
  { title: 'Who we are', ref: '#we-are' },
  { title: 'Endorsements', ref: '#endorsements' },
  { title: 'Statement of Faith', ref: '#faith' },
];
</script>

<template>
  <div>
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
        About us
      </h1>

      <div class="w-[80vw] grid md:grid-cols-2 md:grid-rows-1">
        <p>Scroll down or navigate to...</p>
        <div class="grid">
          <a
            class="border-b border-white text-[5vw] md:text-[1.1vw] text-left flex items-center"
            v-for="{ title, ref } in landmarks"
            :key="ref"
            :href="ref"
            >{{ title }}
            <img
              :src="DownArrow"
              class="ml-auto"
              alt="arrow"
          /></a>
        </div>
      </div>

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
  </div>
</template>

<style lang="scss" scoped>
#tag-line {
  @apply text-[8vw] leading-9 mx-auto;
}

.threed-circle {
  @apply relative;

  &.big {
    @apply w-[32vw];
  }

  &.small {
    @apply w-[12vw];
  }
}

@screen md {
  #tag-line {
    @apply text-[10.5vw] w-[80vw] leading-none;
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
