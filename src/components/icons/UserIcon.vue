<template>
  <div>
    <svg
      :class="classes"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        d="M17.0001 16.9999C20.9121 16.9999 24.0834 13.8286 24.0834 9.91659C24.0834 6.00457 20.9121 2.83325 17.0001 2.83325C13.0881 2.83325 9.91675 6.00457 9.91675 9.91659C9.91675 13.8286 13.0881 16.9999 17.0001 16.9999Z"
        fill="black"
      />
      <path
        d="M17.0004 20.5417C9.9028 20.5417 4.1228 25.3017 4.1228 31.1667C4.1228 31.5634 4.43447 31.8751 4.83114 31.8751H29.1695C29.5662 31.8751 29.8779 31.5634 29.8779 31.1667C29.8779 25.3017 24.0979 20.5417 17.0004 20.5417Z"
        fill="black"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserIcon',

  props: {
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
