<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'

const route = useRoute()
const showFooter = computed(() => !route.path.startsWith('/admin'))
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar v-if="!route.path.startsWith('/admin')" />
    <main :class="{ 'pt-20': !route.path.startsWith('/admin') }">
      <router-view />
    </main>
    <footer v-if="showFooter" class="bg-primary text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4">宿州淮宇节能科技有限公司</h3>
            <p class="opacity-80">空压机铝合金节能管道专家</p>
          </div>

          <div>
            <h4 class="font-semibold mb-4">快速链接</h4>
            <div class="space-y-2">
              <router-link to="/" class="block opacity-80 hover:opacity-100 transition-opacity duration-300">
                首页
              </router-link>
              <router-link to="/about" class="block opacity-80 hover:opacity-100 transition-opacity duration-300">
                关于我们
              </router-link>
              <router-link to="/products" class="block opacity-80 hover:opacity-100 transition-opacity duration-300">
                产品中心
              </router-link>
              <router-link to="/contact" class="block opacity-80 hover:opacity-100 transition-opacity duration-300">
                联系我们
              </router-link>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-4">联系我们</h4>
            <p class="opacity-80 mb-2">电话：13035007585</p>
            <p class="opacity-80 mb-2">邮箱：447358575@qq.com</p>
            <p class="opacity-80">地址：安徽省萧县鸿宇节能建材城空压机节能管道库</p>
          </div>
        </div>

        <div class="border-t border-white/20 pt-8 text-center opacity-70">
          <p>&copy; 2024 宿州淮宇节能科技有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>