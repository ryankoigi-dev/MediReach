import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
    const [appointments, setAppointments] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("http://localhost:5000/api/appointments", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => setAppointments(res.data));
    }, []);

    return (
        <div>
            <h2>Appointments</h2>
            {appointments.map(a => (
                <div key={a._id}>
                    <p>Patient: {a.patient?.name}</p>
                    <p>Doctor: {a.doctor?.name}</p>
                    <p>Date: {a.date}</p>
                </div>
            ))}
        </div>
    );
}
