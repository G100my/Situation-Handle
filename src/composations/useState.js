import { ref } from 'vue'

const count = ref(0)

function setCount(value) {
  count.value = value
}

function useState() {
  return {
    count,
    setCount,
  }
}

export { useState }
