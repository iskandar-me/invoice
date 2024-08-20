<script setup>
import { ref, computed } from 'vue'

import Button from '@/components/Button.vue'
import isModalActive from '@/App.vue'
import data from '../../public/data.json'
import { generateRandomID } from '@/utils/generateID.js'
let invoices = ref(data)


const date = new Date()
const time = date.getUTCDate(),
  monthIndex = date.getMonth(),
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year = date.getFullYear()

const fullday = `${time}  ${months[monthIndex]} ${year}`

function addInvoice() {
  invoices.value.push({
    id: generateRandomID(),
    invoiceNumber: 'INV-000' + (invoices.value.length + 1),
    name: Math.random() * invoices.value.length,
    totalPrice: 0,
    status: 'pending',
    date: '',
    dueDate: fullday
  })
  // localStorage.setItem('invoices', JSON.stringify(invoices))
}

// function removeInvoice(id) {
//   invoices.value = invoices.value.filter((invoice) => invoice.id!== id)
//   localStorage.setItem('invoices', JSON.stringify(invoices))
// }
// invoices = JSON.parse(localStorage.getItem(invoices))
</script>

<template>
  <header
    class="sticky top-0 flex justify-between items-center pt-[120px] sm:pt-[141px] md:pt-[77px] bg-[#F8F8FB] dark:bg-[#141625] mb-8 sm:mb-[55px] md:mb-16"
  >
    <div class="flex flex-col">
      <h1 class="font-bold text-4xl text-[#0C0E16] dark:text-white tracking-[-1.13px]">Invoices</h1>
      <h3
        class="font-medium text-[13px]leading-[15px] tracking-[-0.1px] text-[#888EB0] dark:text-[#DFE3FA]"
      >
        {{ invoices.length ? ` There are  ${invoices.length} total  invoices` : 'No invoices' }}
      </h3>
    </div>
    <div class="flex justify-between items-center gap-[18px] sm:gap-10">
      <div class="group flex items-center gap-[14px] cursor-pointer">
        <span class="font-bold text-[15px] text-[#0C0E16] dark:text-[#FFFFFF] tracking-[-0.25px]">
          Filter
          <span class="hidden sm:inline-block"> by status </span>
        </span>
        <img class="group-hover:scale-150" src="../assets/img/arrow-down.svg" alt="" />
      </div>
      <Button variant="primary" class="flex items-center gap-2 sm:gap-4" @click="addInvoice()">
        <span class="text-[#7C5DFA] bg-white rounded-full p-[11px]">
          <img src="../assets/img/plus.svg" alt="" />
        </span>
        <span>
          New
          <span class="hidden sm:inline-block">Invoice</span>
        </span>
      </Button>
    </div>
  </header>
</template>
