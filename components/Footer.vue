<script setup lang="ts">
const formatted = useDateFormat(useNow().value, 'YYYY');
</script>

<template>
  <div class="grid relative">
    <svg class="col-start-1 col-end-1 row-start-1 row-end-1" viewBox="0 0 1440 236" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1836.84 144.671C1837.55 158.541 1828.18 172.713 1809.39 186.995C1790.63 201.261 1762.57 215.545 1726.18 229.653C1653.41 257.865 1547.39 285.327 1415.92 310.538C1152.98 360.959 788.288 402.366 384.17 422.802C-19.9478 443.239 -386.956 438.835 -653.64 415.197C-786.986 403.378 -895.229 386.752 -970.481 366.025C-1008.11 355.661 -1037.46 344.28 -1057.57 331.979C-1077.7 319.666 -1088.45 306.511 -1089.15 292.641C-1089.85 278.77 -1080.49 264.599 -1061.7 250.317C-1042.93 236.051 -1014.88 221.766 -978.49 207.659C-905.712 179.446 -799.699 151.985 -668.226 126.774C-405.287 76.3526 -40.5954 34.9462 363.523 14.5097C767.64 -5.92687 1134.65 -1.52317 1401.33 22.1146C1534.68 33.9338 1642.92 50.5601 1718.17 71.2866C1755.8 81.6508 1785.15 93.0323 1805.26 105.333C1825.4 117.646 1836.14 130.801 1836.84 144.671Z"
        stroke="currentColor" />
    </svg>
    <div class="grid col-start-1 col-end-1 row-start-1 row-end-1 gap-y-5 justify-items-center place-self-center">
      <div class="flex gap-x-4">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="4" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        </a>

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44"
            height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
      </div>
      <p>Copyright © {{ formatted }}. All Rights Reserved by SAFT</p>
    </div>
  </div>
</template>
