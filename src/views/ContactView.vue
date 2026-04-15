<script setup>
import { ref } from 'vue'

const contactInfo = {
  company: '宿州淮宇节能科技有限公司',
  address: '安徽省宿州市高新技术产业开发区创新路88号',
  phone: '0557-8888888',
  mobile: '138-8888-8888',
  email: 'info@suzhouhuaiyu.com',
  website: 'www.suzhouhuaiyu.com',
  wechat: '淮宇节能',
  qq: '88888888',
  workingHours: '周一至周六 8:30-17:30'
}

const formData = ref({
  name: '',
  phone: '',
  company: '',
  email: '',
  product: '',
  message: ''
})

const selectedProduct = ref('')
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const products = [
  '铝合金节能管道',
  '管道连接件',
  '阀门系列',
  '过滤器',
  '其他产品'
]

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.phone || !formData.value.message) {
    alert('请填写必填信息')
    return
  }

  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true
    formData.value = {
      name: '',
      phone: '',
      company: '',
      email: '',
      product: '',
      message: ''
    }
    setTimeout(() => {
      submitSuccess.value = false
    }, 3000)
  }, 1500)
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  alert('已复制到剪贴板')
}
</script>

<template>
  <div class="pt-20">
    <!-- 页面标题 -->
    <section class="py-16 bg-gradient-to-br from-primary to-accent text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
        <p class="text-xl opacity-90">期待与您的合作</p>
      </div>
    </section>

    <!-- 联系方式 -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- 联系信息 -->
          <div class="space-y-8">
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-primary mb-6">联系方式</h3>

              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">🏢</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">公司名称</h4>
                    <p class="text-gray-600">{{ contactInfo.company }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">📍</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">公司地址</h4>
                    <p class="text-gray-600">{{ contactInfo.address }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">📞</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">联系电话</h4>
                    <p class="text-gray-600">
                      <span class="text-primary font-medium">{{ contactInfo.phone }}</span>
                      （座机）
                    </p>
                    <p class="text-gray-600">
                      <span class="text-primary font-medium">{{ contactInfo.mobile }}</span>
                      （手机）
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">✉️</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">电子邮箱</h4>
                    <p class="text-gray-600">{{ contactInfo.email }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">🌐</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">公司网站</h4>
                    <p class="text-gray-600">{{ contactInfo.website }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">💬</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">微信</h4>
                    <p class="text-gray-600">{{ contactInfo.wechat }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">📱</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">QQ</h4>
                    <p class="text-gray-600">{{ contactInfo.qq }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">⏰</div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 mb-1">工作时间</h4>
                    <p class="text-gray-600">{{ contactInfo.workingHours }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 二维码区域 -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-xl font-bold text-primary mb-6">扫码关注我们</h3>
              <div class="flex items-center space-x-8">
                <div class="w-40 h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                  <div class="text-gray-400 text-sm">微信二维码</div>
                </div>
                <div>
                  <p class="text-gray-600 mb-2">扫描二维码</p>
                  <p class="text-sm text-gray-500">了解更多产品资讯</p>
                  <p class="text-sm text-gray-500">获取最新优惠信息</p>
                </div>
              </div>
            </div>

            <!-- 快速咨询 -->
            <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
              <h3 class="text-xl font-bold mb-4">快速咨询</h3>
              <p class="opacity-90 mb-6">如果您有任何疑问或需要帮助，请随时联系我们</p>
              <div class="space-y-3">
                <p class="flex items-center">
                  <span class="text-2xl mr-3">📞</span>
                  <span class="text-xl font-bold">{{ contactInfo.phone }}</span>
                </p>
                <p class="flex items-center">
                  <span class="text-2xl mr-3">📱</span>
                  <span class="text-xl font-bold">{{ contactInfo.mobile }}</span>
                </p>
              </div>
            </div>
          </div>

          <!-- 联系表单 -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-primary mb-6">在线留言</h3>
            <p class="text-gray-600 mb-8">请填写以下信息，我们将在24小时内与您联系</p>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    您的姓名 <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    联系电话 <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                    placeholder="请输入您的电话"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    公司名称
                  </label>
                  <input
                    v-model="formData.company"
                    type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                    placeholder="请输入公司名称"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    电子邮箱
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                    placeholder="请输入您的邮箱"
                  />
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">
                  感兴趣的产品
                </label>
                <select
                  v-model="formData.product"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-white"
                >
                  <option value="">请选择产品类型</option>
                  <option v-for="product in products" :key="product" :value="product">
                    {{ product }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">
                  留言内容 <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 resize-none"
                  placeholder="请输入您的留言内容..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">提交中...</span>
                <span v-else>提交留言</span>
              </button>

              <div v-if="submitSuccess" class="p-4 bg-green-100 text-green-700 rounded-lg text-center">
                ✅ 留言提交成功！我们将在24小时内与您联系
              </div>

              <div v-if="submitError" class="p-4 bg-red-100 text-red-700 rounded-lg text-center">
                ❌ 提交失败，请稍后重试
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图区域 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">公司位置</h2>
          <p class="text-gray-600">欢迎莅临参观洽谈</p>
        </div>
        <div class="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
          <div class="text-center">
            <div class="text-6xl mb-4">🗺️</div>
            <p class="text-gray-600">地图位置</p>
            <p class="text-sm text-gray-500 mt-2">{{ contactInfo.address }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务承诺 -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">服务承诺</h2>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">⏰</span>
            </div>
            <h3 class="text-lg font-bold text-primary mb-2">快速响应</h3>
            <p class="text-gray-600 text-sm">24小时内回复您的咨询</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">📋</span>
            </div>
            <h3 class="text-lg font-bold text-primary mb-2">专业方案</h3>
            <p class="text-gray-600 text-sm">提供针对性的产品方案</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">🚚</span>
            </div>
            <h3 class="text-lg font-bold text-primary mb-2">准时交付</h3>
            <p class="text-gray-600 text-sm">确保产品按时送达</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">🔧</span>
            </div>
            <h3 class="text-lg font-bold text-primary mb-2">售后无忧</h3>
            <p class="text-gray-600 text-sm">完善的售后服务体系</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>