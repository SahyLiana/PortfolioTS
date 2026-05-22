const projects: {
image: string;
name: string;
description: string;
technologies: string[];
link?: string;
github?: string;
}[] = [
{
image: Oxford,
name: "Oxford clone home web page",
description:
"This project was one of my first. It was intended to strenghen my knowledge in HTML/CSS,Javascript and the popular framwork Tailwind CSS. It is mobile responsive as the official website",
technologies: ["HTML", "CSS", "JS", "Tailwind CSS"],
link: "https://ssl-popatsy-oxford.netlify.app/",
github: "https://github.com/SahyLiana/OxfordClone",
},
{
image: Liverpool,
name: "Liverpool clone home web page",
description:
"This project has the same purpose and technology as my first project. It was intended to strenghen my knowledge in HTML/CSS,Javascript and the popular framwork Tailwind CSS. It is mobile responsive as the official website",
technologies: ["HTML", "CSS", "JS", "Tailwind CSS"],
link: "https://ssl-popatsy.netlify.app/",
github: "https://github.com/SahyLiana/LiverpoolClone",
},
{
image: Erp,
name: "Kampala University ERP System",
description:
"This project was aimed to improve and overcome the different challenges of the old university's sytem. It Enhances the security and privileges of lecturers and different stakeholder’s actions",
technologies: ["HTML", "CSS", "JS", "Bootstrap 5", "PHP"],
link: undefined,
github: "https://github.com/SahyLiana/university-project",
},
{
image: FindI,
name: "MERN stack e-commerce (Final Year)",
description:
"This project is an e-commerce website that is focusing on electronic devices. It is equiped with an AI ChatBot, Google Map, QR and Bar Code. Therefore, the admin pannel provides Charts with Apex Chart package",
technologies: ["ReactJS", "Mongodb", "Express", "NodeJS", "Sass"],
link: undefined,
github: "https://github.com/SahyLiana/ProjectFolder",
},

    {
      image: Book,
      name: "Book App Store",
      description:
        "This project was intended to boost my skills in real time app using Web socket.",
      technologies: [
        "ReactTS",
        "TailwindCSS",
        "Framer motion",
        "MongoDB",
        "NestJS",
        "Web socket",
        "Zustand",
      ],
      link: undefined,
      github: "https://github.com/SahyLiana/BookStore",
    },
    {
      image: Album,
      name: "Album App",
      description:
        "This project was intended to give me more practices about framer motion and file upload using NestJS",
      technologies: [
        "ReactTS",
        "TailwindCSS",
        "MongoDB",
        "Framer motion",
        "NestJS",
        "Zustand",
      ],
      link: undefined,
      github: "https://github.com/SahyLiana/AlbumApp",
    },
    {
      image: PortfolioPic,
      name: "My actual protfolio (in progress)",
      description:
        "This is my latest project so far. It was intended to show case my different skills.",
      technologies: ["ReactTS", "Sass", "Framer motion"],
      link: undefined,
      github: "https://github.com/SahyLiana/PortfolioTS",
    },

];

Garage projects

# Royal Garage Management System

A full-stack garage management application for automotive repair services with role-based access control for Admins, Mechanics, and Clients.

## Features

- JWT authentication with role-based access (Admin/Mechanic/Client)
- Vehicle, appointment, and inventory management
- Interactive admin dashboard with analytics
- Appointment scheduling with image uploads
- Comment system for appointment communication
- Parts tracking and usage linking to appointments

## Tech Stack

### Backend (NestJS)

- NestJS 10.x, TypeScript, Prisma ORM, SQLite, Passport + JWT, bcryptjs

### Frontend (React)

- React 18, TypeScript, Vite, TailwindCSS (violet/gold theme), Zustand, React Router v6, Axios, Framer Motion, ApexCharts

## Project Structure

```
backend/          # NestJS backend (current)
frontend/         # React frontend (current)
controllers/      # Legacy Express.js (deprecated)
models/           # Legacy MongoDB models (deprecated)
routes/           # Legacy Express routes (deprecated)
public/           # Legacy HTML files (deprecated)
```

## Setup

### Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment

- Backend: `DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRATION`, `PORT`
- Frontend: `VITE_API_URL`
