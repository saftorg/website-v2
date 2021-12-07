<script setup lang="ts">
import SlideRevealText from 'components/SlideRevealText.vue'
</script>
<template>
  <main id="home">
    <div
      id="head-section"
      class="overflow-hidden place-content-center h-screen text-white hero wrapper"
    >
      <slide-reveal-text
        as="h1"
        data-scroll
        class="col-start-1 col-end-13 md:col-end-[16]"
        :appear-once="true"
      >
        Seeking Answers, Finding Truth.
      </slide-reveal-text>
      <p class="row-start-2 w-[80vw] md:w-screen">
        We are a web-based Christian initiative that aims to equip the believer
        defend their faith so that they may effectively evangelise.
      </p>
      <div class="row-start-3 flex space-x-f-14 mt-[5.5vw] md:mt-f-10">
        <a href="#" class="button p">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
              fill="currentColor"
            />
          </svg>
          Listen
        </a>
        <a href="#" class="button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 12.3301L9 16.6603L9 8L15 12.3301Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>

    <div id="about-section" class="min-h-screen text-white mt-f-96">
      <div class="wrapper mt-f-9">
        <h1 class="col-start-1 col-end-12 lowercase md:col-end-10">About Us</h1>
        <p class="col-start-1 col-end-12 md:col-end-10 mt-f-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl,
          tempus, eget non interdum ipsum, nascetur scelerisque semper. Urna
          quam consequat ultrices commodo cursus cursus eu. A sollicitudin at
          massa vitae aliquet et tortor. Sapien, phasellus auctor non commodo.
        </p>
      </div>

      <div
        data-scroll
        data-scroll-speed="1"
        class="overflow-hidden wrapper -mt-f-80"
      >
        <img
          src="../assets/ep-62.jpg"
          alt="Episode"
          class="md:col-start-[12] md:col-end-[23]"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="3"
        class="overflow-hidden wrapper -mt-f-60"
      >
        <img
          src="../assets/Event-Poster.png"
          alt="Episode"
          class="md:col-start-[18] md:col-end-[24]"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="1"
        class="overflow-hidden wrapper h-f-96 -mt-f-40"
      >
        <img
          src="../assets/jacob-varghese.jpg"
          alt="Episode"
          class="md:col-start-2 md:col-end-6 img"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="1.6"
        class="overflow-hidden wrapper h-f-96 -mt-f-52"
      >
        <img
          src="../assets/ankit-nayak.jpg"
          alt="Episode"
          class="md:col-start-5 md:col-end-9 img"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="2"
        class="overflow-hidden wrapper h-f-96 -mt-f-48"
      >
        <img
          src="../assets/steven-john.jpg"
          alt="Episode"
          class="md:col-start-1 md:col-end-5 img"
        />
      </div>
      <div data-scroll data-scroll-speed="2.6" class="wrapper -mt-f-48 zoom-in">
        <a
          class="flex relative justify-center content-center md:col-start-4 md:col-end-10"
          ><div
            class="
              relative
              -top-1/2
              border
              rounded-[50%]
              h-f-48
              w-screen
              -rotate-12
            "
          ></div>
          <p class="absolute -top-f-3.5">Meet the team</p></a
        >
      </div>
      <div class="wrapper -mt-f-96 mb-[24vw]">
        <h2 class="md:col-start-[15] md:col-end-[24]">
          Sagittis nulla congue duis rutrum ultricies massa. Vitae, semper cras
          ut orci, integer massa mauris.
        </h2>
      </div>

      <div class="wrapper">
        <div class="col-start-1 col-end-8 bg-gray-50 py-f-6 -rotate-3">
          <h2 class="font-joyride uppercase text-gray-900 w-max mx-auto text-f-3xl">Endorsements</h2>
        </div>
      </div>

      <div class="slider" data-butter-container="plip">
        <div
          class="slides"
          data-butter-slidable="plip"
          data-butter-plip-options="dragSpeed:2,smoothAmount:0.1"
        >
          <div class="slide" v-for="i in 4" :key="i">
            <img src="../assets/alisa-childers.jpg" />
            <h3>Alisa Childers</h3>
            <h4>Another Gospel?</h4>
            <p>
              Lectus vitae mattis aliquam lorem. Iaculis vestibulum nunc eros,
              suscipit magna et erat at. Laoreet lacus, vel sit adipiscing massa
              egestas justo molestie odio.
            </p>
          </div>
        </div>
      </div>

      <div class="wrapper mt-f-44"></div>
      <div class="relative my-f-96">
        <div class="absolute inset-x-0 top-0 z-10 wrapper">
          <div
            class="bg-gray-50 md:col-start-[6] md:col-end-[18] h-f-80 -rotate-2"
          ></div>
        </div>
        <div class="absolute inset-0 z-20 wrapper">
          <p
            class="
              md:col-start-[7] md:col-end-[17]
              self-center
              text-gray-800
              h3
              uppercase
              text-center text-f-4xl
            "
          >
            Equipping the <span class="font-joyride-wide">believer</span> to
            <span class="font-joyride-wide">defend</span> their
            <span class="font-joyride-wide">faith </span>
            <span class="font-joyride-ext">anytime, anywhere.</span>
          </p>
        </div>
        <div v-for="i in 4" :key="i">
          <h3
            data-scroll
            data-scroll-direction="horizontal"
            :data-scroll-speed="1 + i * 0.1"
            class="overflow-visible w-max text-f-4xl -ml-f-12"
          >
            {{ 'SEEKING ANSWERS FINDING TRUTH '.repeat(6) }}
          </h3>
          <h3
            data-scroll
            data-scroll-direction="horizontal"
            :data-scroll-speed="-1 - i * 0.1"
            class="overflow-visible w-max text-f-4xl -ml-f-12 font-joyride-out"
          >
            {{ 'SEEKING ANSWERS FINDING TRUTH '.repeat(6) }}
          </h3>
        </div>
      </div>
      <div class="wrapper mt-f-32"></div>
    </div>

    <div id="podcast-section" class="text-white mt-f-24">
      <div data-scroll class="wrapper mt-f-9">
        <h1 class="col-start-1 col-end-12 lowercase md:col-end-10">Podcast</h1>
        <p class="col-start-1 col-end-12 md:col-end-8 mt-f-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl,
          tempus, eget non interdum ipsum, nascetur scelerisque semper. Urna
          quam consequat ultrices commodo cursus cursus eu. A sollicitudin at
          massa vitae aliquet et tortor. Sapien, phasellus auctor non commodo.
        </p>
      </div>
      <div
        data-scroll
        data-scroll-speed="1"
        class="overflow-hidden wrapper h-[24vw] -mt-f-96"
      >
        <img
          src="../assets/william-lane-craig.jpg"
          alt="Episode"
          class="md:col-start-11 md:col-end-[16] img"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="1.5"
        class="overflow-hidden wrapper h-[24vw] -mt-f-96"
      >
        <img
          src="../assets/frank-turek.jpg"
          alt="Episode"
          class="md:col-start-[15] md:col-end-[20] img"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="2.2"
        class="overflow-hidden wrapper h-f-96 mt-[-28vw]"
      >
        <img
          src="../assets/sean-mcdowell.jpg"
          alt="Episode"
          class="md:col-start-[19] md:col-end-[23] img"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="2.2"
        class="overflow-hidden wrapper h-f-96 mt-f-9"
      >
        <img
          src="../assets/alisa-childers.jpg"
          alt="Episode"
          class="md:col-start-[12] md:col-end-[16] img"
        />
      </div>
      <div data-scroll data-scroll-speed="2.6" class="wrapper -mt-f-60">
        <a
          class="
            flex
            relative
            justify-center
            content-center
            md:col-start-[17] md:col-end-[23]
          "
          ><div
            class="
              relative
              -top-1/2
              border
              rounded-[50%]
              h-f-48
              w-screen
              -rotate-12
            "
          ></div>
          <p class="absolute -top-f-3.5">Meet our guests</p></a
        >
      </div>
    </div>
    <div id="areopagus-section" class="h-screen"></div>
  </main>
