<template>
  <Child />
</template>
<script>
import Child from '../components/CreatedChild.vue'

export default {
  name: 'AsyncCreated',
  components: {
    Child,
  },
  async created() {
    function waitMe() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('resolve Promise')
          resolve()
        }, 2000)
      })
    }
    let i = 0
    while (i < 1000) {
      i++
      console.log(i)
    }
    await waitMe()
    console.time('AsyncCreated')
    console.log('AsyncCreated test - parent end')
  },
}
</script>
