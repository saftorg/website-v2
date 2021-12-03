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
      <div data-scroll class="wrapper mt-f-9">
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
          class="object-cover h-full md:col-start-2 md:col-end-6"
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
          class="object-cover h-full md:col-start-5 md:col-end-9"
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
          class="object-cover h-full md:col-start-1 md:col-end-5"
        />
      </div>
      <div data-scroll data-scroll-speed="2.6" class="wrapper -mt-f-48">
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
      <div class="wrapper -mt-f-96 mb-f-96">
        <h2 class="md:col-start-[15] md:col-end-[24]">
          Sagittis nulla congue duis rutrum ultricies massa. Vitae, semper cras
          ut orci, integer massa mauris.
        </h2>
      </div>
      <div v-for="i in 3">
        <h3
          data-scroll
          data-scroll-direction="horizontal"
          :data-scroll-speed="1 + i * 0.1"
          class="text-f-4xl overflow-visible w-max -ml-f-12"
        >
          {{ 'SEEKING ANSWERS FINDING TRUTH '.repeat(6) }}
        </h3>
        <h3
          data-scroll
          data-scroll-direction="horizontal"
          :data-scroll-speed="-1 - i * 0.1"
          class="text-f-4xl overflow-visible w-max -ml-f-12 font-joyride-out"
        >
          {{ 'SEEKING ANSWERS FINDING TRUTH '.repeat(6) }}
        </h3>
      </div>
      <div class="h-screen"></div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
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
</style>
