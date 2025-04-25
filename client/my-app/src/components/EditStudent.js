import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditStudent() {
    const { id } = useParams(); // Get the Age from the URL
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: '',
        email: '',
        age: '',
        department: ''
    });

    // Fetch the student data when the component mounts
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/student/${id}`); // Ensure this URL is correct
                res.dob = res.dob?.slice(0, 10);
                setStudent(res.data);
            } catch (err) {
                alert('Error fetching student: ' + err.message);
            }
        };

        fetchStudent();
    }, [id]);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/student/${id}`, student); // Ensure this URL is correct
            alert('Student updated successfully!');
            navigate('/students'); // Redirect to the students list
        } catch (err) {
            alert('Error updating student: ' + err.message);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Department</label>
                    <input
                        type="text"
                        name="department"
                        value={student.department}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-warning">Update Student</button>
            </form>
        </div>
    );
}