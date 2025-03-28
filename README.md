# Acorn Developer Challenge – Laravel + React

This project is a full-stack Laravel application with a React  styled using Tailwind CSS and Material UI.

This is a Laravel and React project that shows a list of courses and live learning sessions using data from an external API.

There are two main routes:

*  `/api/catalogue`   : Laravel fetches data from an external API, processes it, and returns it as JSON.

* `/`     : Laravel uses Inertia to render the React app.

The React app loads and then fetches the course data from `/api/catalogue` to display it.

On the backend, Laravel uses a simple factory pattern to decide how to organize the data received from the external API. Each item in the API response includes a contenttype field (like "Course" or "Live Learning"). Laravel uses this field to decide which class to use for structuring the data.

This logic is handled in the CatalogueFactory class. Here's how it works:

* If the contenttype value is "course" (case-insensitive), it uses the Course class.

* If the contenttype value is "live learning" (case-insensitive), it uses the LiveLearning class.

* If the contenttype is missing or is something else, it defaults to the UnknownContent class.

Each of these classes extends the CatalogueContent base class and fills in type-specific fields.
All these content types inherit from a common base class called CatalogueContent, which has shared fields like fullname, summary, imageUrl, and customFields. This is called inheritance, where the shared logic is written once in a parent class and reused in child classes.

Assumptions Made
Since the API documentation wasn’t clear, we made some assumptions:

* Both Course and Live Learning use the same timemodified field.

    * For Courses, it's shown as courseStart.

    * For Live Learning, it's shown as liveStart.

* Course includes: badge, duration, tags, and courseStart.

* Live Learning includes: category and liveStart only (no tags).

If the content is not a course or live learning, it is handled by an UnknownContent class.

This setup keeps the backend organized and the frontend responsive, while using Laravel and React together through Inertia.

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
git https://github.com/niranjanblank/acorn_developer_challenge
cd acorn_developer_challenge
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
* You can go at http://127.0.0.1:8000/api/catalogue to just access the external catallogue api



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
* You can go at http://127.0.0.1:8000/api/catalogue to just access the external catallogue api

### Cleaning and Restarting
```
docker-compose down -v  # Stop containers and remove volumes
```
