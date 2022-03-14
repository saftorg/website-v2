<script lang="ts" setup>
const props = defineProps({ fill: { type: String, required: true } })
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev/svgjs"
    viewBox="0 0 800 800"
  >
    <defs>
      <filter
        id="bbblurry-filter"
        x="-100%"
        y="-100%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feGaussianBlur
          stdDeviation="64"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          edgeMode="none"
          result="blur"
        ></feGaussianBlur>
      </filter>
    </defs>
    <g filter="url(#bbblurry-filter)">
      <ellipse
        rx="150"
        ry="150"
        cx="244.43091946274814"
        cy="220.94501123181175"
        :fill="props.fill"
      ></ellipse>
    </g>
  </svg>
</template>
