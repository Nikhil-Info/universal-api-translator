# Universal API Translator

> Transform APIs seamlessly with AI-powered intelligence. Convert between OpenAPI, GraphQL, SOAP, and gRPC with automatic SDK generation.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

- **🔄 Universal Conversion**: Convert between OpenAPI, GraphQL, SOAP, and gRPC seamlessly
- **🤖 AI-Powered Engine**: Intelligent parsing and translation using state-of-the-art LLMs
- **📦 SDK Generation**: Auto-generate client SDKs for Node, Python, Go, Java, C#, and more
- **🛡️ Type Safety**: Guaranteed type safety with TypeScript interfaces and Pydantic models
- **🌐 Standards Compliant**: Fully compliant with OpenAPI 3.1, GraphQL introspection, and WSDL 2.0
- **⚡ CLI Integration**: Powerful CLI tool for CI/CD pipeline integration
- **🎨 Interactive Playground**: Try conversions in real-time with our web interface

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **pnpm** 8+
- **Python** 3.11+ (for backend)
- **Docker** & Docker Compose (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/universal-api-translator.git
cd universal-api-translator

# Install dependencies
pnpm install

# Start development server
cd apps/frontend
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
universal-api-translator/
├── apps/
│   ├── frontend/          # Next.js 16 application
│   │   ├── src/
│   │   │   ├── app/       # App router pages
│   │   │   ├── components/ # React components
│   │   │   └── lib/       # Utilities and helpers
│   │   └── public/        # Static assets
│   └── backend/           # FastAPI backend (optional)
├── packages/              # Shared packages
└── content/              # MDX blog content
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend (Optional)
- **Framework**: FastAPI
- **Database**: PostgreSQL
- **Cache**: Redis
- **Task Queue**: Celery
- **ORM**: SQLAlchemy

## 📝 Environment Variables

Create a `.env.local` file in `apps/frontend`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Authentication (if using)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
```

## 🎯 Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript compiler

# Testing
pnpm test             # Run tests
pnpm test:watch       # Run tests in watch mode
```

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/universal-api-translator)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy!

### Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access the application
open http://localhost:3000
```

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📚 Documentation

- **[Getting Started](docs/getting-started.md)** - Setup and installation guide
- **[API Reference](docs/api-reference.md)** - Complete API documentation
- **[CLI Guide](docs/cli-guide.md)** - Command-line interface usage
- **[Contributing](CONTRIBUTING.md)** - Contribution guidelines

## 🎨 Features Showcase

### Interactive Playground
Try API conversions in real-time with our interactive playground at `/playground`

### Supported Formats
- ✅ OpenAPI 3.0 & 3.1
- ✅ GraphQL Schema Definition Language
- ✅ gRPC Protocol Buffers
- ✅ SOAP/WSDL 1.1 & 2.0
- ✅ REST API Documentation

### SDK Generation
Generate client SDKs in:
- TypeScript/JavaScript
- Python
- Go
- Java
- C#
- Ruby
- PHP

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

- **Website**: [https://universal-api-translator.com](https://universal-api-translator.com)
- **Email**: support@universal-api-translator.com
- **Twitter**: [@universalapi](https://twitter.com/universalapi)
- **Discord**: [Join our community](https://discord.gg/yourserver)

## 🗺️ Roadmap

- [ ] VS Code Extension
- [ ] Browser Extension
- [ ] API Validation & Testing
- [ ] Team Collaboration Features
- [ ] Enterprise SSO Support
- [ ] On-premise Deployment Option

---

Made with ❤️ by the Universal API Translator Team
