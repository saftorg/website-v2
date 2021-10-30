<script setup lang="ts">
const random = (start: number, end: number) =>
  Math.floor(Math.random() * (end - start)) + start

const randomGen = () => random(-100, 100)
const menu = useStore(isMenuOpen)

if (!menu.value) {
  useIntervalFn(() => {
    Array.from(document.querySelectorAll('.circle')).map((el) => {
      el.setAttribute(
        'style',
        `transform: translateX(${randomGen()}%) translateY(${randomGen()}%);`
      )
    }, 15000)
  })
}

import ParallaxMedia from 'components/ParallaxMedia.vue'
import SlideRevealText from 'components/SlideRevealText.vue'
import { useIntervalFn } from '@vueuse/core'
import { isMenuOpen } from '../store'
import { useStore } from '@nanostores/vue'
</script>

<template>
  <div
    class="top-0 px-0 hero h-screen grid grid-rows-[max-content,auto] overflow-hidden"
  >
    <div class="relative -m-4 col-span-full row-span-full z-[-1]">
      <div
        class="bg-blue-100/40 backdrop-blur-3xl absolute inset-0 z-[1]"
      ></div>
      <div class="relative xl:w-[Min(1200px,100%)] xl:mx-auto h-full">
        <div class="circle top-[-20%] left-[-12%] bg-blue-400"></div>
        <div class="circle top-1/2 left-[10%] bg-indigo-300"></div>
        <div class="circle top-[40%] right-[10%] bg-blue-300"></div>
        <div class="circle top-[-30%] right-[25%] bg-[#EA7FED]"></div>
        <div class="circle bottom-[-30%] left-0 bg-[#EA7FED]"></div>
        <div class="circle top-[-10%] right-[-20%] bg-green-300"></div>
      </div>
    </div>
    <div
      class="flex col-span-full row-start-1 place-self-center pt-10 space-x-4"
    >
      <svg
        class="h-12 fill-current"
        viewBox="0 0 600 566"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M311.206365,230.182669 C311.28819,231.109841 311.286839,232.042481 311.202321,232.969414 L290.024813,465.232255 C289.292636,473.262452 282.559067,479.410009 274.495562,479.41004 L166.544433,479.410425 C163.695771,479.410435 160.901542,480.190766 158.465064,481.666712 L23.6731813,563.319644 C16.3071206,567.781789 6.71846529,565.427698 2.2563204,558.061637 C0.427290617,555.042297 -0.323141886,551.491699 0.127745524,547.990491 L20.9737096,386.118148 C21.0587682,385.45765 21.1014327,384.79239 21.1014327,384.126434 L21.1014327,254.407888 C21.1014327,246.326969 27.2747292,239.584896 35.3243564,238.874529 L294.302214,216.020104 C302.881051,215.263039 310.4493,221.603833 311.206365,230.182669 Z M387.409383,230.579415 C388.191544,222.002834 395.778307,215.684204 404.354899,216.466365 L404.354899,216.466365 L585.822506,233.015738 C593.852599,233.748061 600,240.481608 600,248.545021 L600,248.545021 L600,463.825088 C600,472.437264 593.01846,479.418814 584.406273,479.418814 L584.406273,479.418814 L424.328186,479.418814 C416.271094,479.418814 409.540645,473.28076 408.80041,465.257746 L408.80041,465.257746 L387.41089,233.428306 C387.323462,232.480706 387.322952,231.527098 387.409383,230.579415 Z M584.406273,0 C593.01846,0 600,6.98155054 600,15.5937267 L600,15.5937267 L600,108.093478 C600,116.148064 593.865636,122.877298 585.845418,123.620651 L585.845418,123.620651 L404.263904,140.450638 C403.309215,140.539127 402.348402,140.539377 401.393671,140.451386 C392.817838,139.661024 386.506465,132.068209 387.296838,123.492377 L387.296838,123.492377 L397.372901,14.1626384 C398.112387,6.13894872 404.843128,0 412.900822,0 L412.900822,0 L584.406273,0 Z M285.795441,0 C293.860673,0 300.595104,6.15009303 301.325151,14.1822137 L311.253832,123.419669 C312.033383,131.996489 305.712456,139.581329 297.135626,140.36088 C296.212571,140.444785 295.283881,140.44622 294.360576,140.365174 L35.3412912,117.628938 C27.2885452,116.922075 21.1111112,110.17864 21.1111112,102.094935 L21.1111112,15.5937267 C21.1111112,6.98155054 28.0926617,0 36.7048378,0 L285.795441,0 Z"
          fill-rule="nonzero"
        />
      </svg>
      <slide-reveal-text
        as="h2"
        class="hidden md:block leading-[1.32rem] uppercase"
        :delay="1"
      >
        SAFT
        <br />Apologetics
      </slide-reveal-text>
    </div>
    <div
      class="container flex flex-wrap grid-cols-2 col-span-full row-start-2 items-center place-content-center my-14 space-y-10 md:grid md:my-40 md:space-x-16"
    >
      <parallax-media class="w-full">
        <img
          srcset="
            ../assets/head_photo@600w.webp  400w,
            ../assets/head_photo@1000w.webp 600w
          "
          sizes="(max-width: 1024px) 400px, 600px"
          src="../assets/head_photo@1000w.png"
          alt="Head Image"
        />
      </parallax-media>
      <div>
        <slide-reveal-text
          as="h1"
          class="leading-10"
          :delay="1.2"
          :appear-once="true"
        >
          Seeking Answers, Finding Truth.
        </slide-reveal-text>
        <p class="mt-4 max-w-[45ch] text-lg">
          We are a web-based Christian initiative that aims to equip the
          believer defend their faith so that they may effectively evangelise.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  filter: blur(64px);
  width: Max(40vw, 30rem);
  height: Max(40vw, 30rem);
  transition-duration: 15s;
  will-change: transform;
  @apply transform;
  @apply ease-linear;
  @apply absolute;
  @apply rounded-full;
  @apply mix-blend-multiply;
}
</style>
