# GamehokAssignment

## Tournament Dashboard & API

This project is a full-stack application for managing gaming tournaments. It consists of a **Next.js (TypeScript)** frontend and a **Spring Boot** backend with a **PostgreSQL** database.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
  - [Frontend](#frontend)
  - [Backend: Tournament API](#backend-tournament-api)
- [Setup](#setup)
  - [Running the Frontend Locally](#running-the-frontend-locally)
  - [Running the Backend Locally](#running-the-backend-locally)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Media](#media)

## Tech Stack

- **Frontend:**
  - **Framework:** Next.js (TypeScript)
  - **Styling:** Tailwind CSS, ShadCN UI components
  - **Hosting:** Vercel  
- **Backend:**
  - **Language:** Java (version 17)
  - **Framework:** Spring Boot 3.4.3
  - **Build Tool:** Maven
  - **Packaging:** Jar
  - **Hosting:** Koyeb  
- **Database:**
  - **Type:** PostgreSQL (hosted on neonDB)

## Features

### Frontend

- **Responsive Design:** Built using Next.js, TypeScript, and Tailwind CSS to ensure a modern, gamer-friendly UI.
- **Tournament List:** Displays tournaments with details such as:
  - **Title**
  - **Game Name**
  - **Date**
  - **Prize Pool**
  - **Status** (Upcoming or Completed)
- **Filtering:** All , Upcoming and Completed tournaments.
- **Tournament Details:** Dynamic page (e.g., `/tournaments/[id]`) that shows:
  - Description
  - Rules
  - Prize Breakdown
- **Data Source:** Tournament data is fetched from the backend API.

### Backend: Tournament API

- **Spring Boot Application:** Manages tournament data and serves API endpoints.
- **Database Schema:** The PostgreSQL database has a `tournaments` table with the following fields:
  - `id`
  - `title`
  - `game_name`
  - `date`
  - `prize_pool`
  - `status`
  - `description`
- **API Endpoints:**
  - `GET /api/tournaments`: Fetch all tournaments.
  - `GET /api/tournaments/{id}`: Fetch a single tournament by ID.
  - `POST /api/tournaments`: Create a new tournament.
- **Sample Data:** The database is seeded with at least 5 sample tournaments for testing.

## Setup

### Running the Frontend Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mehul-anand/GamehokAssignment.git
   cd GamehokAssignment/client
    ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**  
   Create a `.env.local` file and add:
   ```env
   NEXT_PUBLIC_TOURNAMENT_API=<api>
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open in your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

### Running the Backend Locally

1. **Clone the repository:**
   ```bash
   ggit clone https://github.com/mehul-anand/GamehokAssignment.git
   cd GamehokAssignment/server
   cd tournament-api
   ```
2. **Configure PostgreSQL:**  
   Ensure you have a PostgreSQL instance running. Update the `application.properties` file with your database connection details.

3. `application.properties`
    ```
    spring.datasource.url=jdbc:postgresql://${DB_HOST}/neondb?user=${DB_USER}&password=${DB_PASSWORD}&sslmode=require
    spring.datasource.username=${DB_USER}
    spring.datasource.password=${DB_PASSWORD}
    ``` 
    `env` file
    ```
    DB_HOST=<host>
    DB_USER=<user>
    DB_PASSWORD=<pass>
    ```

   
4. **Build and run the application using Maven:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
4. **API Endpoint:**  
   The API should be available at [http://localhost:8080/api/tournaments](http://localhost:8080/api/tournaments)

## API Documentation

For detailed API usage, please refer to the [Postman Documentation](https://documenter.getpostman.com/view/31396669/2sAYdfrBqd).

## Deployment

- **Frontend:**  
  The Next.js application is hosted on Vercel and can be viewed at [https://gamehok-five.vercel.app/](https://gamehok-five.vercel.app/).

- **Backend:**  
  The Spring Boot API is hosted on Koyeb. The API endpoints can be accessed at [https://due-lianna-mehulxyz-1443422a.koyeb.app/api/tournaments](https://due-lianna-mehulxyz-1443422a.koyeb.app/api/tournaments).

---

## Future Enhancements

- **User Accounts & Authentication:**  
  Implement user registration and login along with authentication. This would also allow for event notifications so user can get notified for an event.
- **Dark Mode:**  
  Introduce a dark mode toggle for a better user experience in low-light environments.
- **More Search Functionality**  
  Options like filtering based on game name

    

---

## Media
### Home Page
![home-page](/readmeImages/home.png)
### Dashboard
![dashboard](/readmeImages/dashboard.png)
### Individual Tournament
![individual](/readmeImages/individual.png)
### Create even page
![create](/readmeImages/create.png)
### Video
[loom link](https://www.loom.com/share/3ad1ddbacc204a44a39ac6c0e0742e5f?sid=1bc596fc-4e17-4fe4-ba1d-ec4a7e24f727)

> PS : The app is responsive too

My Portfolio site : [mehul.xyz](https://mehul.xyz/)