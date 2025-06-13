import axios from "axios";
import { EmployeeData, EmployeeId } from "../types/employee.types";

const baseUrl: string = "http://localhost:8000"

export const createEmployeeApi = async (data: EmployeeData) => {
    const response = await axios.post(`${baseUrl}/api/employee/create`, data, {
        headers: { "Content-Type": "application/json" },
    });
    return response;
};

export const getEmployeesApi = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/employees`);
        return response.data;
    } catch (error) {
        console.log("Error in fetching avatars ", error);
    }
};

export const getEmployeeApi = async (employeeId: EmployeeId) => {
    try {
        const response = await axios.get(`${baseUrl}/api/employee/${employeeId}`);
        return response.data;
    } catch (error) {
        console.log("Error while fetching employee", error);
    }
};

export const deleteEmployeeApi = async (employeeId: EmployeeId) => {
    const response = await axios.delete(`${baseUrl}/api/employee/${employeeId}/delete`);
    return response;
};

export const updateEmployeeApi = async (
    employeeId: EmployeeId,
    newData: EmployeeData
) => {
    try {
        const response = axios.patch(`${baseUrl}/api/employee/${employeeId}/update`, newData, {
            headers: { "Content-Type": "application/json" },
        });
        return response;
    } catch (error) {
        console.log("Error while updating employee data", error);
    }
};
