<script>
import { useState } from '../composations/useState'
import Vue3refChild from '../components/Vue3refChild.vue'
export default {
  components: {
    Vue3refChild,
  },
  setup() {
    const { count, setCount } = useState()
    function clickHandler() {
      count.value += 1
      console.log(count.value)
    }
    return {
      count,
      clickHandler,
    }
  },
}
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-y-10">
    <h2>測試 由 useState return 出來的 ref 是否是同一個</h2>
    <p>{{ count }}</p>
    <button class="bg-red-300" @click="clickHandler" type="button">count + 1</button>
    <hr />
    <Vue3refChild />
  </div>
</template>
