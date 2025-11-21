import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [form, setForm] = useState({name:"",email:"",password:"",role:"patient"});

    const submit = async () => {
        await axios.post("http://localhost:5000/api/auth/register", form);
        window.location.href = "/";
    };

    return (
        <div>
            <h2>Register</h2>
            <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
            <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
            <select onChange={(e)=>setForm({...form,role:e.target.value})}>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>
            <button onClick={submit}>Register</button>
        </div>
    );
}
