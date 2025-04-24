import axios from "axios";
import { EmployeeData, EmployeeId } from "../types/employee.types";

export const createEmployeeApi = async (data: EmployeeData) => {
    const response = await axios.post("/api/employee/create", data, {
        headers: { "Content-Type": "application/json" },
    });
    return response;
};

export const getEmployeesApi = async () => {
    try {
        const response = await axios.get("/api/employees");
        return response.data;
    } catch (error) {
        console.log("Error in fetching avatars ", error);
    }
};

export const getEmployeeApi = async (employeeId: EmployeeId) => {
    try {
        const response = await axios.get(`/api/employee/${employeeId}`);
        return response.data;
    } catch (error) {
        console.log("Error while fetching employee", error);
    }
};

export const deleteEmployeeApi = async (employeeId: EmployeeId) => {
    const response = await axios.delete(`/api/employee/delete/${employeeId}`);
    return response;
};

export const updateEmployeeApi = async (
    employeeId: EmployeeId,
    newData: EmployeeData
) => {
    try {
        const response = axios.patch(`/api/employee/update/${employeeId}`, newData, {
            headers: { "Content-Type": "application/json" },
        });
        return response;
    } catch (error) {
        console.log("Error while updating employee data", error);
    }
};
