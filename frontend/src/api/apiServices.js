import axios from "axios";

export const createEmployeeApi = async (data) => {
    const response = await axios.post("/api/create", data, {
        "Content-Type": "application/json",
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

export const getEmployeeApi = async (employeeId) => {
    try {
        const response = await axios.get(`/api/employee/${employeeId}`);
        return response.data;
    } catch (error) {
        console.log("Error while fetching employee", error);
    }
};

export const deleteEmployeeApi = async (employeeId) => {
    const response = await axios.delete(`/api/delete/${employeeId}`);
    return response;
};

export const updateEmployeeApi = async (employeeId, newData) => {
    try {
        const response = axios.put(`/api/update/${employeeId}`, newData, {
            "Content-Type": "application/json",
        });
        return response.data;
    } catch (error) {
        console.log("Error while updating employee data", error);
    }
};
