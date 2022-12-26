<script setup lang="ts">
  interface InputProps extends Partial<HTMLInputElement> {
    label: string
    onChange?: (payload: Event) => void
  }

  defineProps<InputProps>()
</script>

<template>
  <div class="flex flex-col">
    <span class="text-sm text-slate-900 font-medium">{{ label }}</span>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @change="onChange"
      class="drop-shadow bg-white mt-1 text-sm text-slate-900 rounded-md py-1.5 px-2"
    />
  </div>
</template>
