# Acorn Developer Challenge – Laravel + Vite + React

This project is a full-stack Laravel application with a React frontend powered by Vite and styled using Tailwind CSS.

---

##  Option 1: Local Development Setup (No Docker)

### Prerequisites

- PHP ≥ 8.1
- Composer
- Node.js ≥ 18.x
- NPM

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install PHP dependencies
```
composer install
```
3. Install Node.js dependencies
```
npm install
```
4. Copy the .env.example to create a .env file
5. Add the following keys
```
ACORN_API_KEY=
ACORN_TENANCY_ID=
ACORN_CATALOGUE_BASE_URL=
```
5. Generate Laravel app key
```
php artisan key:generate
```
6. Start the Laravel backend
```
php artisan serve
```
7. Start the vite dev server(in a new terminal)
```
npm run dev
```
6. Access the app
* You can go at http://127.0.0.1:8000/to access the catalogue page
* You can go oat http://127.0.0.1:8000/api/catalogue to just access the external catallogue api



##  Option 2:  Option 2: Docker-Based Development Setup
### Prerequisites

- Docker
- Docker Compose
### Setup Instructions
1. Clone the repository
```
git clone https://github.com/niranjanblank/acorn_developer_challenge
cd acorn_developer_challenge
```
2. Copy the .env.example to create a .env file
3. Add the following keys to the .env file
```
ACORN_API_KEY=
ACORN_TENANCY_ID=
ACORN_CATALOGUE_BASE_URL=

APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
VITE_PORT=5173
```

4. Start docker environment
docker-compose up --build

5. Access the app
* You can go at http://127.0.0.1:8000/to access the catalogue page
* You can go oat http://127.0.0.1:8000/api/catalogue to just access the external catallogue api

### Cleaning and Restarting
```
docker-compose down -v  # Stop containers and remove volumes
```
