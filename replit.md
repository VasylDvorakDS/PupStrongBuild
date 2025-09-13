# Elite Bodybuilding Application

## Overview

This is a full-stack bodybuilding application built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database. The application serves as a comprehensive platform for fitness enthusiasts, providing bodybuilding information, training programs, nutrition guidance, and tips. The current implementation includes a landing page with navigation sections for training, nutrition, programs, and tips, with a responsive design using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript and Vite for fast development and building
- **UI Components**: shadcn/ui component library built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod resolvers for type-safe form validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development mode
- **Build**: esbuild for fast production bundling
- **API**: RESTful API structure with `/api` prefix routing
- **Error Handling**: Centralized error handling middleware with structured error responses

### Database Layer
- **Database**: PostgreSQL with Neon serverless database provider
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Drizzle Kit for database schema migrations and management
- **Validation**: Drizzle-Zod integration for runtime schema validation

### Authentication & Session Management
- **Session Store**: PostgreSQL-backed session storage using connect-pg-simple
- **Session Management**: Express session middleware for user authentication state

### Development Environment
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Type Safety**: Strict TypeScript configuration across the entire stack
- **Path Aliases**: Configured for clean imports (@/, @shared/, etc.)

### Deployment Architecture
- **Production Build**: Separate client (Vite) and server (esbuild) build processes
- **Static Assets**: Client builds to `dist/public` for serving static files
- **Server**: Compiled to `dist/index.js` for production deployment
- **Environment**: Environment variable configuration for database connections

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL provider for scalable database hosting
- **PostgreSQL**: Primary database system with UUID generation and advanced features

### UI & Design System
- **Radix UI**: Comprehensive set of low-level UI primitives for building design systems
- **shadcn/ui**: Pre-built component library with consistent styling and accessibility
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library for consistent iconography

### Development & Build Tools
- **Vite**: Frontend build tool with fast HMR and optimized production builds
- **esbuild**: Fast JavaScript bundler for server-side code compilation
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

### Third-Party Libraries
- **TanStack Query**: Powerful data fetching and caching library for API management
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript schema validation library
- **date-fns**: Modern JavaScript date utility library
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx & tailwind-merge**: Utilities for conditional CSS class composition

### Development Integrations
- **Replit Plugins**: Development environment enhancements including error overlay, cartographer, and dev banner for Replit-based development