Project Management Dashboard
This is a Project Management Dashboard built using React.js and Bootstrap. It helps users manage projects and track payments, with features like project creation, deletion, payment tracking, and marking payments as paid. The app persists data using localStorage to maintain state between sessions, ensuring that projects and payments are saved even after the browser is closed.

Features
1. Dashboard Overview
Displays a list of all active and completed projects with their due dates and statuses.
Displays an overview of earnings, including paid and unpaid payments.
2. Project Management
Create Projects: Add new projects with a name, due date, and status (active or completed).
Delete Projects: Remove projects that are no longer needed from the list.
Projects are displayed on the dashboard with the ability to delete individual projects.
3. Payment Management
Add Payments: Log new payments with an amount and status (paid or unpaid).
Mark Payments as Paid: Easily update unpaid payments to a paid status.
Delete Payments: Remove individual payments when necessary.
Payments are listed with the ability to delete or mark them as paid.
4. Persistent Data
The project and payment data are stored in localStorage, allowing the user to close the browser and return later with their data intact.
Tech Stack
Frontend: React.js (with functional components, hooks), React Router for navigation.
Styling: Bootstrap for responsive design and user interface styling.
State Management: Managed with React hooks (useState, useEffect) and localStorage.
Routing: React Router for page navigation between the dashboard, project management, and payment management.
Bundling: Built with Vite for fast development.