# SEO Export Site

这是一个 Next.js 项目，用于创建 SEO 友好的导出网站。

## 项目结构

```
seo-export-site/
├── app/                 # Next.js 应用目录
│   ├── page.tsx        # 首页
│   ├── products/       # 产品页面
│   ├── blog/           # 博客页面
│   ├── contact/        # 联系页面
│   └── layout.tsx      # 根布局
├── lib/                # 工具库
│   ├── products.ts     # 产品相关函数
│   └── blog.ts         # 博客相关函数
├── package.json        # 项目依赖
└── next.config.js      # Next.js 配置
```

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目。

### 生产构建
```bash
npm run build
npm start
```

## 功能特性

- 📄 首页（Home）
- 🛍️ 产品列表页面（Products）
- 📝 动态产品详情页（Dynamic Product）
- 📰 博客页面（Blog）
- 📧 联系页面（Contact）

## 开发

这是一个 [Next.js](https://nextjs.org/) 项目，使用 TypeScript。

## 许可证

MIT