</template>

<style lang="scss" scoped>
.img {
  @apply object-cover;
  @apply h-full;
  @apply w-full;
}

.button {
  @apply flex;
  @apply border-[2px];
  @apply px-f-7;
  @apply py-f-3;
  @apply font-joyride;
  @apply uppercase;
  @apply items-center;

  & > svg {
    @apply mr-f-1.5;
    @apply w-[8vw];
    @apply md:w-f-10;
  }
}

.slider {
  @apply w-screen;
  @apply overflow-x-hidden;

  .slides {
    @apply flex;
    @apply overflow-x-visible;
    @apply space-x-f-32;
    will-change: transform;
    cursor: grab;

    &.active {
      cursor: grabbing;
    }

    .slide {
      @apply border;
      @apply border-white;
      @apply py-f-14;
      @apply pr-f-16;
      @apply select-none;
      @apply grid;
      @apply grid-rows-[repeat(3,max-content)];
      @apply grid-cols-[max-content,auto];

      &:first-of-type {
        @apply ml-f-40;
      }

      &:last-of-type {
        @apply mr-f-44;
      }

      img {
        @apply w-f-80;
        @apply h-[110%];
        @apply object-cover;
        @apply -ml-f-5;
        @apply row-span-full;
        @apply col-start-1;
        @apply self-center;
      }

      h3 {
        @apply row-start-1;
        @apply text-f-6xl;
        @apply mb-f-5;
      }

      h4 {
        @apply row-start-2;
        @apply font-semibold;
        @apply mb-f-12;
        @apply text-f-3xl;
      }

      p {
        @apply text-f-xl;
      }
    }
  }
}
</style>
