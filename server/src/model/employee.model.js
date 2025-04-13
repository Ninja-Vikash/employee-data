import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    avatarUrl: String,
    role: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
    },
    location: String,
    experience: String,
});

export const EmployeeModel = mongoose.model("employee", employeeSchema);
