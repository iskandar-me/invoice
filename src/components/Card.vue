<script setup>
import { ref  } from 'vue'
import data from "../../public/data.json"
const invoices=ref(data)
// import invoices from "@/components/Header.vue"

import { getStatusBgColorClass, getStatusTextColorClass } from '../utils/statusColor.js'
</script>
<template>
  <li
    v-if="invoices"
    v-for="invoice in invoices"
    class="group flex flex-wrap gap-2 justify-between items-center mb-4 bg-white dark:bg-[#1E2139] py-4 pr-6 pl-8 rounded-md hover:shadow-md dark:hover:shadow-[#DFE3FA] duration-200 ease-linear transition-all cursor-pointer"
  >
    <span class="text-[#7E88C3] font-medium text-[15px] leading-[15px] tracking-[-0.25px]">
      #
      <span class="text-[#0C0E16] dark:text-white">{{ invoice.id }}</span>
    </span>
    <span
      class="text-[#888EB0] dark:text-[#DFE3FA] text-[13px] leading-[15px] tracking-[-0.1px] font-medium"
      >Due
      <span class="text-[#7E88C3] dark:text-[#DFE3FA]">{{ invoice.dueDate }}</span>
    </span>
    <h3
      class="text-[#858BB2] dark:text-white text-[13px] leading-[15px] tracking-[-0.1px] font-medium"
    >
      {{ invoice.name }}
    </h3>
    <span class="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-6 tracking-[-0.25px]"
      >£ {{ invoice.totalPrice }}</span
    >
    <span
      :class="getStatusTextColorClass(invoice.status)"
      class="pt-[14px] px-[30px] pb-[11px] rounded-md capitalize"
    >
      <span
        :class="getStatusBgColorClass(invoice.status)"
        class="inline-block w-2.5 h-2.5 rounded-full mr-2"
      ></span>
      <span class="font-bold text-[15px] leading-6 tracking-[-0.25px] opacity-100">
        {{ invoice.status }}
      </span>
    </span>
    <img
      class="group-hover:translate-x-1 group-hover:scale-125 duration-200 ease-linear transition-all cursor-pointer"
      src="../assets/img/arrow-right.svg"
      alt=""
    />
  </li>

  <!-- If there is no Inoice data -->
  <div v-else class="flex items-center justify-center">
    <div class="flex flex-col items-center">
      <img class="mb-[42px]" src="../assets/img/no-data-img.svg" alt="" />
      <p
        class="text-[#0C0E16] dark:text-white font-bold text-2xl leading-[22px] tracking-[-0.75px] mb-[23px]"
      >
        There is nothing here
      </p>
      <p
        class="font-medium text-center text-[13px] text-[#888EB0] dark:text-[#DFE3FA] leading-[15px] tracking-[-0.1px]"
      >
        Create an invoice by clicking the
        <br /><b>New <span class="hidden sm:inline-block"> Invoice</span></b> button and get started
      </p>
    </div>
  </div>
</template>
