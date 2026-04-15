<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const ADMIN_PASSWORD = 'huiyu2024'

const handleLogin = () => {
  if (!password.value) {
    error.value = '请输入密码'
    return
  }

  isLoading.value = true
  error.value = ''

  setTimeout(() => {
    if (password.value === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'true')
      router.push('/admin')
    } else {
      error.value = '密码错误，请重试'
      password.value = ''
    }
    isLoading.value = false
  }, 500)
}
</script>

<template>
  <div class="min-h-screen pt-20 bg-gradient-to-br from-primary to-accent flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="text-6xl mb-4">🔐</div>
        <h1 class="text-3xl font-bold text-primary mb-2">管理员登录</h1>
        <p class="text-gray-600">请输入管理员密码以继续</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-gray-700 font-medium mb-2">管理员密码</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
            placeholder="请输入密码"
            :disabled="isLoading"
          />
        </div>

        <div v-if="error" class="p-4 bg-red-100 text-red-700 rounded-lg text-center">
          {{ error }}
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">验证中...</span>
          <span v-else>登录</span>
        </button>
      </form>

      <div class="mt-6 text-center">
        <button
          @click="router.push('/')"
          class="text-gray-600 hover:text-primary transition-colors"
        >
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>