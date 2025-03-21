<template>
  <div class="wrapper grid md:grid-cols-[222px_1fr] grid-cols-[1fr] h-screen">
    <div class="bg-[#000000] relative md:flex hidden text-gray-400">
      <div class="absolute flex flex-col gap-y-5 h-full w-full">
        <div class="bg-red-300 py-3 flex items-center justify-center">da</div>
        <div class="bg-red-300 py-3 flex items-center justify-center">da</div>
        <div class="bg-red-300 py-3 flex items-center justify-center">da</div>
      </div>
    </div>
    <div class="relative flex flex-col">
      <div class="absolute md:flex hidden top-0 w-full h-[71px] bg-white">
        <div class="flex items-center w-full justify-between px-3">
          <div class="flex items-center gap-1">
            <UserIcon class="w-[34px] h-[34px]" />
            <div>
              <h1 class="font-semibold text-base">Avaz Komilov</h1>
              <h3 class="font-semibold text-xs">Admin</h3>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <div class="border-r-[3px] border-[#000] text-end pr-2">
              <h1 class="font-bold text-base">12:29 PM</h1>
              <h3 class="font-meduim text-[13px]">Sep 02, 2023</h3>
            </div>
            <div class="h-[31px] flex items-center">
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
      <div class="md:mt-[71px] bg-[#F2F2F2] h-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon, SettingsIcon } from '@/components/icons'
</script>

<style scoped>
.wrapper {
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: gray; */
}
</style>
