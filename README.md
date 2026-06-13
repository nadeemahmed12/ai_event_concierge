# AI Event Concierge

AI Event Concierge is a full-stack web application that helps users plan corporate offsites using AI.

Users can describe their event in natural language, and the application generates a structured venue proposal including:

- Venue Name
- Location
- Estimated Cost
- Why It Fits

All searches are stored in MongoDB and remain available after page refresh.

---

## Features

- AI-powered venue recommendations using Gemini API
- Structured JSON responses
- MongoDB data persistence
- Search history storage
- Loading spinner while AI generates results
- Error handling for API failures
- Responsive UI
- Professional card-based layout

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Gemini API

---

## Project Structure

```
ai_event_concierge/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string

PORT=3000

GEMINI_API_KEY=your_gemini_api_key
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/nadeemahmed12/ai_event_concierge

cd ai_event_concierge
```

---

## Backend Setup

```bash
cd backend

npm install
```

Start backend:

```bash
npm start
```

or

```bash
npm run dev
```

Backend runs on:

```text
https://ai-event-concierge-jx6m.onrender.com
```

---

## Frontend Setup

Open another terminal:

```bash
cd frontend

npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
https://ai-event-concierge-rho.vercel.app/
```

---

## API Endpoints

### Generate Proposal

```http
POST /api/events/generate
```

Request Body:

```json
{
  "description": "A 10-person leadership retreat in the mountains for 3 days with a $4k budget"
}
```

---

### Get History

```http
GET /api/events/history
```

---

## Example Response

```json
{
  "venueName": "Pine Ridge Mountain Cabin",
  "location": "Blue Ridge Mountains, North Carolina",
  "estimatedCost": "$4000",
  "whyItFits": "This venue fits the requested budget and provides a focused environment for leadership discussions."
}
```

---

## Future Improvements

- Authentication
- Venue images
- Search filters
- Export proposals as PDF
- Advanced AI recommendations

---

## Author

Nadeem Ahmed

Full Stack Developer