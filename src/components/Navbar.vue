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
          <RouterLink :to="{ name: 'home'}" class="nav-link text-xs lg:text-base">Home</RouterLink>
          <RouterLink :to="{ name: 'explore'}" class="nav-link text-xs lg:text-base">Explore</RouterLink>
          <RouterLink :to="{ name: 'bookmark'}" class="nav-link text-xs lg:text-base">Bookmark</RouterLink>
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
            <font-awesome-icon :icon="['fas', 'magnifying-glass']"  class="h-5 w-5 sm:h-6 sm:w-6" />
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
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="2xl" class="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>



    <!-- Mobile Navigation: Bottom Icons -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around p-3">
      <RouterLink :to="{ name: 'home'}" class="flex flex-col items-center text-[10px] xs:text-xs">
        <font-awesome-icon :icon="['fas', 'house']" size="2xl" class="h-5 w-5 sm:h-6 sm:w-6"/>
        <span>Home</span>
      </RouterLink>
<!--      <RouterLink :to="{ name: 'explore'}" class="flex flex-col items-center text-[10px] xs:text-xs">-->
<!--        <font-awesome-icon :icon="['fas', 'compass']" size="2xl" class="h-5 w-5 sm:h-6 sm:w-6" />-->
<!--        <span>Explore</span>-->
<!--      </RouterLink>-->
<!--      <RouterLink :to="{ name: 'bookmark'}" class="flex flex-col items-center text-[10px] xs:text-xs">-->
<!--        <font-awesome-icon :icon="['fas', 'book-bookmark']" size="2xl" class="h-5 w-5 sm:h-6 sm:w-6" />-->
<!--        <span>Bookmark</span>-->
<!--      </RouterLink>-->
<!--      <RouterLink :to="{ name: 'login'}" class="flex flex-col items-center text-[10px] xs:text-xs">-->
<!--        <font-awesome-icon :icon="['fas', 'user']" size="2xl" class="h-5 w-5 sm:h-6 sm:w-6"/>-->
<!--        <span>Login</span>-->
<!--      </RouterLink>-->
    </div>
  </nav>
</template>

<style scoped>

</style>
