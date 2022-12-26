<script setup lang="ts">
  import { ref } from 'vue'

  enum ButtonVariants {
    primary = 'primary',
  }
  interface ButtonProps extends Partial<HTMLButtonElement> {
    variants: keyof typeof ButtonVariants
  }

  const props = defineProps<ButtonProps>()

  const buttonPrimaryStyles = ref(
    props.variants === 'primary'
      ? 'bg-slate-800 hover:bg-slate-900 text-white'
      : ''
  )
  const buttonDisabledStyles = ref(props.disabled && 'opacity-75')
</script>

<template>
  <button
    class="py-2 px-6 flex items-center justify-center text-center"
    :class="[buttonPrimaryStyles, buttonDisabledStyles]"
  >
    <slot />
  </button>
</template>
