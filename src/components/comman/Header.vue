<template>
  <header
    class="bg-white dark:bg-neutral-800 border dark:border-neutral-700 mx-auto w-full shadow-xl rounded-none lg:rounded-md px-2">
    <div>
      <div class="flex justify-between items-center py-2">
        <!-- Logo -->
        <div class="flex shrink-0 items-center px-4">
          <a aria-current="page" class="flex items-center" href="/">
            <span class="text-green-500 font-[100] text-2xl" >CV</span>
          </a>
        </div>

        <!-- Nav Links -->
        <div class="flex gap-4 " >
          <div class="hidden md:flex">
            <NavLinks />
          </div>
          <!-- Auth Buttons -->
          <div class="gap-2 flex items-center pl-3">
            <div class="md:flex hidden gap-2">
              <DarkBtn />
            </div>
            <LangBtn />
            <div class="md:flex hidden gap-2">
              <ContactBtn />
            </div>
  
            <!-- Drawer button on desktop -->
            <div class="md:hidden flex gap-2">
              <Drawer />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import Drawer from '@/components/drawer/Drawer.vue'
  import DarkBtn from '@/components/toglbtn/DarkBtn.vue'
  import ContactBtn from '@/components/toglbtn/ContactBtn.vue'
  import NavLinks from '@/components/naveg/NavLinks.vue'
  import LangBtn from '../toglbtn/LangBtn.vue'
</script>