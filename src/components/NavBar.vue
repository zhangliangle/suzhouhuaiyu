<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateTo = (path) => {
  router.push(path)
  isMenuOpen.value = false
}

const isActive = (path) => {
  return route.path === path
}
</script>

<template>
  <!-- 导航栏 -->
  <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center cursor-pointer" @click="navigateTo('/')">
          <div class="text-2xl font-bold text-primary">
            宿州淮宇节能科技有限公司
          </div>
        </div>

        <!-- 桌面端导航 -->
        <div class="hidden md:flex space-x-8 items-center">
          <button @click="navigateTo('/')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium pb-1"
            :class="{ 'text-primary border-b-2 border-secondary': isActive('/') }">
            首页
          </button>
          <button @click="navigateTo('/about')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium pb-1"
            :class="{ 'text-primary border-b-2 border-secondary': isActive('/about') }">
            关于我们
          </button>
          <button @click="navigateTo('/products')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium pb-1"
            :class="{ 'text-primary border-b-2 border-secondary': isActive('/products') }">
            产品中心
          </button>
          <button @click="navigateTo('/contact')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium pb-1"
            :class="{ 'text-primary border-b-2 border-secondary': isActive('/contact') }">
            联系我们
          </button>
          <button @click="navigateTo('/admin/login')"
            class="text-gray-500 hover:text-secondary transition-colors duration-300 font-medium text-sm"
            title="管理员入口">
            🔐
          </button>
        </div>

        <!-- 移动端菜单按钮 -->
        <button class="md:hidden text-gray-700" @click="isMenuOpen = !isMenuOpen">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path :class="isMenuOpen ? 'hidden' : 'block'" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="isMenuOpen ? 'block' : 'hidden'" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <div v-show="isMenuOpen" class="md:hidden pb-4">
        <div class="flex flex-col space-y-3">
          <button @click="navigateTo('/')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left py-2"
            :class="{ 'text-primary': isActive('/') }">
            首页
          </button>
          <button @click="navigateTo('/about')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left py-2"
            :class="{ 'text-primary': isActive('/about') }">
            关于我们
          </button>
          <button @click="navigateTo('/products')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left py-2"
            :class="{ 'text-primary': isActive('/products') }">
            产品中心
          </button>
          <button @click="navigateTo('/contact')"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left py-2"
            :class="{ 'text-primary': isActive('/contact') }">
            联系我们
          </button>
          <button @click="navigateTo('/admin/login')"
            class="text-gray-500 hover:text-secondary transition-colors duration-300 font-medium text-left py-2">
            🔐 管理员入口
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>