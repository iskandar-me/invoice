<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import MainModal from '@/components/MainModal.vue'
import Card from '@/components/Card.vue'

// const isModalActive =ref(false)
// console.log(isDark);

// const
</script>

<template>
  <div class="relative flex flex-col md:flex-row bg-[#F8F8FB] dark:bg-[#141625] h-full">
    <Sidebar class="" />

    <main class="px-6 sm:px-12 lg:px-[355px] w-full">
      <Header />
      <section class="">
        <!-- Cards -->
        <ul>
          <Card />
        </ul>
      </section>
    </main>
  </div>

  <!-- <MainModal v-if="isModalActive"></MainModal> -->
</template>

<style scoped></style>
