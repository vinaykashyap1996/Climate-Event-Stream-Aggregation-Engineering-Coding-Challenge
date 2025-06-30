# Climate Event Stream Aggregation — Client

This is the frontend application for the Climate Event Stream Aggregation Engineering Challenge. The client is built with React and TypeScript and communicates with the backend via GraphQL.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/vinaykashyap1996/Climate-Event-Stream-Aggregation-Engineering-Coding-Challenge.git
   cd Climate-Event-Stream-Aggregation-Engineering-Coding-Challenge/client
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy `.env.example` to `.env` and configure environment variables as needed (such as the GraphQL API endpoint).

### Running the Client

```bash
npm start
# or
yarn start
```

The app will run in development mode, usually served at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- `public/` — Static assets
- `src/` — React codebase (components, hooks, GraphQL queries/mutations)
- `.env` — Environment variables
- `package.json` — Scripts and dependencies

## Environment Variables

At minimum, set your GraphQL backend endpoint:

```
CLIMATE_AGGREGATION_LOCALDEV_BACKEND_URL=http://localhost:4000/graphql
```

## Scripts

- `start`: Run the development server
- `build`: Create a production build

For questions or improvements, please open an issue or pull request.
