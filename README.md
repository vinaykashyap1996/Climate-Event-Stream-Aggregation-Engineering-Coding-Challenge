# 🌍 Climate Event Stream Aggregation – Engineering Coding Challenge

## 🧭 Overview

This challenge simulates a real-world data aggregation scenario. You will consume a fast-paced climate-related event stream, aggregate the data into hourly candlestick-style diagrams (temperature), and expose this data via a local HTTP or GraphQL API. This task is common in real-time analytics and system monitoring.

![Challenge Overview](image1)

---

## 🕒 Format & Timeline

| Step | Description                       | Expected duration |
| ---- | --------------------------------- | ----------------- |
| 1    | Briefing and local setup          | 0.5 hours         |
| 2    | Development and aggregation logic | 4 hours           |
| 3    | Presentation of solution          | 0.5 hours         |

Use your **preferred daily service template** to complete this challenge.

---

## 🌐 Event Stream Simulator (Node.js, Provided)

To simulate a climate-based high-frequency event stream, we provide a WebSocket server using weather data from the [Open-Meteo API](https://open-meteo.com/).

### Example Simulator Snippet

![Simulator Example](image2)

---

## ✋ How to Use It

Run the weather event stream simulator as instructed above. Connect your backend service to the WebSocket stream at `ws://localhost:8765`.

---

## 📋 Your Task

### Objective

Build a local service that:

- Connects to the WebSocket stream at `ws://localhost:8765`
- Aggregates temperature data into **hourly candlestick diagrams** per city:
  - **open**: First recorded temperature in the hour
  - **close**: Last recorded temperature in the hour
  - **min**: Lowest temperature
  - **max**: Highest temperature
- Only exposes aggregated candlestick data via a **local HTTP or GraphQL API**
- Shows in code comments where authentication and authorization would be applied

![Candlestick Example](image4)

---

## ✅ Requirements

- Connect to the WebSocket event stream and handle 10–20 events/sec
- Aggregate per-city temperature data into hourly OHLC format
- Provide a local API (GraphQL preferred) to retrieve the candlestick data
- Ensure the solution is resilient to failure and increased traffic
- Create a minimal frontend that connects to the API and shows the candlestick in a chart

---

## 🔒 Authn & Authz (Guided by Inline Comments)

No implementation is required, but you must show in comments:

- Where Authorization headers would be checked

---

## 🏗️ Tech Stack

- **Backend:** Node.js, TypeScript, GraphQL (Apollo Server or similar)
- **Frontend:** React, TypeScript, Apollo Client
- **Weather Simulator:** Node.js, WebSocket

---

## 📁 Monorepo Structure

```
/
├── client/           # Frontend (React)
├── server/           # Backend (Node.js, GraphQL, weather-server)
│   ├── weather-server/  # Weather event simulator (run first)
│   └── backend/         # Main GraphQL API service (run second)
```

> **To start the project:**
>
> 1. Run the weather event simulator (`npm run start:weather-server`)
> 2. Run the backend service (`npm run start:backend`)
> 3. Run the client (`npm start` in `/client`)

---

## 📦 Setup & Development

See individual [client/README.md](./client/README.md) and [server/README.md](./server/README.md) for full setup and usage instructions.

_For any questions or suggestions, please open an issue or pull request._
