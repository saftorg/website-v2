<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

import podThumb1 from '~/assets/pod-thumb-1.jpg';
import podThumb2 from '~/assets/pod-thumb-2.png';
import podThumb3 from '~/assets/pod-thumb-3.png';
import podThumb4 from '~/assets/pod-thumb-4.jpg';
import podThumb5 from '~/assets/pod-thumb-5.jpg';
import podThumb6 from '~/assets/pod-thumb-6.jpg';

import FrankTurek from '~/assets/frank-turek-body-shot.png';
import AlisaChilders from '~/assets/alisa-childers-body-shot.png';
import Wlc from '~/assets/wlc-body-shot.png';

import ApplePodcasts from '~/assets/apple-podcasts.png';
import GooglePodcasts from '~/assets/google-podcasts.png';
import SpotifyPodcasts from '~/assets/spotify-podcasts.png';
import YoutubePodcasts from '~/assets/youtube-podcasts.png';

const podDesc = ref<HTMLElement>();

const podcastThumbnails: {
  src: any;
  style: string;
}[] = [
    { src: podThumb1, style: 'rotate-3 -translate-y-[2vw]' },
    { src: podThumb2, style: '-rotate-3 -translate-x-[8vw] translate-y-[2vw]' },
    { src: podThumb3, style: 'rotate-3 -translate-x-[14vw] -translate-y-[2vw]' },
    { src: podThumb4, style: '-rotate-3 -translate-x-[20vw] translate-y-[2vw]' },
    { src: podThumb5, style: 'rotate-3 -translate-x-[26vw] -translate-y-[2vw]' },
    { src: podThumb6, style: '-rotate-3 -translate-x-[32vw] translate-y-[2vw]' },
    {
      src: podThumb1,
      style: 'rotate-3 -translate-x-[38vw]  -translate-y-[2vw]',
    },
    { src: podThumb2, style: '-rotate-3 -translate-x-[46vw] translate-y-[2vw]' },
    { src: podThumb3, style: 'rotate-3 -translate-x-[52vw] -translate-y-[2vw]' },
    { src: podThumb4, style: '-rotate-3 -translate-x-[58vw] translate-y-[2vw]' },
    { src: podThumb5, style: 'rotate-3 -translate-x-[62vw] -translate-y-[2vw]' },
    { src: podThumb6, style: '-rotate-3 -translate-x-[68vw] translate-y-[2vw]' },
  ];

tryOnMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    '#marquee-pod-images',
    { x: '-25%' },
    { x: '-167%', repeat: -1, duration: 18, ease: 'linear' }
  );

  gsap.to('#marquee-pod-images', {
    x: '-=30%',
    scrollTrigger: { trigger: '#marquee-pod-images', scrub: 0.5 },
  });
});

useLineRevealAnimation('#pod-desc');
useLineRevealAnimation('#guests');
useLineRevealAnimation('#all-platforms');
</script>

<template>
  <section class="mt-[10vh] wrapper">
    <h1 class="col-span-full">Podcast</h1>

    <div class="col-span-full mt-[-1vw]" data-scroll data-scroll-speed="-2" data-scroll-speed-mobile="-0.5"
      data-scroll-start="top 100%">
      <div id="marquee-pod-images" class="flex">
        <img class="w-[30vw]" v-for="({ src, style }, i) in podcastThumbnails" :src="src" :key="i + src" alt=""
          :class="style" />
      </div>
    </div>
    <p id="pod-desc" class="col-start-2 md:col-start-6 col-end-15 md:col-end-19">
      On our biweekly SAFT Podcast we bring to the listener casual, bite sized
      conversations on key apologetics topics. Over the course of 60+ episodes,
      we’ve featured some of the leading voices in Christian philosophy,
      theology and apologetics. SAFT Podcast is now available across 19
      platforms and is heard across 60+ countries and 6 continents.
    </p>
    <oval-button class="
        col-start-2
        row-start-4
        mt-[5vw]
        mb-[6vw]
        md:mt-0
        col-end-15
        md:col-start-17 md:col-end-22
      ">Learn about our podcast
    </oval-button>
    <div class="row-start-5 wrapper mt-[6vw] md:mt-[12vw]">
      <h2 id="guests" class="
          col-start-2
          row-start-1
          text-left
          md:col-span-5 md:col-start-4 md:mb-0
          mb-[12vw]
          col-end-15
        ">
        Here are some of the <span class="font-serif italic">guests</span> on
        our podcast
      </h2>
      <img class="col-start-6 row-start-2 md:col-span-12 md:row-start-1 col-end-16 md:col-start-17" data-scroll
        data-scroll-speed="-2" data-scroll-speed-mobile="-0.5" data-scroll-start="top 100%" :src="Wlc"
        alt="William Lane Craig" />
      <img class="
          col-start-1
          row-start-2
          md:col-span-12 md:col-start-10 md:row-start-1
          col-end-16
          md:ml-0
          ml-[-8vw]
        " data-scroll data-scroll-speed="-3" data-scroll-speed-mobile="-1" data-scroll-start="top 100%"
        :src="FrankTurek" alt="Frank Turek" />
      <img class="
          row-start-2
          col-start-3 col-end-14
          md:col-span-8 md:col-start-14 md:row-start-1 md:mt-[17vw]
          mt-[22vw]
        " data-scroll data-scroll-speed="-5" data-scroll-speed-mobile="-1.7" data-scroll-start="top 100%"
        :src="AlisaChilders" alt="Alisa Childers" />
    </div>
    <div class="row-start-6 wrapper mt-[6vw]">
      <h2 id="all-platforms" class="col-start-2 row-start-1 text-left md:col-span-5 md:col-start-4 col-end-15">
        Our podcast is available on <span class="font-serif italic">all</span>
        platforms
      </h2>
      <iframe class="
          col-start-2
          row-start-2
          md:col-span-10 md:col-start-12 md:row-start-1
          mt-[6vw]
          md:mt-0 md:mb-[6vw]
          col-end-15
        " id="player_iframe"
        src="https://www.buzzsprout.com/1034671?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1034671%2Fpodcast%2Fembed"
        loading="lazy" width="100%" height="375" frameborder="0" scrolling="no" title="SAFT Podcast" />

      <a class="
          col-span-9 col-start-2
          row-start-3
          md:col-span-4 md:col-start-13 md:mb-[1vw]
        " href="https://www.youtube.com/channel/UCBDroMQT6UM9RCK3vjdW6dA/videos">
        <img :src="YoutubePodcasts" alt="Watch On YouTube" />
      </a>
      <a class="
          col-span-9 col-start-6
          row-start-4
          md:col-span-4 md:col-start-16 md:mb-[1vw]
        " href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMDM0NjcxLnJzcw==">
        <img :src="GooglePodcasts" alt="Listen on Google Podcasts" />
      </a>
      <a class="
          col-span-9 col-start-3
          row-start-5
          md:col-span-4 md:col-start-14 md:mb-[1vw]
        " href="https://podcasts.apple.com/in/podcast/saft-podcast/id1511404295">
        <img :src="ApplePodcasts" alt="Listen on Apple Podcasts" />
      </a>
      <a class="col-span-9 col-start-6 row-start-6 md:col-span-4 md:col-start-17"
        href="https://open.spotify.com/show/4hOLouY5QFv3KuNNDUi5hM">
        <img :src="SpotifyPodcasts" alt="Listen on Spotify" />
      </a>
    </div>
  </section>
</template>
