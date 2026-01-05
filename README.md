# 🚀 Welcome to Z.ai Code Scaffold

A modern, production-ready web application scaffold powered by cutting-edge technologies, designed to accelerate your development with [Z.ai](https://chat.z.ai)'s AI-powered coding assistance.

## ✨ Technology Stack

This scaffold provides a robust foundation built with:

### 🎯 Core Framework

- ⚡ Next.js 15 - The React framework for production with App Router
- 📘 TypeScript 5 - Type-safe JavaScript for better developer experience
- 🎨 Tailwind CSS 4 - Utility-first CSS framework for rapid UI development

### 🧩 UI Components & Styling

- 🧩 shadcn/ui - High-quality, accessible components built on Radix UI
- 🎯 Lucide React - Beautiful & consistent icon library
- 🌈 Framer Motion - Production-ready motion library for React
- 🎨 Next Theme - Perfect dark mode in 2 lines of code

### 📋 Forms & Validation

- 🎣 React Hook Form - Performant forms with easy validation
- ✅ Zod - TypeScript-first schema validation

### 🔄 State Management & Data Fetching

- 🐻 Zustand - Simple, scalable state management
- 🔄 TanStack Query - Powerful data synchronization for React
- 🌐 Axios - Promise-based HTTP client

### 🗄️ Database & Backend

- 🗄️ Prisma - Next-generation Node.js and TypeScript ORM
- 🔐 NextAuth.js - Complete open-source authentication solution

### 🎨 Advanced UI Features

- 📊 TanStack Table - Headless UI for building tables and datagrids
- 🖱️ DND Kit - Modern drag and drop toolkit for React
- 📊 Recharts - Redefined chart library built with React and D3
- 🖼️ Sharp - High performance image processing

### 🌍 Internationalization & Utilities

- 🌍 Next Intl - Internationalization library for Next.js
- 📅 date-fns - Modern JavaScript date utility library
- 🪝 ReactUse - Collection of essential React hooks for modern development

## 🎯 Why This Scaffold?

- 🏎️ Fast Development - Pre-configured tooling and best practices
- 🎨 Beautiful UI - Complete shadcn/ui component library with advanced interactions
- 🔒 Type Safety - Full TypeScript configuration with Zod validation
- 📱 Responsive - Mobile-first design principles with smooth animations
- 🗄️ Database Ready - Prisma ORM configured for rapid backend development
- 🔐 Auth Included - NextAuth.js for secure authentication flow
- 📊 Data Visualization - Charts, tables, and drag-and-drop functionality
- 🌍 i18n Ready - Multi-language support with Next Intl
- 🚀 Production Ready - Optimized build and deployment settings
- 🤖 AI-Friendly - Structured codebase perfect for AI assistance

## 🚀 Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000 to see your application running.

## 🤖 Powered by Z.ai

This scaffold is optimized for use with [Z.ai](https://chat.z.ai) - your AI assistant for:

- 💻 Code Generation - Generate components, pages, and features instantly
- 🎨 UI Development - Create beautiful interfaces with AI assistance
- 🔧 Bug Fixing - Identify and resolve issues with intelligent suggestions
- 📝 Documentation - Auto-generate comprehensive documentation
- 🚀 Optimization - Performance improvements and best practices

Ready to build something amazing? Start chatting with Z.ai at [chat.z.ai](https://chat.z.ai) and experience the future of AI-powered development!

## 📁 Project Structure

\`\`\`
[Project structure will be displayed here]
\`\`\`

## 🎨 Available Features & Components

This scaffold includes a comprehensive set of modern web development tools:

### 🧩 UI Components (shadcn/ui)

- Layout: Card, Separator, Aspect Ratio, Resizable Panel
- Forms: Input, Textarea, Select, Checkbox, Radio Group, Switch
- Feedback: Alert, Toast (Sonner), Progress, Skeleton
- Navigation: Breadcrumb, Menubar, Navigation Menu, Pagination
- Overlay: Dialog, Sheet, Popover, Tooltip, Hover Card
- Data Display: Badge, Avatar, Calendar

### 📊 Advanced Data Features

- Table: Powerful data tables with sorting, filtering, pagination (TanStack Table)
- Chart: Beautiful visualizations with Recharts
- Forms: Type-safe forms with React Hook Form + Zod validation

### 🎨 Interactive Features

- Animation: Smooth micro-interactions with Framer Motion
- Drag & Drop: Modern drag-and-drop functionality with DND Kit
- Theme Switching: Built-in dark/light mode support

### 🔐 Backend Integration

- Authentication: Ready-to-use auth flows with NextAuth.js
- Database: Type-safe database operations with Prisma
- API Client: HTTP requests with Axios + TanStack Query
- State Management: Simple and scalable with Zustand

### 🌍 Production Features

- Internationalization: Multi-language support with Next Intl
- Image Optimization: Automatic image processing with Sharp
- Type Safety: End-to-end TypeScript with Zod validation
- Essential Hooks: 100+ useful React hooks with ReactUse for common patterns

## 🤝 Get Started with Z.ai

- Clone this scaffold to jumpstart your project
- Visit [chat.z.ai](https://chat.z.ai) to access your AI coding assistant
- Start building with intelligent code generation and assistance
- Deploy with confidence using the production-ready setup

Built with ❤️ for the developer community. Supercharged by [Z.ai](https://chat.z.ai) 🚀


## 🛡️ Security & Deployment (cPanel)

This project includes enterprise-grade security features optimized for cPanel/Node.js environments.

### 🔑 Environment Setup

1.  **Configure Environment Variables**:
    Create a `.env.local` file (local) or set these in your cPanel "Node.js App" settings:
    ```bash
    # Emali (Resend)
    RESEND_API_KEY=re_123...
    EMAIL_FROM="DevGuardian <team@yourdomain.com>"
    CONTACT_TO="team@yourdomain.com"

    # Cloudflare Turnstile
    NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAA...
    TURNSTILE_SECRET_KEY=0x4AAAA...

    # Security Limits
    RATE_LIMIT_MAX=5
    RATE_LIMIT_WINDOW_MS=3600000
    RATE_FILE_PATH=/tmp/contact-rate-limit.json # Ensure this path is writable
    LOG_PATH=/tmp/contact-security.log
    ```

### 📦 Dependencies
If you deploy to cPanel:
1.  Navigate to your project root.
2.  Run `npm install` (ensure `resend` is installed).
3.  Build the project `npm run build`.

### 🛡️ Security Features
-   **Turnstile Captcha**: Custom lightweight wrapper (no heavy React libs). Checks verification server-side.
-   **Rate Limiting**: Custom **Async/Non-blocking** file-based limiter. High performance, no race conditions. Defaults to 5 req/hour.
-   **Honeypot**: Hidden fields to silently trap bots.
-   **Headers**: Middleware enforces `Content-Security-Policy`, `HSTS`, `X-Frame-Options`, etc.
    -   *Note*: If Turnstile fails to load, check your CSP `frame-src`.

### 🧪 Testing
1.  **Verify Domain**: Ensure your domain is verified in Resend Dashboard.
2.  **Manual Test**: Submit the form. You should receive a confirmation email.
3.  **Logs**: Check `/tmp/contact-security.log` (or your configured path) for status codes. **No PII is logged**.
