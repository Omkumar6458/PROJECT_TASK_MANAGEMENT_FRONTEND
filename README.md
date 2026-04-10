# Task Management System Frontend

A modern,  premium React frontend application with beautiful glassmorphism design and smooth animations.

## 🎨 Features

- **Modern UI/UX**: Premium dark theme with glassmorphism effects
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **JWT Authentication**: Secure login/register with token management
- **Task Management**: Full CRUD operations with status filtering
- **Role-Based UI**: Different features based on user role (USER/ADMIN)
- **Real-time Feedback**: Success/error messages for all actions
- **Smooth Animations**: Fade-in, slide-up animations for better UX
- **Loading States**: Spinners and loading indicators for async operations

## 🛠️ Technology Stack

- **React** 18.2.0
- **React Router** 6.20.0 - Client-side routing
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool and dev server
- **TailwindCSS** 3.3.6 - Utility-first CSS framework
- **PostCSS** & **Autoprefixer** - CSS processing

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Backend API running on `http://localhost:8080`

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at: `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── PrivateRoute.jsx # Route protection
│   │   ├── TaskCard.jsx     # Task display card
│   │   └── TaskForm.jsx     # Task create/edit form
│   ├── context/
│   │   └── AuthContext.jsx  # Global auth state
│   ├── pages/
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration page
│   │   ├── Dashboard.jsx    # Dashboard with stats
│   │   └── Tasks.jsx        # Task management page
│   ├── services/
│   │   ├── api.js           # Axios instance
│   │   ├── authService.js   # Auth API calls
│   │   └── taskService.js   # Task API calls
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Design System

### Colors

- **Primary**: Purple gradient (`from-purple-600 to-pink-600`)
- **Secondary**: Glass morphism effects
- **Background**: Dark gradient (`from-slate-950 via-purple-950 to-slate-950`)

### Components

- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Inputs**: `.input-field`
- **Badges**: Status and priority badges with different colors
- **Cards**: Glass morphism cards with hover effects

## 🔑 Authentication Flow

1. User visits the application
2. Redirected to `/login` if not authenticated
3. Login with email and password
4. JWT token stored in localStorage
5. Token automatically added to API requests
6. On 401 response, user is logged out and redirected

## 📱 Pages

### Login Page (`/login`)
- Email and password inputs
- Demo credentials display
- Link to registration
- Error handling

### Register Page (`/register`)
- Username, email, password inputs
- Form validation
- Link to login

### Dashboard (`/dashboard`)
- Welcome message
- Task statistics (Total, To Do, In Progress, Done)
- Quick actions
- Recent tasks list

### Tasks Page (`/tasks`)
- Task grid view
- Filter by status (ALL, TODO, IN_PROGRESS, DONE)
- Create new task
- Edit existing task (permission-based)
- Delete task (admin only)

## 🎯 Key Features

### Authentication
- JWT token management
- Auto-logout on token expiration
- Role-based access control

### Task Management
- Create tasks with title, description, status, priority
- Update task details (owner or admin)
- Delete tasks (admin only)
- Filter tasks by status
- View task statistics

### User Experience
- Smooth page transitions
- Loading spinners
- Success/error messages
- Responsive design
- Glassmorphism effects
- Premium animations

## 🔒 Security

- JWT tokens stored in localStorage
- Automatic token injection in API requests
- Protected routes with `PrivateRoute` component
- Auto-logout on 401 responses
