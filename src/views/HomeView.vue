<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const companyInfo = {
  name: '宿州淮宇节能科技有限公司',
  tagline: '空压机铝合金节能管道专家',
  description: '专注节能管道系统研发与生产，为工业用户提供高效、可靠的压缩空气输送解决方案',
  founded: '2015年',
  employees: '50+',
  customers: '500+'
}

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <div>
    <!-- Hero 区域 -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent overflow-hidden pt-20">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div class="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 fade-in-up text-shadow">
          {{ companyInfo.name }}
        </h1>
        <p class="text-2xl md:text-3xl mb-4 fade-in-up stagger-1 text-secondary font-semibold">
          {{ companyInfo.tagline }}
        </p>
        <p class="text-lg md:text-xl mb-8 fade-in-up stagger-2 opacity-90 max-w-3xl mx-auto">
          {{ companyInfo.description }}
        </p>

        <!-- 数据展示 -->
        <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto fade-in-up stagger-3 mb-12">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-secondary">{{ companyInfo.founded }}</div>
            <div class="text-sm md:text-base opacity-80 mt-2">成立年份</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-secondary">{{ companyInfo.employees }}</div>
            <div class="text-sm md:text-base opacity-80 mt-2">专业团队</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-secondary">{{ companyInfo.customers }}</div>
            <div class="text-sm md:text-base opacity-80 mt-2">服务客户</div>
          </div>
        </div>

        <button
          @click="navigateTo('/products')"
          class="btn-primary text-lg"
        >
          了解更多产品
        </button>
      </div>

      <!-- 向下滚动指示 -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">为什么选择我们</h2>
          <p class="text-xl opacity-90">专业 · 品质 · 节能 · 服务</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(feature, index) in [
              { icon: '⚡', title: '节能高效', description: '采用优质铝合金材料，内壁光滑阻力小，大幅降低压降损失' },
              { icon: '🏆', title: '品质卓越', description: '严格的质量控制体系，确保每一件产品都达到行业最高标准' },
              { icon: '💡', title: '技术领先', description: '拥有多项专利技术，持续创新引领行业发展' },
              { icon: '🤝', title: '服务完善', description: '专业的售后服务团队，为客户提供全方位的技术支持' }
            ]"
            :key="index"
            class="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <div class="text-5xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
            <p class="opacity-90">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>