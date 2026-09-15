# CareLife 🩺

CareLife is a modern doctor appointment web application designed to make healthcare appointment booking simple, clear, and user-friendly.

The application allows patients to explore the clinic, choose their preferred consultation type, select an appointment date and time, enter their details, and review their appointment before confirmation.

It also includes a **CareLife AI Appointment Assistant** that guides patients through the appointment-booking process.

---

## ✨ Features

- 🩺 Doctor appointment booking
- 📅 Date and time selection
- 👤 Patient information form
- 💻 Online consultation option
- 🏥 Clinic visit option
- 📋 Multi-step appointment form
- 🔍 Appointment review before confirmation
- 🤖 AI-powered appointment assistant
- ⚡ Interactive and responsive UI
- 📱 Mobile-friendly design
- 🔐 Login interface
- 📞 Contact section
- 🎨 Clean and modern healthcare-focused design

---

## 🤖 CareLife AI

CareLife includes an AI Appointment Assistant to make appointment booking easier.

The assistant helps the patient:

1. Choose consultation type
2. Select appointment date
3. Select preferred time
4. View appointment preferences
5. Continue directly to the appointment form

The selected information is passed to the appointment form to reduce repetitive input.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- JavaScript
- React Router
- Lucide React Icons

### Backend

Backend integration is planned for a future version.

The current project focuses on the frontend experience and AI-assisted appointment flow.

---

## 📂 Project Structure

```text
CareLife/
│
├── src/
│   ├── components/
│   │   └── AIAppointmentAssistant.jsx
│   │
│   ├── pages/
│   │   ├── BookAppointment.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── DoctorLogin.jsx
│   │   ├── CallPatient.jsx
│   │   ├── CallScreen.jsx
│   │   ├── CallEnded.jsx
│   │   └── PatientConsent.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md