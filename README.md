# Universal API Translator

A powerful SaaS that converts any API format to any other API format using AI.

## Tech Stack

- **Frontend**: Next.js 15, TailwindCSS, shadcn/ui, Monaco Editor
- **Backend**: FastAPI, SQLAlchemy, PostgreSQL, Redis, Celery
- **Infrastructure**: Docker, Vercel, Fly.io

## Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- pnpm

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd universal-api-translator
```

### 2. Backend Setup

```bash
cd apps/backend
# Create .env file
cp .env.example .env
# Install dependencies
pip install -r requirements.txt
# Run with Docker
docker-compose up --build
```

### 3. Frontend Setup

```bash
cd apps/frontend
# Install dependencies
pnpm install
# Run development server
pnpm dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8000`.

## Environment Variables

### Backend (.env)

```
DATABASE_URL=postgresql://user:password@db:5432/universal_translator
REDIS_URL=redis://redis:6379/0
OPENAI_API_KEY=sk-...
CLERK_SECRET_KEY=...
STRIPE_SECRET_KEY=...
```

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
```

## Features

- **Universal Conversion**: OpenAPI, GraphQL, SOAP, gRPC
- **AI-Powered**: Uses LLMs for intelligent translation
- **SDK Generation**: Auto-generate clients for multiple languages
- **Monaco Editor**: Professional code editing experience
