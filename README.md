# MikeyX — Master Programming From Zero

The deepest learning ecosystem for absolute beginners. Go from zero knowledge to professional developer level.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Full-Stack)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 + Shadcn/ui
- **Animations**: Framer Motion
- **State**: Zustand (client) + React Query (server)
- **Database**: Neon PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js v5 (Google, GitHub, Credentials)
- **Code Editor**: Monaco Editor
- **Content**: MDX
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Neon database URL and auth secrets

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/              # Next.js App Router (pages + API routes)
│   ├── (marketing)/  # Public pages
│   ├── (auth)/       # Login, Register
│   ├── (dashboard)/  # Learning dashboard
│   ├── (admin)/      # Admin panel
│   └── api/          # API Route Handlers
├── components/       # Reusable UI components
├── features/         # Feature-based business logic
├── server/           # Server-only code (DB, auth, actions)
├── stores/           # Zustand client state
├── hooks/            # Shared custom hooks
├── lib/              # Utilities and constants
├── types/            # TypeScript type definitions
└── content/          # MDX lesson content
```

## Development Phases

- [x] Phase 1: Project initialization
- [ ] Phase 2: Application architecture
- [ ] Phase 3: UI foundation
- [ ] Phase 4: Authentication
- [ ] Phase 5: Database schema
- [ ] Phase 6: Learning system
- [ ] Phase 7: First learning path
- [ ] Phase 8: Knowledge graph
- [ ] Phase 9: Progress engine
- [ ] Phase 10: Practice system
- [ ] Phase 11: Dashboard
- [ ] Phase 12: Admin panel
