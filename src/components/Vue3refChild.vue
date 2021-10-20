<script>
import { useState } from '../composations/useState'
export default {
  setup() {
    const { count, setCount } = useState()

    return {
      count,
    }
  },
}
</script>
<template>
  <div>
    <p>another count: {{ count }}</p>
  </div>
</template>
