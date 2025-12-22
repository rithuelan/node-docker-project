# Node.js Docker Production App

A **production-ready Node.js application** using Redis for session management, fully dockerized, with CI/CD workflow, automated testing, and monitoring/logging setup.

---
# 1. Purpose of the Project

- The main goal of this project is to show how to build a robust backend service using:

- Node.js & Express for server-side logic

- Redis for session management and caching

- Docker & Docker Compose for containerization

- CI/CD pipelines for automated testing and deployment

- Monitoring & Logging for production observability

- This setup mirrors how production systems are designed in real enterprise environments.

# 2. Why Node.js?

- Node.js is event-driven, non-blocking, and highly performant for I/O-heavy applications.

- Using Express.js, we can quickly build REST APIs.

- Modern ES Modules (import/export) syntax ensures clean modular code.

# 3. Redis Integration

- Redis is a fast, in-memory data store. In this project, it is used for:

- Session Storage – Instead of storing user session data in memory, Redis stores it centrally. This allows multiple instances of the app to share sessions, which is critical in production.

- Caching – Redis can cache frequently accessed data to reduce database load (though in this project, it’s primarily used for sessions).

**Key advantages of using Redis:**

-- Extremely fast read/write performance

-- Supports key-value, hash, list, and other data structures

-- Works well with Docker containers

# 4. Docker & Containerization

- Docker allows us to package the application and all dependencies into a self-contained container.

**Why Docker?**

-- Eliminates "it works on my machine" problems

-- Ensures consistency across development, testing, and production

-- Makes scaling and deployment easier

# Docker Features Used in This Project:

-- Dockerfile – Defines how the app is built into an image.

-- Multi-stage builds – Optimizes image size by separating build and runtime stages.

-- Docker Compose – Manages multiple containers:

-- Node.js app container

-- Redis container

# 5. Application Architecture

The project follows a modular architecture:

src/app.js – Main Express app initialization

src/server.js – Starts the server and connects Redis

src/routes/ – Defines API endpoints

src/controllers/ – Handles business logic

src/services/ – Interacts with Redis for session/caching operations

src/middlewares/ – Logging, error handling, and session handling

src/config/ – Configuration for Redis, session, and monitoring tools

src/tests/ – Unit or integration tests for APIs

This separation ensures clean code, testability, and scalability.

6. Session Management

The app uses express-session with RedisStore.

Sessions are stored in Redis, allowing multiple containers or servers to share session data.

This is essential in production where scaling horizontally is common.

7. CI/CD (Continuous Integration / Continuous Deployment)

The project integrates GitHub Actions for automation:

On every push or pull request:

Code checkout

Dependency installation

Automated tests run

Docker image build

This ensures:

Code quality is maintained

Tests pass before deployment

Production images are ready to deploy automatically

8. Logging & Monitoring

Observability is critical in production. This project integrates:

Morgan – HTTP request logging

Winston – Application-level logging (info, warnings, errors)

Sentry – Error tracking and alerts

Health Checks – /health endpoint verifies if the app and Redis are running

Optional: APM tools like New Relic or DataDog can monitor CPU, memory, and request performance

This ensures that any production issue is detected and logged properly.

9. Environment Management

.env – Local development variables

.env.production – Production-specific variables (like secrets or Redis host in production)

Using environment variables ensures no sensitive information is hard-coded, and the app can be deployed in different environments without changing code.

10. Testing

The project includes a tests/ folder for unit and integration tests.

Example: Testing API endpoints using Supertest or Jest.

Automated testing is integrated into CI/CD so that only tested code is deployed.

11. Deployment Strategy

The app can be deployed via Docker containers in any environment (cloud VM, AWS ECS, Kubernetes).

Using Docker Compose, the app and Redis run together locally, but in production, you could scale them separately.

Multi-stage Docker build ensures the production image is small and optimized.

12. Real-World Use Case

Imagine a scenario like user authentication and task management:

Users log in, and their session is stored in Redis.

API endpoints read/write session data or task data.

Multiple app instances can run behind a load balancer, sharing sessions via Redis.

Logging and monitoring help developers detect issues instantly.

13. Key Advantages of This Project

Fully production-ready Node.js + Redis architecture

Containerized for consistent environments

CI/CD ensures automated testing and deployment

Modular, maintainable, and scalable code structure

Observability via logging, monitoring, and error tracking
## Features

* Node.js & Express backend
* Redis for session storage and caching
* Dockerized for easy deployment
* Multi-stage Docker builds for production
* Docker Compose for local development
* ES Modules (import/export) syntax
* CI/CD pipeline using GitHub Actions
* Logging and monitoring: Winston, Morgan, Sentry
* Health check endpoint `/health`

---

## Folder Structure

```
node-docker-prod-app/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   │   └── tasks.routes.js
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   │   ├── logger.js
│   │   ├── errorHandler.js
│   ├── config/
│   │   ├── redis.js
│   │   ├── session.js
│   │   ├── sentry.js
│   └── tests/
│       └── task.test.js
├── Dockerfile
├── docker-compose.yml
├── .env
├── .env.production
├── package.json
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

---

## Prerequisites

* Node.js v22+
* NPM v10+
* Docker & Docker Compose
* Redis (local or containerized)
* Git

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rithuelan/Node.js-Docker-Production-App.git
cd Node.js-Docker-Production-App
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=3000
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
SESSION_SECRET=your_session_secret_here
```

---

## Running the Project Locally

```bash
npm run dev
```

* Server will start on [http://localhost:3000](http://localhost:3000)
* Health check: [http://localhost:3000/health](http://localhost:3000/health)

---

## Docker Setup

Build & run using Docker:

```bash
docker-compose up --build
```

* App runs inside Docker container
* Redis runs in a separate container

---

## CI/CD

* GitHub Actions workflow located at `.github/workflows/ci.yml`
* Runs on every push or pull request to `main` branch
* Steps include:

  * Checkout code
  * Install dependencies
  * Run tests
  * Build Docker image

---

## Logging & Monitoring

* **Morgan:** HTTP request logging
* **Winston:** Application logging
* **Sentry:** Error tracking
* Health check endpoint for Redis connection

---

## Scripts

* `npm run dev`      : Run in development mode
* `npm test`         : Run tests
* `docker-compose up --build` : Start app with Docker

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feature/my-feature`
5. Create a Pull Request

---

## License

MIT License
