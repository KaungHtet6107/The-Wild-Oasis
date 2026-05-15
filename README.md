🏨 The Wild Oasis Admin | Hotel Management System 

React | Vite | Supabase

A full-featured internal hotel management system built for The Wild Oasis, a boutique hotel with eight luxury wooden cabins. This application is designed for hotel staff to manage daily operations including bookings, cabins, guest management, and check-ins through a secure admin dashboard.

🚀 Key Features
	•	Cabin management (add, edit, delete cabins)
	•	Booking management system
	•	Guest tracking and check-in/check-out system
	•	Dashboard with hotel statistics
	•	Authentication & protected routes
	•	Real-time database integration
  
⚙️ Technology Stack Decisions
	•	Framework: React + Vite
	•	Backend & Database: Supabase
	•	Data Fetching: Server Actions / Loaders (SSR-based)
	•	Authentication: Supabase Auth
	•	Deployment: Vercel 
	•	UI State Management: React Context API
	•	Remote State Management: React Query 
	•	Styling: Styled Components / Tailwind CSS 
	•	Forms: React Hook Form
	•	Utilities: React Icons, React Hot Toast, date-fns, Recharts

🌐 The Wild Oasis Website | Customer Booking Platform

NextJS | Tailwind CSS | Supabase

A modern customer-facing booking platform for The Wild Oasis, allowing guests to browse cabins, check availability, and book stays online. This is a fast, interactive Single Page Application focused on user experience.

🚀 Key Features
	•	Browse available cabins with details and images
	•	Check availability and booking calendar
	•	Create and manage reservations
	•	User authentication 
	•	Booking history for customers
	•	Responsive design for mobile and desktop

⚙️ Technology Stack Decisions
	•	Framework: Next.js
	•	Backend & Database: Supabase
	•	Routing: React Router
	•	UI State Management: Context API  / Redux Toolkit
	•	Authentication: Google Auth Platform
	•	Deployment: Vercel 
	•	Remote State: React Query
	•	Styling: Styled Components / Tailwind CSS 
	•	Forms: React Hook Form
	•	Utilities: React Icons, React Hot Toast, date-fns

🧭 System Overview 
	•	Admin  (Next.js/SSR):
	◦	Used by hotel staff
	◦	Manages data (cabins, bookings, guests)
	•	Website (React/CSR):
	◦	Used by customers
	◦	Sends booking requests to backend
	•	Shared Backend:
	◦	Supabase handles:
	▪	Database
	▪	Authentication
	▪	API layer
