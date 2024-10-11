// src/components/PaymentsList.js
import React from 'react';
import PaymentItem from './PaymentItem';

const PaymentsList = ({ payments, markAsPaid, deletePayment }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Payments</h5>
        <ul className="list-group">
          {payments.map((payment) => (
            <PaymentItem 
              key={payment.id} 
              payment={payment} 
              markAsPaid={markAsPaid} 
              deletePayment={deletePayment} // Pass deletePayment function
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaymentsList;
