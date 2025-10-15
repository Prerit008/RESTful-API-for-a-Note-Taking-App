# Note-Taking RESTful API — Node.js + Express + MongoDB

![Node.js](https://img.shields.io/badge/Node.js-22.x-brightgreen) ![Express](https://img.shields.io/badge/Express.js-5.x-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-8.x-green) ![License](https://img.shields.io/badge/license-MIT-blue)

A secure, RESTful API backend for a collaborative note-taking application, built with Node.js, Express.js, and MongoDB. It supports user authentication, note CRUD operations, and collaboration features.

---

## Features

* User registration and login with JWT authentication
* Create, read, update, delete (CRUD) notes
* Collaborators support: share notes with other users
* Note archiving
* Pagination for listing notes

---

## Tech Stack

* **Node.js** v22
* **Express.js** v5
* **MongoDB** v8
* **JWT** for authentication
* **bcrypt** for password hashing

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/note-api-node-express-mongodb.git
cd note-api-node-express-mongodb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/note_api_dev
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

### 4. Run the Server

**Development Mode:**

```bash
npm run dev
```

**Production Mode:**

```bash
npm start
```

Server will be available at `http://localhost:4000`.


---

## API Endpoints

### Auth

* `POST /api/auth/register` - Register a new user

  ```json
  { "email": "user@example.com", "password": "password123", "name": "User" }
  ```

* `POST /api/auth/login` - Login existing user

  ```json
  { "email": "user@example.com", "password": "password123" }
  ```

### Notes (Require Authorization Header `Bearer <JWT_TOKEN>`)

* `POST /api/notes` - Create a note

  ```json
  { "title": "My Note", "content": "Hello World", "collaborators": [] }
  ```

* `GET /api/notes` - Get list of notes (supports `page` and `limit` query params)

* `GET /api/notes/:id` - Get a single note

* `PUT /api/notes/:id` - Update a note

* `DELETE /api/notes/:id` - Delete a note (only owner can delete)

### Health Check

* `GET /health` - Returns `{ status: "ok" }`

---

## Project Structure

```
note-api/
├── src/
│   ├── config/       # Database configuration
│   ├── controllers/  # Route logic
│   ├── middleware/   # Auth and error handling
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API route definitions
│   ├── app.js        # Express app setup
│   └── server.js     # Server bootstrap
├── .env.example      # Sample environment variables
├── package.json
└── README.md
```

---

## Security Considerations

* Never commit `.env` with secrets
* Use HTTPS in production
* Rotate JWT secrets and consider refresh tokens
* Validate input using libraries like `joi` or `express-validator`
* Consider rate limiting for APIs

---

## Contribution

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.
