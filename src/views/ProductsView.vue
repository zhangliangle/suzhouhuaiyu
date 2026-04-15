<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { products } from '../api/productList.js'

const router = useRouter()
const productsList = ref(
  Object.entries(products).map(([id, data]) => ({
    id,
    name: data.name,
    description: data.description,
    image: data.subProducts?.[0]?.image || '',
    link: `/product/${id}`
  }))
)

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="pt-20">
    <!-- 产品中心 -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">产品中心</h2>
          <p class="text-xl text-gray-600 mt-8 max-w-3xl mx-auto">
            铝合金节能管道 · 品质卓越 · 节能显著 · 广泛应用于各行各业
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(product, index) in productsList" :key="index"
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <!-- 产品图片占位 -->
            <div class="h-48 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
              <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
              <div v-else class="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                🔧
              </div>
            </div>

            <!-- 标签 -->
            <div v-if="product.badge" class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
              :class="product.badge === '新品' ? 'bg-accent' : product.badge === '热销产品' ? 'bg-secondary' : 'bg-primary'">
              {{ product.badge }}
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ product.description }}
              </p>

              <button @click="navigateTo(product.link)"
                class="mt-2 text-secondary font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                了解详情
                <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-16">
          <button @click="navigateTo('/contact')" class="btn-secondary">
            获取报价
          </button>
        </div>
      </div>
    </section>

    <!-- 产品优势 -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">产品优势</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="text-5xl mb-4">💰</div>
            <h3 class="text-xl font-bold text-primary mb-3">节能30%以上</h3>
            <p class="text-gray-600">内壁光滑不生锈，大幅降低压降损失，相比传统管道节能效果显著</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="text-5xl mb-4">🛡️</div>
            <h3 class="text-xl font-bold text-primary mb-3">品质保障</h3>
            <p class="text-gray-600">采用优质6063铝合金材料，严格的质量控制体系，寿命长达20年</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="text-5xl mb-4">🔧</div>
            <h3 class="text-xl font-bold text-primary mb-3">安装便捷</h3>
            <p class="text-gray-600">快速接头设计，无需焊接，大幅缩短安装周期，降低人工成本</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="text-5xl mb-4">🌡️</div>
            <h3 class="text-xl font-bold text-primary mb-3">耐候性强</h3>
            <p class="text-gray-600">耐腐蚀、耐高温、耐低温，适应各种恶劣工作环境</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="text-5xl mb-4">♻️</div>
            <h3 class="text-xl font-bold text-primary mb-3">环保可回收</h3>
            <p class="text-gray-600">铝合金材料可循环利用，符合绿色环保发展理念</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="text-5xl mb-4">📊</div>
            <h3 class="text-xl font-bold text-primary mb-3">降低泄漏</h3>
            <p class="text-gray-600">密封性能优异，有效减少压缩空气泄漏，保护环境</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">应用场景</h2>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-3">🏭</div>
            <h3 class="font-bold text-primary mb-2">工业制造</h3>
            <p class="text-sm text-gray-600">机械加工、电子电器、汽车制造</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-3">💊</div>
            <h3 class="font-bold text-primary mb-2">医药化工</h3>
            <p class="text-sm text-gray-600">制药、食品加工、精细化工</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-3">🏗️</div>
            <h3 class="font-bold text-primary mb-2">建筑工程</h3>
            <p class="text-sm text-gray-600">楼宇建设、装饰装修、防水工程</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-3">⚡</div>
            <h3 class="font-bold text-primary mb-2">能源电力</h3>
            <p class="text-sm text-gray-600">发电厂、输配电、储能设施</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>