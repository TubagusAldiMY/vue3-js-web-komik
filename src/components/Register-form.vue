<script setup>

</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <div class="bg-gray-800 p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-100">Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label for="name" class="block text-gray-400 text-sm font-medium mb-2">Name</label>
          <input
              id="name"
              type="text"
              class="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-400 text-sm font-medium mb-2">Email</label>
          <input
              id="email"
              type="email"
              class="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-400 text-sm font-medium mb-2">Password</label>
          <input
              id="password"
              type="password"
              class="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
          />
        </div>
        <div class="mb-4">
          <label for="confirm-password" class="block text-gray-400 text-sm font-medium mb-2">Confirm Password</label>
          <input
              id="confirm-password"
              type="password"
              class="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
          />
        </div>
        <button
            type="submit"
            class="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
      <p class="text-center text-sm text-gray-400 mt-4">
        Already have an account?
<!--        <a href="/src/components/Login-form" class="text-blue-400 hover:underline">Login here</a>-->
        <a class="text-blue-400 hover:underline"><RouterLink :to="{ name: 'login'}" >Login here</RouterLink></a>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>