<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { products as defaultProducts } from '../api/productList.js'
import { usePriceStore } from '../stores/priceStore.js'

const router = useRouter()
const isAuthenticated = ref(false)
const activeProduct = ref(null)
const editedPrices = ref({})
const saveStatus = ref('')
const priceStore = usePriceStore()

onMounted(() => {
  const auth = localStorage.getItem('adminAuth')
  if (auth !== 'true') {
    router.push('/admin/login')
  } else {
    isAuthenticated.value = true
  }
})

const productsList = computed(() => {
  return Object.entries(defaultProducts).map(([id, data]) => ({
    id,
    name: data.name,
    specsCount: data.specs.length
  }))
})

const currentProductSpecs = computed(() => {
  if (!activeProduct.value) return []
  const specs = priceStore.getProductSpecs(activeProduct.value)
  const edited = editedPrices.value[activeProduct.value] || []

  return specs.map(spec => {
    const editedSpec = edited.find(p => p.number === spec.number)
    if (editedSpec) {
      return {
        ...spec,
        standardPrice: editedSpec.standardPrice,
        price: editedSpec.price
      }
    }
    return spec
  })
})

const selectProduct = (productId) => {
  activeProduct.value = productId
  const specs = priceStore.getProductSpecs(productId)
  editedPrices.value[productId] = specs.map(spec => ({
    number: spec.number,
    standardPrice: spec.standardPrice,
    price: spec.price
  }))
}

const updateStandardPrice = (number, newPrice) => {
  if (!editedPrices.value[activeProduct.value]) return
  const spec = editedPrices.value[activeProduct.value].find(p => p.number === number)
  if (spec) {
    spec.standardPrice = newPrice
  }
}

const updatePrice = (number, newPrice) => {
  if (!editedPrices.value[activeProduct.value]) return
  const spec = editedPrices.value[activeProduct.value].find(p => p.number === number)
  if (spec) {
    spec.price = newPrice
  }
}

const savePrices = () => {
  if (!activeProduct.value) return
  priceStore.updateProductPrice(activeProduct.value, editedPrices.value[activeProduct.value])
  saveStatus.value = 'saved'
  setTimeout(() => {
    saveStatus.value = ''
  }, 2000)
}

const saveAllPrices = () => {
  Object.keys(editedPrices.value).forEach(productId => {
    priceStore.updateProductPrice(productId, editedPrices.value[productId])
  })
  saveStatus.value = 'allSaved'
  setTimeout(() => {
    saveStatus.value = ''
  }, 2000)
}

const resetToDefault = () => {
  if (confirm('确定要重置所有价格为默认值吗？')) {
    priceStore.resetToDefault()
    editedPrices.value = {}
    if (activeProduct.value) {
      selectProduct(activeProduct.value)
    }
    alert('已重置为默认价格')
  }
}

const logout = () => {
  localStorage.removeItem('adminAuth')
  router.push('/')
}
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50" v-if="isAuthenticated">
    <!-- 顶部导航 -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            <h1 class="text-2xl font-bold text-primary">价格管理系统</h1>
            <span class="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">管理员模式</span>
          </div>
          <button @click="logout"
            class="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
            退出登录
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- 产品列表 -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h2 class="text-xl font-bold text-primary mb-4">产品列表</h2>
            <div class="space-y-2">
              <button v-for="product in productsList" :key="product.id" @click="selectProduct(product.id)"
                class="w-full text-left px-4 py-3 rounded-lg transition-colors"
                :class="activeProduct === product.id ? 'bg-primary text-white' : 'hover:bg-gray-100'">
                <div class="font-semibold">{{ product.name }}</div>
                <div class="text-sm" :class="activeProduct === product.id ? 'text-white/80' : 'text-gray-500'">
                  {{ product.specsCount }} 个规格
                </div>
              </button>
            </div>

            <div class="mt-6 pt-6 border-t space-y-2">
              <button @click="saveAllPrices" class="w-full btn-primary"
                :disabled="Object.keys(editedPrices).length === 0">
                保存所有修改
              </button>
              <button @click="resetToDefault"
                class="w-full px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                重置为默认价格
              </button>
            </div>
          </div>
        </div>

        <!-- 价格编辑 -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div v-if="!activeProduct" class="text-center py-12">
              <div class="text-6xl mb-4">📋</div>
              <p class="text-gray-500">请从左侧选择一个产品进行价格编辑</p>
            </div>

            <div v-else>
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-primary">
                  编辑价格 - {{ defaultProducts[activeProduct]?.name }}
                </h2>
                <div class="flex items-center gap-4">
                  <span v-if="saveStatus === 'saved'" class="text-green-600 text-sm">
                    ✓ 已保存
                  </span>
                  <span v-if="saveStatus === 'allSaved'" class="text-green-600 text-sm">
                    ✓ 所有修改已保存
                  </span>
                  <button @click="savePrices" class="btn-primary">
                    保存此产品
                  </button>
                </div>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-primary text-white">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold">编号</th>
                      <th class="px-4 py-3 text-left font-semibold">名称</th>
                      <th class="px-4 py-3 text-left font-semibold">型号</th>
                      <th class="px-4 py-3 text-center font-semibold">单位</th>
                      <th class="px-4 py-3 text-right font-semibold">标准价</th>
                      <th class="px-4 py-3 text-right font-semibold">优惠价</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="spec in currentProductSpecs" :key="spec.number" class="hover:bg-gray-50">
                      <td class="px-4 py-3 text-gray-600">{{ spec.number }}</td>
                      <td class="px-4 py-3 font-semibold text-primary">{{ spec.name }}</td>
                      <td class="px-4 py-3 text-gray-600">{{ spec.model }}</td>
                      <td class="px-4 py-3 text-center text-gray-600">{{ spec.unit }}</td>
                      <td class="px-4 py-3 text-right">
                        <input type="text" :value="spec.standardPrice"
                          @input="(e) => updateStandardPrice(spec.number, e.target.value)"
                          class="w-24 px-3 py-2 border border-gray-300 rounded-lg text-right font-semibold text-gray-600 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none" />
                      </td>
                      <td class="px-4 py-3 text-right">
                        <input type="text" :value="spec.price" @input="(e) => updatePrice(spec.number, e.target.value)"
                          class="w-24 px-3 py-2 border border-gray-300 rounded-lg text-right font-semibold text-secondary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-blue-800">
                  💡 提示：修改价格后点击"保存此产品"或"保存所有修改"按钮来应用更改。更改会立即生效到产品详情页面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>