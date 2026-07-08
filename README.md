# JobTrack AI

A modern AI-powered job application tracking platform that helps job seekers organize applications, analyze resume-job matches, improve resumes, and generate tailored cover letters.


Landing Page->

<img width="1740" height="877" alt="image" src="https://github.com/user-attachments/assets/ae89cf28-d709-44a4-a77e-98c2eaf32d5c" />


Login Page->
<img width="1125" height="850" alt="image" src="https://github.com/user-attachments/assets/c516914b-ea78-4daa-b060-6e5accf97c05" />      


Sign-in Page->
<img width="1051" height="882" alt="image" src="https://github.com/user-attachments/assets/290dc567-6923-49bb-870f-68037683b036" />




## Live Demo

https://jobtrackerai-am.vercel.app

---

## Features

- Secure user authentication (JWT)
- Job application tracking dashboard
- Kanban-style workflow management
- Resume PDF upload and parsing
- AI-powered ATS match scoring
- Resume improvement suggestions
- Tailored cover letter generation
- Application analytics and insights
- Responsive modern UI

---

<img width="1144" height="804" alt="image" src="https://github.com/user-attachments/assets/77e60506-ae9d-4f2a-9749-3d67c53938c1" />
<img width="907" height="838" alt="image" src="https://github.com/user-attachments/assets/de234fec-6c96-414b-a75d-80fccbb6b3eb" />



## Tech Stack

### Frontend
- React
- Vite
- React Router
- React Query
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

### AI & Processing
- Google Gemini API
- PDF Parse
- Multer

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Project Structure

```text
JobTrackerAi/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/amit-mndal/JobTrackerAi.git
cd JobTrackerAi
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

### Server (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

### Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Future Improvements

- Interview preparation assistant
- Application reminders and notifications
- LinkedIn job import
- Resume version management
- Advanced analytics dashboard
- Email integration

---

## Author

Amit Mandal



---

## License

This project is intended for educational, portfolio, and learning purposes.
Feel free to star or to contribute
