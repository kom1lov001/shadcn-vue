<template>
  <div>
    <SidebarProvider>
      <!-- <AppSidebar />
      <main>
        <SidebarTrigger />
        <RouterView />
      </main> -->
      <SidebarInset>
        <header
          class="flex h-16 shrink-0 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
        >
          <div class="flex items-center w-full gap-1 px-4">
            <SidebarTrigger class="-ml-1" />
            <MenuSearch />
            <div class="flex-grow min-w-0" />
            <ToggleTheme />
            <ThemePopover />
          </div>
        </header>
        <div class="flex flex-col flex-1 gap-4 p-4 pt-0">
          <router-view />
        </div>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

<script setup lang="ts">
// import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<style scoped></style>
