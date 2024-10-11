// src/components/EarningsOverview.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EarningsOverview = ({ payments }) => {
  // Calculate total earnings for each month
  const earningsData = payments.reduce((acc, payment) => {
    const month = new Date().toLocaleString('default', { month: 'long' });
    acc[month] = (acc[month] || 0) + payment.amount; // Summing amounts by month
    return acc;
  }, {});

  const data = {
    labels: Object.keys(earningsData),
    datasets: [
      {
        label: 'Earnings (in $)',
        data: Object.values(earningsData),  // Use computed earnings data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Color for bars
        borderColor: 'rgba(75, 192, 192, 1)',        // Border color for bars
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Earnings Overview',
      },
    },
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Earnings Overview</h5>
        <p className="card-text">Total Earnings: ${payments.reduce((acc, payment) => acc + payment.amount, 0)}</p>
        <div style={{ height: '400px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default EarningsOverview;
