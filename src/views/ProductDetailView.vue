<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '../api/productList.js'
import { usePriceStore } from '../stores/priceStore.js'

const route = useRoute()
const router = useRouter()
const activeTab = ref('specs')
const priceStore = usePriceStore()

const productId = computed(() => route.params.id)
const product = computed(() => products[productId.value])
const productSpecs = computed(() => priceStore.getProductSpecs(productId.value))

const getProductImages = (productData) => {
  if (!productData || !productData.subProducts) return []
  const images = []
  productData.subProducts.forEach(sub => {
    if (sub.image) {
      images.push(sub.image)
    }
  })
  return images.filter(Boolean)
}

const currentImages = computed(() => {
  if (!product.value) return []
  return getProductImages(product.value)
})

const handlePricesUpdate = () => {
  priceStore.state.prices = priceStore.state.prices
}

onMounted(() => {
  if (!product.value) {
    router.push('/products')
  }
  window.addEventListener('prices-updated', handlePricesUpdate)
})

onUnmounted(() => {
  window.removeEventListener('prices-updated', handlePricesUpdate)
})

const goBack = () => {
  router.push('/products')
}
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50" v-if="product">
    <!-- 面包屑导航 -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center text-sm">
          <button @click="goBack" class="text-primary hover:text-secondary transition-colors">
            产品中心
          </button>
          <span class="mx-2 text-gray-400">/</span>
          <span class="text-gray-600">{{ product.name }}</span>
        </div>
      </div>
    </div>

    <!-- 产品基本信息 -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- 产品图片展示 -->
          <div class="space-y-4">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10">
                <img v-if="currentImages[0]" :src="currentImages[0]" :alt="product.name"
                  class="object-contain w-full h-full" />
                <div v-else class="text-9xl opacity-30">🔧</div>
              </div>
            </div>
            <!-- 缩略图 -->
            <div class="grid grid-cols-4 gap-4" v-if="currentImages.length > 1">
              <div v-for="(img, index) in currentImages" :key="index"
                class="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <img :src="img" :alt="`${product.name} ${index + 1}`" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <!-- 产品信息 -->
          <div class="space-y-6">
            <div>
              <h1 class="text-4xl font-bold text-primary mb-4">{{ product.name }}</h1>
              <p class="text-gray-600 text-lg leading-relaxed">{{ product.description }}</p>
            </div>

            <!-- 子产品 -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-primary mb-4">产品分类</h3>
              <div class="grid gap-4">
                <div v-for="sub in product.subProducts" :key="sub.id"
                  class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <img v-if="sub.image" :src="sub.image" :alt="sub.name" class="w-20 h-20 object-cover rounded-lg" />
                  <div class="flex-1">
                    <h4 class="font-semibold text-primary">{{ sub.name }}</h4>
                    <p class="text-sm text-gray-600">{{ sub.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 产品特点 -->
            <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
              <h3 class="text-xl font-bold mb-4">产品特点</h3>
              <ul class="space-y-2">
                <li v-for="(feature, index) in product.features" :key="index" class="flex items-start gap-2">
                  <span class="text-secondary">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 详细参数 -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 标签页切换 -->
        <div class="flex gap-4 mb-8 border-b">
          <button @click="activeTab = 'specs'" class="pb-4 px-2 font-semibold transition-colors relative"
            :class="activeTab === 'specs' ? 'text-primary' : 'text-gray-600 hover:text-primary'">
            规格参数
            <div v-if="activeTab === 'specs'" class="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
          </button>
          <button @click="activeTab = 'faq'" class="pb-4 px-2 font-semibold transition-colors relative"
            :class="activeTab === 'faq' ? 'text-primary' : 'text-gray-600 hover:text-primary'">
            常见问题
            <div v-if="activeTab === 'faq'" class="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
          </button>
        </div>

        <!-- 规格参数表格 -->
        <div v-show="activeTab === 'specs'" class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table class="w-full">
            <thead class="bg-primary text-white">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">编号</th>
                <th class="px-6 py-4 text-left font-semibold">名称</th>
                <th class="px-6 py-4 text-left font-semibold">型号</th>
                <th class="px-6 py-4 text-left font-semibold">单位</th>
                <th class="px-6 py-4 text-right font-semibold">标准价(元)</th>
                <th class="px-6 py-4 text-right font-semibold">优惠价(元)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="spec in productSpecs" :key="spec.number" class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 text-gray-600">{{ spec.number }}</td>
                <td class="px-6 py-4 font-semibold text-primary">{{ spec.name }}</td>
                <td class="px-6 py-4 text-gray-600">{{ spec.model }}</td>
                <td class="px-6 py-4 text-gray-600">{{ spec.unit }}</td>
                <td class="px-6 py-4 text-gray-400 line-through text-right">{{ spec.standardPrice }}</td>
                <td class="px-6 py-4 text-secondary font-bold text-right">{{ spec.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 常见问题 -->
        <div v-show="activeTab === 'faq'" class="space-y-4">
          <div v-for="(item, index) in product.faq" :key="index" class="bg-white rounded-2xl shadow-lg p-6">
            <h4 class="font-bold text-primary mb-3">{{ item.question }}</h4>
            <p class="text-gray-600 leading-relaxed">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部操作 -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <button @click="goBack" class="btn-secondary">
            返回产品列表
          </button>
          <button @click="router.push('/contact')" class="btn-primary">
            咨询报价
          </button>
        </div>
      </div>
    </section>
  </div>
</template>