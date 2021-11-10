<template>
  <transition
    enter-active-class="transition-opacity duration-500 ease-in-out"
    leave-active-class="transition-opacity duration-500 ease-in-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div class="grid w-screen h-screen bg-blue-100 z-[100]">
      <div
        class="col-span-full row-span-full place-self-center w-8 h-8 text-3xl bg-blue-800 rounded-full"
      ></div>
      <div
        class="col-span-full row-span-full place-self-center w-10 h-10 text-3xl bg-blue-800 rounded-full animate-ping"
      ></div>
    </div>
  </transition>
</template>
