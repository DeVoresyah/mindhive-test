<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ProductApi } from './services/api'
  import './style.css'

  // Icons
  import IconArrowLeft from './assets/svg/icon-arrow-left.vue'
  import IconBrandApple from './assets/svg/icon-brand-apple.vue'

  // Components
  import Input from './components/atom/input.vue'
  import Button from '~/components/atom/button.vue'

  // Types
  import { ProductResponse } from '~/services/api/api.types'

  const state = ref<{
    isFetching: boolean
    product: ProductResponse | null
    isError: null | object
  }>({
    isFetching: false,
    product: null,
    isError: null,
  })

  onMounted(async () => {
    const fetchProduct = await new ProductApi().getProduct(1)

    console.log('test =>', fetchProduct)

    if (fetchProduct.kind === 'ok') {
      state.value.product = fetchProduct.product
    } else {
      state.value.isError = fetchProduct
    }
  })
</script>
<template>
  <div class="md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
    <div class="bg-white p-12 min-h-screen">
      <div class="w-full flex items-center">
        <a href="#">
          <IconArrowLeft
            :width="24"
            :height="24"
            class-names="stroke-gray-400"
          />
        </a>
        <h2 class="text-base text-slate-900 font-semibold ml-3">
          {{ state.product?.title }}
        </h2>
      </div>
      <div class="flex flex-col my-8">
        <span class="text-gray-500 text-sm font-medium">Price</span>
        <span class="text-2xl text-slate-900 font-semibold"
          >${{ state.product?.price }}</span
        >
      </div>
      <img
        :src="state.product?.image"
        :alt="state.product?.title"
        class="object-cover w-[350px] h-[350px]"
      />
    </div>
    <div class="flex flex-col bg-white p-12 px-24 min-h-screen">
      <Button variants="primary" class="rounded-lg">
        <IconBrandApple :width="24" :height="24" class-names="stroke-white" />
        <span class="ml-2">Pay</span>
      </Button>
      <span class="alternative-divider my-5">Or pay with credit card</span>
      <h3 class="text-slate-900 font-semibold text-lg">Shipping Information</h3>
      <Input label="Email" type="email" class="mt-5" />
    </div>
  </div>
</template>
