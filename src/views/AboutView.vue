<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const features = [
  {
    title: '节能高效',
    description: '采用优质铝合金材料，内壁光滑阻力小，大幅降低压降损失',
    icon: '⚡'
  },
  {
    title: '品质卓越',
    description: '严格的质量控制体系，确保每一件产品都达到行业最高标准',
    icon: '🏆'
  },
  {
    title: '技术领先',
    description: '拥有多项专利技术，持续创新引领行业发展',
    icon: '💡'
  },
  {
    title: '服务完善',
    description: '专业的售后服务团队，为客户提供全方位的技术支持',
    icon: '🤝'
  }
]

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="pt-20">
    <!-- 关于我们 -->
    <section class="py-24 bg-[#f0f4f8]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">关于我们</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 class="text-3xl font-bold text-primary mb-6">专注节能管道 · 助力绿色工业</h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              宿州淮宇节能科技有限公司成立于2024年，是一家专业从事空压机铝合金节能管道生产、销售和服务的高新技术企业。
            </p>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              7.5-750kw永磁变频、双级压缩一级能效螺杆，空压机储气罐、干燥机、过滤器、制氮机等。承接各品牌空压机、维修、保养、节能管道机电安装等业务。
            </p>
            <div class="flex flex-wrap gap-4">
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">ISO9001认证</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">高新技术企业</span>
              <!-- <span class="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">多项专利</span> -->
            </div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-1">
              <div class="bg-white rounded-2xl p-8">
                <div class="grid grid-cols-2 gap-6">
                  <div v-for="(feature, index) in features" :key="index"
                    class="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div class="text-4xl mb-3">{{ feature.icon }}</div>
                    <h4 class="text-lg font-bold text-primary mb-2">{{ feature.title }}</h4>
                    <p class="text-sm text-gray-600">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 企业文化 -->
        <div class="bg-white rounded-2xl shadow-lg p-12">
          <h3 class="text-2xl font-bold text-primary mb-8 text-center">企业文化</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-5xl mb-4">🎯</div>
              <h4 class="text-xl font-bold text-primary mb-3">企业使命</h4>
              <p class="text-gray-600">为工业节能降耗提供优质解决方案，推动绿色可持续发展</p>
            </div>
            <div class="text-center">
              <div class="text-5xl mb-4">👁️</div>
              <h4 class="text-xl font-bold text-primary mb-3">企业愿景</h4>
              <p class="text-gray-600">成为空压机节能管道行业的领军企业</p>
            </div>
            <div class="text-center">
              <div class="text-5xl mb-4">⭐</div>
              <h4 class="text-xl font-bold text-primary mb-3">核心价值</h4>
              <p class="text-gray-600">诚信、创新、品质、服务</p>
            </div>
          </div>
        </div>

        <!-- 发展历程 -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-primary mb-8 text-center">发展历程</h3>
          <div class="space-y-8">
            <div class="flex items-start gap-6">
              <div class="w-24 flex-shrink-0 text-right">
                <span class="text-2xl font-bold text-secondary">2024</span>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow p-6">
                <h4 class="font-bold text-primary mb-2">公司成立</h4>
                <p class="text-gray-600">宿州淮宇节能科技有限公司正式成立，开始专注于铝合金节能管道的研发</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="w-24 flex-shrink-0 text-right">
                <span class="text-2xl font-bold text-secondary">2025</span>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow p-6">
                <h4 class="font-bold text-primary mb-2">产品认证</h4>
                <p class="text-gray-600">属于自己的仓库，严格控制生产流程，确保产品质量</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="w-24 flex-shrink-0 text-right">
                <span class="text-2xl font-bold text-secondary">2026</span>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow p-6">
                <h4 class="font-bold text-primary mb-2">继续前进</h4>
                <p class="text-gray-600">挑战更高目标，为客户提供更好的服务......</p>
              </div>
            </div>

          </div>
        </div>

        <div class="text-center mt-16">
          <button @click="navigateTo('/contact')" class="btn-primary">
            联系我们
          </button>
        </div>
      </div>
    </section>
  </div>
</template>