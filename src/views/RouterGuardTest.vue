<template>
  <div class="router_test">
    <h1>Test query changed</h1>
    <div class="flex gap-2 p-2">
      <button class="bg-gray-500 text-white p-2 rounded-sm" type="button" @click="routeNoChanged">
        router no changed
      </button>
      <button
        class="bg-gray-500 text-white p-2 rounded-sm"
        type="button"
        @click="routeChanged({ id: 22 })"
      >
        router query changed
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RouterGuardTest',
  computed: {
    id() {
      return this.$route.query.id
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  watch: {
    id(newer) {
      console.log('id newer', newer)
    },
  },
  methods: {
    routeNoChanged() {
      this.$router.push({ name: this.$route.name })
    },
    routeChanged(query = { id: 1 }) {
      this.$router.push({ name: this.$route.name, query })
    },
  },
}
</script>
