import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow p-5 w-100" style={{ maxWidth: '600px', borderRadius: '20px' }}>
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold">🎓 Student Management System</h1>
          <p className="text-muted">Easily manage student records with this modern dashboard.</p>
        </div>

        <div className="d-grid gap-3">
          <Link to="/students" className="btn btn-outline-primary btn-lg">
            📋 View Students List
          </Link>
          <Link to="/add" className="btn btn-outline-success btn-lg">
            ➕ Add New Student
          </Link>
        </div>

        <div className="text-center mt-4">
          <small className="text-muted">Built with ❤️ using the MERN Stack</small>
        </div>
      </div>
    </div>
  );
}
