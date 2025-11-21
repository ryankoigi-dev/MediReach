import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: String,
    time: String,
    status: { type: String, default: "pending" }
});

export default mongoose.model("Appointment", appointmentSchema);
