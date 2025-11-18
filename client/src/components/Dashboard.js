import React from 'react';
import './Dashboard.css';

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div className="user-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1>Welcome, {user.name}!</h1>
          <p className="user-email">{user.email}</p>
        </div>

        <div className="dashboard-content">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Authentication Successful</h2>
          <p>You're now logged in and your session is secure.</p>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">User ID</span>
              <span className="info-value">{user.id}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value status-active">Active</span>
            </div>
          </div>
        </div>

        <button onClick={onLogout} className="logout-btn">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
