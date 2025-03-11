<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const prevPath = ref(route.path)
const transitionName = ref('slide-left')

watch(route, (to, from) => {
  if (to.path > from.path) {
    transitionName.value = 'slide-right'
  } else {
    transitionName.value = 'slide-left'
  }
  prevPath.value = to.path
})
</script>

<style scoped>
/* Asosiy animatsiyalar */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.3s ease;
}

/* Slide Right */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Slide Left */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
