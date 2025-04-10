<script setup>

</script>

<template>
  <div class="flex h-screen items-center justify-center bg-gray-900">
    <div class="w-full max-w-sm bg-gray-800 p-8 rounded-md shadow-md">
      <h2 class="text-2xl font-semibold text-center text-gray-200">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mt-4">
          <label class="block text-sm text-gray-400" for="email">Email</label>
          <input
              id="email"
              type="email"
              v-model="email"
              class="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 p-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your email"
              required
          />
        </div>
        <div class="mt-4">
          <label class="block text-sm text-gray-400" for="password">Password</label>
          <input
              id="password"
              type="password"
              v-model="password"
              class="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 p-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your password"
              required
          />
        </div>
        <button
            type="submit"
            class="mt-6 w-full rounded-md bg-blue-500 py-2 text-white transition hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-400">
        Don't have an account?
<!--        <a href="/register" class="text-blue-500 hover:underline">Sign up</a>-->
        <a class="text-blue-500 hover:underline"><RouterLink :to="{ name: 'register'}" >Sign Up</RouterLink></a>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>