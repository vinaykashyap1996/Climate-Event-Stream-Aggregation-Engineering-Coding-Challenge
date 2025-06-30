# Climate Event Stream Aggregation — Server

This is the backend for the Climate Event Stream Aggregation Engineering Challenge. The backend is built with Node.js, TypeScript, and uses GraphQL. The server consists of two services:

1. **weather-server** — Handles weather data ingestion/external weather APIs.
2. **backend** — Main application logic and GraphQL API.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/vinaykashyap1996/Climate-Event-Stream-Aggregation-Engineering-Coding-Challenge.git
   cd Climate-Event-Stream-Aggregation-Engineering-Coding-Challenge/server
   ```

2. Install dependencies for both services:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy `.env.example` to `.env` in both `weather-server` and `backend` directories, and configure environment variables as needed.

### Running the Server(s)

You must run both services for the application to work.

1. **Start the weather server**  
   In one terminal:

   ```bash
   npm run start:weather-server
   # or
   yarn start:weather-server
   ```

2. **Start the main backend server**  
   In another terminal:
   ```bash
   npm run start:backend
   # or
   yarn start:backend
   ```

Both services will start, each on their own ports (see your `.env` or configuration for details).

### Building for Production

```bash
npm run build
npm run start:weather-server
npm run start:backend
# or with yarn
yarn build
yarn start:weather-server
yarn start:backend
```

## Project Structure

- `weather-server/` — Weather data microservice
- `backend/` — Main GraphQL backend service
- `.env` — Environment variables for each service

## Environment Variables

Each service should have its own `.env` file for configuration (port, API keys, etc).

## Scripts (in `package.json`)

- `start:weather-server`: Start the weather service
- `start:backend`: Start the main backend service

## API

The main backend exposes a GraphQL API.  
Document your schema and queries in a separate section or with [GraphQL Playground](https://github.com/graphql/graphql-playground) if available.

For questions or improvements, please open an issue or pull request.
