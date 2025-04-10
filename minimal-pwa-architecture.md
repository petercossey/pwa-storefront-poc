# Minimal PWA Architecture

## Overview
This document outlines the technical architecture for a minimal, production-ready Progressive Web Application (PWA) with TypeScript, an API middleware layer, and Auth0 integration.

## Goals
- Maintain type safety between frontend and backend
- Support authentication via Auth0
- Enable edge deployment capabilities
- Use modern, lightweight tooling

## Architecture

### Project Structure
```
my-pwa/
├── packages/
│   └── api/               # Shared API types
├── frontend/              # Preact PWA
├── middleware/            # Edge middleware
├── package.json           # Root package.json
└── pnpm-workspace.yaml    # PNPM workspace config
```

### Tech Stack

#### Tooling
- **Package Manager**: pnpm (with workspaces)
- **Build Tool**: Vite
- **Language**: TypeScript throughout

#### Frontend
- **Framework**: Preact (lightweight React alternative)
- **State Management**: Zustand
- **Authentication**: Auth0 SPA SDK

#### Middleware
- **Framework**: Hono (edge-compatible)
- **Server**: @hono/node-server (for local development)
- **Authentication**: JWT validation for Auth0 tokens

#### Shared
- **API Contract**: TypeScript interfaces shared between frontend and middleware

## Technical Specifications

### API Package
Contains minimal shared types to ensure type safety between frontend and middleware:
- API route constants
- Request/response interface definitions
- Common domain models

### Frontend Application
- Minimal Preact setup with TypeScript
- Auth0 integration for secure authentication
- Zustand store for state management
- Development proxy to middleware

### Middleware Layer
- Hono server with CORS support
- JWT validation for Auth0 tokens
- Health check endpoint
- API implementation with TypeScript

### Authentication Flow
1. User authenticates via Auth0 in the frontend
2. JWT token is obtained and stored in memory
3. Token is sent with each API request
4. Middleware validates token on protected routes

## Development Workflow
1. Run `pnpm install` at the root to install all dependencies
2. Configure Auth0 credentials in frontend and middleware
3. Run `pnpm dev` to start both frontend and middleware in development mode
4. Access the application at http://localhost:5173

## Deployment Considerations
- Frontend can be deployed to any static hosting (Netlify, Vercel, Cloudflare Pages)
- Middleware can be deployed to Node.js environments or adapted for edge platforms
- Environment variables must be configured for Auth0 credentials in production

## Future Expansion Areas
- Database integration
- Additional shared libraries
- Automated testing
- CI/CD pipeline
- Monitoring and logging
- Build optimization
