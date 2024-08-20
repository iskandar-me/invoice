<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDarkMode = useToggle(isDark)
</script>

<template>
  <aside
    class="sticky left-0 top-0 h-[73px] sm:h-[103px] md:h-[100vh] w-full md:w-28 z-20 flex md:flex-col justify-between bg-[#373B53] dark:bg-[#1E2139] md:rounded-r-[20px]"
  >
    <!--  Logo -->
    <div class="flex md:flex-col justify-between items-center md:gap-2">
      <a class="w-full h-full" href="../../index.html">
        <img
          class="w-[73px] sm:w-[103px] md:w-[112px]"
          src="../assets/img/logo.svg"
          alt="Invoice App Logo"
        />
      </a>
    </div>
    <div class="">
      <div class="flex md:flex-col flex-row justify-center md:justify-end gap-8 h-full w-full">
        <!-- Theme toggler -->
        <span
          class="self-center cursor-pointer hover:bg-[#7C5DFA] rounded transition-all duration-200 ease-linear active:scale-95"
        >
          <i id="theme__toggler" @click="toggleDarkMode()" class="icon-sun p-2"></i>
        </span>
        <span
          class="flex items-center border-l border-l-[#494E6E] md:border-l-0 md:border-t md:border-t-[#494E6E] px-6 py-5 md:p-8"
        >
          <img
            class="block"
            src="../assets/img/profile-picture.svg"
            width="40"
            height="40"
            alt="Profile picture"
          />
        </span>
      </div>
    </div>
  </aside>
</template>
