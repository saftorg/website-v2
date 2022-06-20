<script setup lang="ts">
const formatted = useDateFormat(useNow().value, 'YYYY');
</script>

<template>
  <div class="grid relative">
    <svg
      width="428"
      height="182"
      viewBox="0 0 428 182"
      fill="none"
      class="block col-start-1 col-end-1 row-start-1 row-end-1 w-full md:hidden"
      xmlns="http://www.w3.org/2000/svg"
      stroke-width="1"
    >
      <path
        d="M1313.84 144.671C1314.55 158.541 1305.18 172.713 1286.39 186.995C1267.63 201.261 1239.57 215.545 1203.18 229.653C1130.41 257.865 1024.39 285.327 892.919 310.538C629.98 360.959 265.288 402.366 -138.83 422.802C-542.948 443.239 -909.956 438.835 -1176.64 415.197C-1309.99 403.378 -1418.23 386.752 -1493.48 366.025C-1531.11 355.661 -1560.46 344.28 -1580.57 331.979C-1600.7 319.666 -1611.45 306.511 -1612.15 292.641C-1612.85 278.77 -1603.49 264.599 -1584.7 250.317C-1565.93 236.051 -1537.88 221.766 -1501.49 207.659C-1428.71 179.446 -1322.7 151.985 -1191.23 126.774C-928.287 76.3526 -563.595 34.9462 -159.477 14.5097C244.64 -5.92687 611.649 -1.52317 878.333 22.1146C1011.68 33.9338 1119.92 50.5601 1195.17 71.2866C1232.8 81.6508 1262.15 93.0323 1282.26 105.333C1302.4 117.646 1313.14 130.801 1313.84 144.671Z"
        stroke="currentColor"
      />
    </svg>
    <svg
      class="hidden col-start-1 col-end-1 row-start-1 row-end-1 md:block"
      viewBox="0 0 1440 236"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1836.84 144.671C1837.55 158.541 1828.18 172.713 1809.39 186.995C1790.63 201.261 1762.57 215.545 1726.18 229.653C1653.41 257.865 1547.39 285.327 1415.92 310.538C1152.98 360.959 788.288 402.366 384.17 422.802C-19.9478 443.239 -386.956 438.835 -653.64 415.197C-786.986 403.378 -895.229 386.752 -970.481 366.025C-1008.11 355.661 -1037.46 344.28 -1057.57 331.979C-1077.7 319.666 -1088.45 306.511 -1089.15 292.641C-1089.85 278.77 -1080.49 264.599 -1061.7 250.317C-1042.93 236.051 -1014.88 221.766 -978.49 207.659C-905.712 179.446 -799.699 151.985 -668.226 126.774C-405.287 76.3526 -40.5954 34.9462 363.523 14.5097C767.64 -5.92687 1134.65 -1.52317 1401.33 22.1146C1534.68 33.9338 1642.92 50.5601 1718.17 71.2866C1755.8 81.6508 1785.15 93.0323 1805.26 105.333C1825.4 117.646 1836.14 130.801 1836.84 144.671Z"
        stroke="currentColor"
      />
    </svg>
    <div
      class="grid col-start-1 col-end-1 row-start-1 row-end-1 gap-y-5 justify-items-center place-self-center"
    >
      <div class="flex gap-x-4">
        <nuxt-link
          target="_blank"
          href="https://www.facebook.com/saftapologetics/"
          id="facebook-link"
          class="bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            />
          </svg>
        </nuxt-link>

        <nuxt-link
          target="_blank"
          to="https://www.youtube.com/channel/UCBDroMQT6UM9RCK3vjdW6dA"
          id="youtube-link"
          class="bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="4" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        </nuxt-link>

        <nuxt-link
          target="_blank"
          to="https://www.instagram.com/saftapologetics/"
          id="instagram-link"
          class="bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </nuxt-link>

        <nuxt-link
          target="_blank"
          href="https://twitter.com/SAFTApologetics"
          id="twitter-link"
          class="bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
            />
          </svg>
        </nuxt-link>
      </div>
      <small>Copyright © {{ formatted }}. All Rights Reserved by SAFT</small>
    </div>
  </div>
</template>
