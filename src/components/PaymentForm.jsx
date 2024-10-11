// src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ addPayment }) => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('unpaid');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = { id: Date.now(), amount: parseFloat(amount), status }; // Add unique id for each payment
    addPayment(newPayment);
    setAmount(''); // Reset amount
    setStatus('unpaid'); // Reset status to default
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">Status</label>
        <select
          className="form-control"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="unpaid">Unpaid</option>
          <option value="paid">Paid</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Payment</button>
    </form>
  );
};

export default PaymentForm;
