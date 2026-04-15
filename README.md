# 宿州淮宇节能科技有限公司官网

基于 Vue 3 + Vite + TailwindCSS 构建的企业展示网站

## 项目简介

本项目是宿州淮宇节能科技有限公司的官方企业介绍网站，主要展示公司形象、产品信息和服务能力。公司专注于空压机铝合金节能管道的研发、生产和销售，为工业用户提供高效、可靠的压缩空气输送解决方案。

## 技术栈

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite 5
- **路由管理**: Vue Router 4
- **样式框架**: TailwindCSS 3
- **字体**: Noto Serif SC + Inter

## 项目结构

```
suzhouhuaiyu/
├── src/
│   ├── components/     # 公共组件
│   │   └── NavBar.vue  # 导航栏组件
│   ├── views/          # 页面视图
│   │   ├── HomeView.vue      # 首页
│   │   ├── AboutView.vue     # 关于我们
│   │   ├── ProductsView.vue  # 产品中心
│   │   └── ContactView.vue   # 联系我们
│   ├── router/         # 路由配置
│   │   └── index.js
│   ├── App.vue         # 根组件
│   ├── main.js         # 入口文件
│   └── style.css       # 全局样式
├── public/             # 静态资源
├── index.html          # HTML入口
├── package.json        # 项目配置
├── vite.config.js      # Vite配置
├── tailwind.config.js  # Tailwind配置
└── .gitignore          # Git忽略配置
```

## 功能模块

### 1. 首页 (/)
- 公司品牌展示
- 核心数据统计（成立年份、团队规模、服务客户）
- 四大核心优势展示

### 2. 关于我们 (/about)
- 公司详细介绍
- 企业文化展示
- 发展历程时间线
- 认证与荣誉

### 3. 产品中心 (/products)
- 产品列表展示
- 产品详情与规格参数
- 产品优势介绍
- 应用场景展示

### 4. 联系我们 (/contact)
- 详细联系方式
- 在线留言表单
- 公司位置信息
- 服务承诺展示

## 开发指令

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 环境要求

- Node.js >= 14.18
- npm >= 5.6

## 公司信息

- **公司名称**: 宿州淮宇节能科技有限公司
- **主营业务**: 空压机铝合金节能管道研发、生产与销售
- **联系方式**:
  - 电话：13035007585
  - 邮箱：447358575@qq.com
  - 地址：安徽省萧县鸿宇节能建材城空压机节能管道库

## 特色功能

- 🎨 响应式设计，适配各种设备
- ⚡ 基于Vite的快速开发体验
- 🎯 清晰的单页应用路由结构
- 📱 移动端友好的导航菜单
- ✨ 流畅的页面切换动画
- 🔧 组件化开发，易于维护和扩展

## 许可证

Copyright © 2024 宿州淮宇节能科技有限公司. All rights reserved.
