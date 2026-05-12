<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const companyInfo = {
  name: '宿州淮宇节能科技有限公司',
  tagline: '空压机铝合金节能管道专家',
  description: '专注节能管道系统研发与生产，为工业用户提供高效、可靠的压缩空气输送解决方案',
  founded: '2024年',
  departments: '100%',
  repurchaseRate: '90%'
}
const features = reactive([
  { icon: '⚡', title: '节能高效', description: '采用优质铝合金材料，内壁光滑阻力小，大幅降低压降损失' },
  { icon: '🏆', title: '品质卓越', description: '严格的质量控制体系，确保每一件产品都达到行业最高标准' },
  { icon: '💡', title: '技术领先', description: '拥有多项专利技术，持续创新引领行业发展' },
  { icon: '🤝', title: '服务完善', description: '专业的售后服务团队，为客户提供全方位的技术支持' }
])

const products = reactive([
  { name: '铝合金节能管道', description: '采用优质铝合金材料，内壁光滑阻力小，大幅降低压降损失，节能效果显著', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aluminum%20air%20compressor%20pipes%20system&image_size=square' },
  { name: '管道配件', description: '配套齐全的管道接头、弯头、三通等配件，确保系统安装便捷、密封可靠', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pipe%20fittings%20and%20connectors&image_size=square' },
  { name: '管道安装服务', description: '专业的管道设计与安装服务，为客户提供一站式解决方案', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pipe%20installation%20service%20industrial&image_size=square' }
])

const cases = reactive([
  { title: '汽车制造行业', description: '为某大型汽车制造商提供了全套空压机铝合金节能管道系统，帮助客户降低了15%的能源消耗，提高了生产效率', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20manufacturing%20factory%20with%20air%20compressor%20system&image_size=landscape_16_9' },
  { title: '电子加工行业', description: '为电子加工厂设计安装了高精度压缩空气输送系统，确保了生产过程中的空气质量和稳定性', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=electronics%20manufacturing%20clean%20room&image_size=landscape_16_9' },
  { title: '食品医药行业', description: '为食品加工厂提供了符合卫生标准的不锈钢铝合金混合管道系统，满足了严格的食品安全要求', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=food%20processing%20plant%20clean%20environment&image_size=landscape_16_9' },
  { title: '纺织印染行业', description: '为纺织企业设计了高效的压缩空气输送系统，帮助客户优化了生产流程，降低了运营成本', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=textile%20manufacturing%20plant&image_size=landscape_16_9' }
])

const testimonials = reactive([
  { name: '张经理', company: '某汽车制造有限公司', position: '设备部经理', content: '淮宇的铝合金节能管道系统确实帮助我们降低了能源消耗，安装过程专业高效，售后服务也很及时。', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20businessman%20portrait&image_size=square' },
  { name: '李工程师', company: '电子科技有限公司', position: '工艺工程师', content: '使用淮宇的管道系统后，我们的压缩空气品质得到了显著提升，产品合格率也有所提高。', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20engineer%20portrait&image_size=square' },
  { name: '王总', company: '食品加工企业', position: '总经理', content: '淮宇的产品质量可靠，服务专业，是值得信赖的合作伙伴。', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20woman%20portrait&image_size=square' }
])

const partners = reactive([
  { name: '合作伙伴1', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20company%20logo%20blue%20professional&image_size=square' },
  { name: '合作伙伴2', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20company%20logo%20green%20professional&image_size=square' },
  { name: '合作伙伴3', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20company%20logo%20red%20professional&image_size=square' },
  { name: '合作伙伴4', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20company%20logo%20purple%20professional&image_size=square' },
  { name: '合作伙伴5', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20company%20logo%20orange%20professional&image_size=square' },
  { name: '合作伙伴6', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20company%20logo%20teal%20professional&image_size=square' }
])

const newList = reactive([
  {
    title: '淮宇节能科技荣获" 节能技术创新奖"', date: '2024-06-15',
    content: '近日，宿州淮宇节能科技有限公司凭借其在空压机铝合金节能管道领域的技术创新，荣获了行业颁发的"节能技术创新奖"。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=award%20ceremony%20business%20event&image_size=square'
  }, {
    title: '公司新厂房正式投产', date: '2024-05-20', content: '淮宇节能科技新厂房于5月20日正式投产，新厂房配备了先进的生产设备，年产能将提升50%。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20industrial%20factory%20opening&image_size=square'
  }, {
    title: '2024年工业节能技术发展趋势', date: '2024-04-10',
    content: '随着全球环保意识的提高，工业节能技术正迎来新的发展机遇，铝合金节能管道作为重要的节能技术之一，市场需求持续增长。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20technology%20trends&image_size=square'
  }])
const navigateTo = (path) => {
  router.push(path)
}

onMounted(() => {
  // 添加平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // 添加滚动动画效果
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 优化卡片悬停效果 */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

<template>
  <div>
    <!-- Hero 区域 -->
    <section
      class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent overflow-hidden pt-20">
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
            <!-- 强调深耕 -->
            <div class="text-4xl md:text-5xl font-bold text-secondary">{{ companyInfo.founded }}</div>
            <div class="text-sm md:text-base opacity-80 mt-2">深耕行业始于</div>
          </div>
          <div class="text-center">
            <!-- 强调职能全覆盖，而不是人数 -->
            <div class="text-4xl md:text-5xl font-bold text-secondary">{{ companyInfo.departments }}+</div>
            <div class="text-sm md:text-base opacity-80 mt-2">资深专家占比</div>
          </div>
          <div class="text-center">
            <!-- 高复购率是最强背书 -->
            <div class="text-4xl md:text-5xl font-bold text-secondary">{{ companyInfo.repurchaseRate }}<span
                class="text-2xl">%</span></div>
            <div class="text-sm md:text-base opacity-80 mt-2">客户续约/复购率</div>
          </div>
        </div>

        <button @click="navigateTo('/products')" class="btn-primary text-lg">
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
    <!-- <section class="py-24 bg-gradient-to-br from-primary to-primary/90 text-white"> -->
    <section class="py-24 bg-gradient-to-br">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">为什么选择我们</h2>
          <p class="text-xl opacity-90">专业 · 品质 · 节能 · 服务</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index"
            class="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 card-hover">
            <div class="text-5xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
            <p class="opacity-90">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="py-24 bg-[#f0f4f8]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-primary mb-6">关于我们</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              宿州淮宇节能科技有限公司成立于2024年，是一家专注于空压机铝合金节能管道研发、生产与销售的高科技企业。公司位于安徽省萧县鸿宇节能建材城，拥有现代化的生产基地和专业的研发团队。
            </p>
            <p class="text-gray-600 mb-8 leading-relaxed">
              我们致力于为工业用户提供高效、可靠的压缩空气输送解决方案，通过不断创新和技术升级，为客户创造更大的价值。公司产品广泛应用于汽车制造、电子加工、食品医药、纺织印染等多个行业。
            </p>
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <h3 class="text-xl font-bold text-primary mb-2">我们的使命</h3>
                <p class="text-gray-600">通过技术创新，为客户提供节能高效的压缩空气输送解决方案，助力工业绿色发展。</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <h3 class="text-xl font-bold text-primary mb-2">我们的愿景</h3>
                <p class="text-gray-600">成为国内领先的空压机铝合金节能管道供应商，为工业节能事业做出更大贡献。</p>
              </div>
            </div>
            <button @click="navigateTo('/about')" class="btn-secondary">
              了解更多
            </button>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20industrial%20factory%20with%20aluminum%20pipes%20production%20line&image_size=landscape_16_9"
              alt="公司生产基地" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- 核心产品 -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary mb-4">核心产品</h2>
          <p class="text-xl text-gray-600">高品质空压机铝合金节能管道解决方案</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(product, index) in products" :key="index"
            class="bg-[#f0f4f8] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 card-hover">
            <div class="h-64 overflow-hidden">
              <img :src="product.image" :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-primary mb-3">{{ product.name }}</h3>
              <p class="text-gray-600 mb-6">{{ product.description }}</p>
              <button @click="navigateTo('/products')"
                class="text-primary font-semibold flex items-center hover:text-secondary transition-colors">
                查看详情
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button @click="navigateTo('/products')" class="btn-primary">
            查看全部产品
          </button>
        </div>
      </div>
    </section>

    <!-- 成功案例 -->
    <section class="py-24 bg-[#f0f4f8]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary mb-4">成功案例</h2>
          <p class="text-xl text-gray-600">我们为各行业客户提供的解决方案</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(case_, index) in cases" :key="index"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 card-hover">
            <div class="grid md:grid-cols-2">
              <div class="h-64 md:h-auto overflow-hidden">
                <img :src="case_.image" :alt="case_.title" class="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-primary mb-3">{{ case_.title }}</h3>
                <p class="text-gray-600 mb-4">{{ case_.description }}</p>
                <div class="flex items-center text-secondary font-semibold">
                  <span>查看详情</span>
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary mb-4">客户评价</h2>
          <p class="text-xl text-gray-600">听听我们的客户怎么说</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index"
            class="bg-[#f0f4f8] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 card-hover">
            <div class="flex items-center mb-6">
              <div class="text-yellow-400 flex">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">"{{ testimonial.content }}"</p>
            <div class="flex items-center">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <h4 class="font-bold text-primary">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600">{{ testimonial.position }}, {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻动态 -->
    <!-- <section class="py-24 bg-[#f0f4f8]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary mb-4">新闻动态</h2>
          <p class="text-xl text-gray-600">了解行业最新资讯和公司动态</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(news, index) in newList" :key="index"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 card-hover">
            <div class="h-48 overflow-hidden">
              <img :src="news.image" :alt="news.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="text-sm text-gray-500 mb-2">{{ news.date }}</div>
              <h3 class="text-xl font-bold text-primary mb-3">{{ news.title }}</h3>
              <p class="text-gray-600 mb-4">{{ news.content }}</p>
              <div class="flex items-center text-secondary font-semibold">
                <span>阅读更多</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 合作伙伴 -->
    <!-- <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary mb-4">合作伙伴</h2>
          <p class="text-xl text-gray-600">我们与行业领先企业的合作关系</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div v-for="(partner, index) in partners" :key="index"
            class="bg-[#f0f4f8] rounded-xl p-6 flex items-center justify-center h-32 hover:shadow-md transition-all duration-300 card-hover">
            <img :src="partner.logo" :alt="partner.name" class="max-h-20 max-w-full object-contain" />
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>