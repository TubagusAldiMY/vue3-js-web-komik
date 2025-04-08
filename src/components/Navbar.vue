<script setup>
import { ref } from 'vue'


const search = ref('')
</script>

<template>
  <nav class="bg-gray-800 text-white p-4">
    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center justify-between">
      <!-- Logo on the left -->
      <div>
        <span class="text-base lg:text-xl text-white font-bold">TubsAMY</span>
      </div>
      
      <!-- Navigation links in the center -->
      <div class="flex gap-10">
        <RouterLink to="/" class="nav-link text-xs lg:text-base">Home</RouterLink>
        <RouterLink to="/explore" class="nav-link text-xs lg:text-base">Explore</RouterLink>
        <RouterLink to="/library" class="nav-link text-xs lg:text-base">Library</RouterLink>
      </div>
      
      <!-- Search and login on the right -->
      <div class="flex items-center gap-4">
        <div class="relative">
          <input 
            type="text" 
            v-model="search"
            placeholder="Search..."
            class="bg-gray-700 text-white rounded-md px-3 py-1.5 pr-8 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <RouterLink to="/login" class="nav-link text-sm lg:text-base">Login</RouterLink>
      </div>
    </div>

    <!-- Mobile Navigation: Top Bar -->
    <div class="flex md:hidden items-center justify-between">
      <div>
        <span class="text-sm sm:text-base text-white font-bold">TubsAMY</span>
      </div>
      <div class="relative">
        <input 
          type="text" 
          v-model="search"
          placeholder="Search..."
          class="bg-gray-700 text-white rounded-md px-3 py-1.5 pr-8 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-[200px]"
        />
        <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation: Bottom Icons -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around p-3">
      <RouterLink to="/" class="flex flex-col items-center text-[10px] xs:text-xs">
<!--        <img src="/public/home.svg" alt="Home" class="h-5 w-5 sm:h-6 sm:w-6" />-->
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/explore" class="flex flex-col items-center text-[10px] xs:text-xs">
<!--        <img src="/public/explore.svg" alt="Explore" class="h-5 w-5 sm:h-6 sm:w-6" />-->
        <span>Explore</span>
      </RouterLink>
      <RouterLink to="/library" class="flex flex-col items-center text-[10px] xs:text-xs">
<!--        <img src="/public/library.svg" alt="Library" class="h-5 w-5 sm:h-6 sm:w-6" />-->
        <span>Library</span>
      </RouterLink>
      <RouterLink to="/login" class="flex flex-col items-center text-[10px] xs:text-xs">
<!--        <img src="/public/profile.svg" alt="Profile" class="h-5 w-5 sm:h-6 sm:w-6" />-->
        <span>Login</span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>

</style>
