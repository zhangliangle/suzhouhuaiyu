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
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">关于我们</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 class="text-3xl font-bold text-primary mb-6">专注节能管道 · 助力绿色工业</h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              宿州淮宇节能科技有限公司成立于2015年，是一家专业从事空压机铝合金节能管道研发、生产、销售和服务的高新技术企业。
            </p>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              公司拥有先进的生产设备和完善的检测手段，产品广泛应用于机械、电子、化工、食品、医药等行业的压缩空气输送系统。我们致力于为客户提供高效、节能、可靠的管道系统解决方案。
            </p>
            <div class="flex flex-wrap gap-4">
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">ISO9001认证</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">高新技术企业</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">多项专利</span>
            </div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-1">
              <div class="bg-white rounded-2xl p-8">
                <div class="grid grid-cols-2 gap-6">
                  <div
                    v-for="(feature, index) in features"
                    :key="index"
                    class="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
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
                <span class="text-2xl font-bold text-secondary">2015</span>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow p-6">
                <h4 class="font-bold text-primary mb-2">公司成立</h4>
                <p class="text-gray-600">宿州淮宇节能科技有限公司正式成立，开始专注于铝合金节能管道的研发</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="w-24 flex-shrink-0 text-right">
                <span class="text-2xl font-bold text-secondary">2018</span>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow p-6">
                <h4 class="font-bold text-primary mb-2">获得高新技术企业认证</h4>
                <p class="text-gray-600">通过国家高新技术企业认定，技术研发实力获得认可</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="w-24 flex-shrink-0 text-right">
                <span class="text-2xl font-bold text-secondary">2020</span>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow p-6">
                <h4 class="font-bold text-primary mb-2">扩大生产规模</h4>
                <p class="text-gray-600">新建现代化生产线，年产能大幅提升</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="w-24 flex-shrink-0 text-right">
                <span class="text-2xl font-bold text-secondary">2024</span>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow p-6">
                <h4 class="font-bold text-primary mb-2">服务500+客户</h4>
                <p class="text-gray-600">累计服务超过500家企业客户，产品出口多个国家和地区</p>
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