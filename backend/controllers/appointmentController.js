import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
    const appointment = await Appointment.create({
        patient: req.user.id,
        doctor: req.body.doctor,
        date: req.body.date,
        time: req.body.time
    });

    res.json(appointment);
};

export const getAppointments = async (req, res) => {
    const appointments = await Appointment.find()
        .populate("patient")
        .populate("doctor");

    res.json(appointments);
};
