🚀 Infinity Dream Learning (IDL)

AI-Integrated Learning Platform with Public Website, Student Hub, and Full Learning Portal

---

📌 Overview

Infinity Dream Learning (IDL) is a modern, AI-powered education platform built to deliver structured learning, real-time collaboration, and intelligent academic support.

The platform follows a layered access model — users explore freely, engage as members, and unlock full learning power through subscription.

«Try before you buy, learn as you grow.»

---

🏗️ Platform Architecture

IDL is built around three core environments:

🌐 Public Website

Your front door — designed for discovery and conversion.

Access: Public (No login required)

Features:

- Landing page
- Course previews
- Pricing & subscription plans
- About & contact pages
- Authentication (Login/Register)

Routes:

/  
/courses  
/pricing  
/about  
/contact  
/login  
/register

Restrictions:

- No access to lessons
- No certificates
- No community interaction
- No AI assistant

---

🎓 Student Hub

Where curiosity turns into commitment.

Access: Authenticated users (Free account)

Features:

- Student dashboard
- Course catalog
- Community discussions
- Events & announcements
- AI guidance assistant (limited)
- User profile

Routes:

/hub  
/hub/dashboard  
/hub/courses  
/hub/community  
/hub/events  
/hub/ask-ai  
/hub/profile

Restrictions:

- No lesson materials
- No assignments
- No certificates
- No advanced AI features

---

🧠 Learning Portal

The real deal — full learning experience unlocked via subscription.

Access: Authenticated + Active subscription

Features:

- Learning dashboard
- Full course access
- Assignments & materials
- Live classes
- Study scheduler
- Team collaboration
- Community access
- AI learning assistant (full power)
- Certificates

Routes:

/learn  
/learn/dashboard  
/learn/courses  
/learn/lessons  
/learn/scheduler  
/learn/live-classes  
/learn/teams  
/learn/community  
/learn/support  
/learn/ai  
/learn/certificates

---

🤖 AI Integration

🔹 Student Hub AI (Lightweight)

Helps users get their feet wet.

Capabilities:

- General Q&A
- Course recommendations
- Navigation help
- Learning path discovery

Limitations:

- No lesson explanations
- No assignment help
- No analytics

---

🔹 Learning Portal AI (Advanced)

Your personal study partner.

Capabilities:

- Lesson explanations
- Assignment support
- Study planning
- Personalized recommendations
- Learning analytics
- Progress tracking

---

🧭 Navigation System

Sidebar (Student Hub)

- Dashboard
- Courses
- Community
- Events
- Ask AI
- Profile

Sidebar (Learning Portal)

- Dashboard
- Courses
- Lessons
- Scheduler
- Live Classes
- Teams
- Community
- Support
- AI Assistant
- Certificates

Top Navigation Bar

- Hamburger menu (sidebar toggle)
- Search bar
- Notifications
- 9-dot app launcher
- Profile dropdown

🔲 Application Launcher (9-Dot Menu)

Quick access to:

- Community
- Support
- Events
- AI Assistant
- Course Catalog
- Billing
- Settings
- Documentation
- Profile

---

🛠️ Technology Stack

Frontend

- React
- React Router (Full-stack template)
- TypeScript
- Tailwind CSS
- Axios

Backend

- Node.js
- Express
- TypeScript

AI Integration

- OpenAI API / Internal AI services

Database

- PostgreSQL or MongoDB

Deployment

- Vercel (Frontend)
- Cloud hosting (Backend)

---

📁 Project Structure

src/
 ├── api/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── routes/
 ├── context/
 ├── hooks/
 ├── styles/
 ├── utils/

App.tsx  
main.tsx

---

🔄 User Flow

Visitor → Public Website  
        ↓  
Registers → Student Hub  
        ↓  
Subscribes → Learning Portal

«Simple, clean, and built for growth.»

---

⚙️ Getting Started

📦 Installation

npm install

💻 Development

npm run dev

App runs on:

http://localhost:5173

---

🏗️ Build for Production

npm run build

---

🐳 Docker Deployment

# Build
docker build -t idl-app .

# Run
docker run -p 3000:3000 idl-app

Supports:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Railway
- Fly.io
- DigitalOcean

---

🚀 Future Enhancements

- 📱 Mobile application
- 🔔 Real-time notifications
- 📊 Advanced AI analytics
- 🎮 Gamified learning experience
- 📶 Offline learning support

---

📄 License

Internal project for Infinity Dream Learning (IDL).

---

✍️ Author

Infinity Dream Learning Development Team

---

💡 Final Note

This project isn’t just another learning platform — it’s built with a clear vision:

«Give users a taste, guide them with AI, and unlock their full potential when they’re ready.»

And like they say, the proof of the pudding is in the eating — IDL is designed to let users experience value before committing.

---