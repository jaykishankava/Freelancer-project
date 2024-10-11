// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm'; // Correctly import ProjectForm
import PaymentsList from './components/PaymentsList';
import EarningsOverview from './components/EarningsOverview';
import Header from './components/Header';
import PaymentForm from './components/PaymentForm'; // Import PaymentForm for handling payments
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentItem from './components/PaymentItem'; // Make sure to import PaymentItem


const App = () => {
  // Initialize projects from localStorage or set default values
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [
      { id: 1, name: 'Project Alpha', dueDate: '2024-10-31', status: 'active' },
      { id: 2, name: 'Project Beta', dueDate: '2024-11-15', status: 'completed' },
    ];
  });

  // Initialize payments from localStorage or set default values
  const [payments, setPayments] = useState(() => {
    const savedPayments = localStorage.getItem('payments');
    return savedPayments ? JSON.parse(savedPayments) : [
      { id: 1, amount: 1500, status: 'unpaid' },
      { id: 2, amount: 2000, status: 'paid' },
    ];
  });

  // Update localStorage whenever projects or payments change
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  // Function to add a new project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
  };

  // Function to delete a project
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Function to add a new payment
  const addPayment = (newPayment) => {
    setPayments([...payments, { ...newPayment, id: payments.length + 1 }]);
  };

  // Function to mark payment as paid
  const markAsPaid = (id) => {
    setPayments(payments.map((payment) =>
      payment.id === id ? { ...payment, status: 'paid' } : payment
    ));
  };

  const deletePayment = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  return (
    <Router>
      <div className="App">
        {/* Header with navigation */}
        <Header />

        <div className="container">
          <Routes>
            {/* Route for the Dashboard */}
            <Route path="/" element={
              <>
                <h1 className="my-4">Project Dashboard</h1>
                <Dashboard projects={projects} deleteProject={deleteProject} />
                <EarningsOverview payments={payments}  />
              </>
            } />

            {/* Route for Projects */}
            <Route path="/projects" element={
              <>
                <h2 className="my-4">Projects</h2>
                <ProjectForm addProject={addProject} />
                <Dashboard projects={projects} deleteProject={deleteProject} />
              </>
            } />

            {/* Route for Payments */}
            <Route path="/payments" element={
              <>
                <h2 className="my-4">Payments</h2>
                <PaymentForm addPayment={addPayment} />
                <PaymentsList payments={payments} markAsPaid={markAsPaid} deletePayment={deletePayment} />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
