<template>
  <main class="h-full flex flex-col container m-auto">
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ $route.meta.title }}
        </h1>
        <nav>
          <ul class="ml-4 inline-flex space-x-2">
            <template v-for="(route, index) in $router.options.routes">
              <li
                v-if="route.meta"
                :key="index"
                class="w-max bg-indigo-200 p-1 border-indigo-900 border-2 rounded-md"
              >
                <router-link :to="route.path">{{ route.meta.title }}</router-link>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </header>

    <router-view class="flex-1" />
  </main>
</template>
<style lang="postcss">
#app {
  @apply h-screen w-screen;
}
</style>
