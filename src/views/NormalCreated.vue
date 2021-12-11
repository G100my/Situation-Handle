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
  created() {
    async function waitMe() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('resolve Promise')
          resolve()
        }, 2000)
      })
    }
    waitMe()

    let i = 0
    while (i < 1000) {
      i++
      console.log(i)
    }

    console.time('AsyncCreated')
    console.log('AsyncCreated test - parent end')
  },
}
</script>
