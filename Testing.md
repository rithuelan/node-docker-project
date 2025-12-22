# 🚀 Node Docker Project – Testing & CI Guide

Production-ready Node.js application with Docker, Redis, full testing strategy, and CI/CD.

---

## 📌 Project Overview

This project demonstrates **real-world testing practices** used in modern backend systems:

* ✅ Unit Testing
* ✅ Integration Testing
* ✅ API Testing
* ✅ End-to-End (E2E) Testing
* ✅ Mocking & Stubbing
* ✅ Test Coverage
* ✅ CI with GitHub Actions

**Tech Used:** Node.js, Express, Redis, Jest, Supertest, Docker, Docker Compose, GitHub Actions, Sentry.

---

## 🧱 Tech Stack

| Layer      | Tools                  |
| ---------- | ---------------------- |
| Backend    | Node.js, Express       |
| Database   | Redis                  |
| Testing    | Jest, Supertest        |
| DevOps     | Docker, Docker Compose |
| CI/CD      | GitHub Actions         |
| Monitoring | Sentry                 |

---

## 📂 Folder Structure (Testing Focus)

```
src/
 ├── app.js
 ├── sentry.js
 ├── controllers/
 ├── routes/
 ├── services/
 ├── middlewares/
 └── tests/
     ├── unit/
     ├── integration/
     └── e2e/
```

---

## 🧪 Testing Strategy (Layered Approach)

### 🔹 1. Unit Testing

**Path:** `src/tests/unit/redis.service.test.js`

**What it tests**

* Individual service functions
* No server
* No real Redis

**How**

* Redis methods are mocked
* Pure function testing

**Benefits**

* ✔ Fast
* ✔ Isolated
* ✔ Reliable

---

### 🔹 2. Integration Testing

**Path:** `src/tests/integration/tasks.integration.test.js`

**What it tests**

* API routes
* Controller + Service + Redis
* Request → Response flow

**Tools**

* Supertest
* Express app instance

**Benefits**

* ✔ Real HTTP calls
* ✔ Middleware included
* ✔ Business logic validated

---

### 🔹 3. API Testing (Supertest)

API testing ensures:

* Correct HTTP status codes
* Proper response format
* Error handling works

**Example Endpoints**

* `POST /api/tasks`
* `GET /api/tasks`

**Benefits**

* ✔ REST correctness
* ✔ Client-safe responses

---

### 🔹 4. Mocking & Stubbing

Used mainly in unit tests.

**Why mocking?**

* Avoid external dependencies
* Speed up tests
* Predictable output

**Example**

```
jest.fn().mockResolvedValue(...)
```

---

### 🔹 5. Error Handling Tests

**Path:** `src/tests/integration/errorHandler.test.js`

**What is tested**

* Global error middleware
* HTTP 500 handling
* Safe error response

**Test Endpoint**

* `GET /error-test`

**Expected Response**

```json
{
  "message": "Internal Server Error"
}
```

✔ Production-safe error handling

---

### 🔹 6. End-to-End (E2E) Testing

**Path:** `src/tests/e2e/redis.service.test.js`

**What it tests**

* Real Redis connection
* Actual data persistence
* Full system behavior

**Benefits**

* ✔ Closest to production
* ✔ No mocks

---

## 📊 Test Coverage

Run tests with coverage:

```
npm test
```

or

```
npx jest --coverage
```

**Coverage Output:**

```
coverage/
```

**Visual Report:**

```
coverage/lcov-report/index.html
```

---

## 🔍 Why Coverage Is Not 100%

This is **expected and correct**.

| File             | Reason                                 |
| ---------------- | -------------------------------------- |
| app.js           | Server bootstrap not executed in tests |
| Conditional code | Environment-specific logic             |
| Startup logic    | Not part of request lifecycle          |

👉 Industry standard – not a problem.

---

## 🔁 Test-Driven Development (TDD)

This project follows **TDD principles**:

1. Write test
2. Watch it fail
3. Write code
4. Pass test
5. Refactor safely

Used especially for:

* Error handler
* Redis service logic

---

## 🤖 CI/CD – GitHub Actions

Every push and pull request triggers tests automatically.

**Path:** `.github/workflows/node-ci.yml`

**CI Flow**

* Checkout code
* Install dependencies
* Run tests
* Fail build if tests fail

**Benefits**

* ✔ Prevents broken code
* ✔ Enforces test discipline
* ✔ DevOps best practice

---

## 🐳 Docker Support

The app runs consistently across environments using Docker:

```
docker-compose up --build
```

✔ Local
✔ CI
✔ Production

---

## 🧠 What This Project Proves

* ✔ Real backend testing skills
* ✔ Professional folder structure
* ✔ CI/CD knowledge
* ✔ DevOps + Testing combined
* ✔ Interview-ready project

---

## 🎯 Interview One-Line Explanation

> **“This is a Dockerized Node.js backend with Redis, fully tested using Jest and Supertest across unit, integration, and E2E layers, with CI enforced via GitHub Actions.”**

---

## ⭐ Next Enhancements (Optional)

* Add coverage badge
* Add linting (ESLint)
* Add load testing (k6 / Artillery)
* Deploy to cloud (EC2 / Render / Railway)

---

✅ **Production-ready | Test-driven | DevOps-aligned**
