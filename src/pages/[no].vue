<template>
  <div>test{{ no }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  no: string
}>()
</script>

<style scoped></style>
