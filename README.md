
# EduBridge – Bridging the Digital Learning Divide

## Overview
EduBridge is an AI-powered and offline-friendly learning platform designed to make quality education accessible for both rural and urban students.
It focuses on personalized learning, offline access, and community support, ensuring that every learner can study effectively regardless of internet connectivity or background.

## Vision
To build a unified, intelligent, and affordable education platform that adapts to each student’s pace and environment, helping reduce the digital gap in learning opportunities.

## Core Functionalities
**1. User Authentication and Profile**
* Secure login and signup using Firebase Authentication.
* User profile page displaying name, email, and learning stats.
* Option to upload and edit profile picture stored locally.

**2. Learning Dashboard**
* Displays available courses like Math and Science from Firestore.
* Each course card redirects to a detailed course page with lessons and quizzes.
* Clean and responsive design using React and CSS.

**3. Offline Support (PWA)**
* Works with low or no internet connectivity.
* Uses Service Workers for caching content.
* Quiz results and progress automatically sync with Firestore once the user is online.

**4. AI Learning Assistant**
* Integrated Gemini API for AI-based doubt-solving.
* Students can ask questions and get instant responses or explanations.
* Future plan includes adaptive quizzes and personalized recommendations.

**5. Community Forum (Prototype)**
* Basic discussion feature where students can post doubts and read replies.
* Data stored in Firestore under a “doubts” collection.
* Designed to support mentor-student interaction.

**6. Multilingual and Inclusive Interface**
* Supports English and Hindi language toggle.
* Text-to-Speech feature to help students listen to content.
* Speech-to-Text planned for voice-based question input.

**7. Gamification (In Progress)**
* Points for quiz completion.
* Future scope includes badges and a leaderboard system.


## Tech Stack
Frontend: React.js, HTML, CSS
Backend / Hosting: Firebase Functions, Render (Flask backend)
Database: Firestore (Firebase Cloud Database)
Authentication: Firebase Authentication
AI Integration: Gemini API (Google AI Studio)
Offline Support: Progressive Web App (PWA)
Voice Features: Web Speech API

## Key Highlights
* Lightweight and cost-efficient Firebase-based architecture.
* Works offline and syncs data automatically when online.
* Built-in AI support for doubt-solving and learning assistance.
* Inclusive multilingual design for better accessibility.
* Modular and scalable structure for easy future development.

---

## Installation and Setup

**Step 1: Clone the repository**

```
git clone https://github.com/yourusername/edubridge.git
cd edubridge
```

**Step 2: Install dependencies**

```
npm install
```

**Step 3: Firebase setup**

* Create a Firebase project.
* Add Firebase config keys in a `.env` file or `firebase.js`.
* Enable Authentication (Email/Password or Google Sign-In).
* Create Firestore collections: `users`, `courses`, `doubts`, `progress`.

**Step 4: Run the app**

```
npm run dev
```

**Step 5: Build for production**

```
npm run build
```

---

## Folder Structure

```
EduBridge/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Learn.jsx
│   │   ├── AIChat.jsx
│   │   └── Community.jsx
│   ├── styles/
│   │   ├── Profile.css
│   │   ├── Dashboard.css
│   │   └── Learn.css
│   ├── firebase.js
│   └── App.jsx
│
├── public/
│   ├── manifest.json
│   └── service-worker.js
│
└── package.json
```

---

## Future Enhancements

* AI-based adaptive testing.
* Teacher/Admin analytics dashboard with charts.
* Full leaderboard and badge system.
* SMS-based content delivery for remote regions.
* Real-time peer discussion board with notifications.

---

## Developed By

Team EduBridge
Making learning accessible, personalized, and inclusive for all.
