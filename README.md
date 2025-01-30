# HNG12 Stage 0 Backend API

This is a simple public API for the HNG12 Stage 0 backend task. It provides basic information including the developer's email, current datetime in ISO 8601 format, and a GitHub repository link.

## Features

- Returns JSON response with email, timestamp, and GitHub URL.
- Handles Cross-Origin Resource Sharing (CORS).
- Built with Node.js and Express.

## Setup Instructions

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/Morg3an/hng12-backend-api.git
   cd hng12-backend-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your email:
   ```sh
   HNG_EMAIL=your-email@example.com
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## API Documentation

### Endpoint

**GET /** - Retrieve API information

### Response Format

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Morg3an/hng12-backend-api"
}
```

## Deployment

To deploy the API, use a cloud hosting service like Render, Vercel, or Railway.

## Resources

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

Developed for HNG12 Stage 0