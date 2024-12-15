# React User Management Application

## Overview
This is a simple React-based user management application built with Vite, featuring user registration, login, and account management functionalities.

## Features
- User Registration
- User Login
- Protected Account Page
- Local Storage Authentication
- Form Validation
- Toast Notifications

## Prerequisites
- Node.js (v14 or later)
- npm or Yarn

## Technologies Used
- React
- React Router DOM
- React Toastify
- Bootstrap
- Font Awesome

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
```

2. Install dependencies
```bash
npm install
```

3. Install additional dependencies
```bash
npm install react-router-dom react-toastify bootstrap @fortawesome/fontawesome-free
```

## Project Structure
```
src/
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Account.jsx
│   └── ProtectedRoute.jsx
├── App.jsx
└── main.jsx
```

## Key Components

### Register Component
- Allows new users to create an account
- Validates:
  - Name (minimum 3 characters)
  - Email format
- Stores user data in Local Storage
- Redirects to login page after successful registration

### Login Component
- Authenticates users
- Validates email and password against stored user data
- Sets authentication flag in Local Storage
- Redirects to account page on successful login

### Account Component
- Displays user details
- Allows email and name updates
- Provides logout functionality
- Protected route requiring authentication

## Authentication Flow
1. New users register via the registration page
2. Registered users log in
3. Successful login redirects to the account page
4. Users can update account details or log out

## Styling
- Bootstrap for responsive design
- Font Awesome icons
- Custom CSS for enhanced UI

## Local Storage Usage
- Stores user credentials
- Manages authentication state

## State Management
- React Hooks (useState, useEffect)
- React Router for navigation

## Form Validation
- Client-side validation before submission
- Toast notifications for validation errors

## Run the Application
```bash
npm run dev
```