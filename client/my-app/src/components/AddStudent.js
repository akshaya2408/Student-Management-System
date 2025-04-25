import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        age: '',
        department: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/student/${id}`, student) // Ensure this URL is correct
            .then(() => {
                alert('Student added successfully!');
                navigate('/students');
            })
            .catch(err => alert('Error: ' + err.message));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Age</label>
                    <input
                        name="age"
                        type="number"
                        value={student.age}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter age"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Department</label>
                    <input
                        name="department"
                        value={student.department}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter department"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;
