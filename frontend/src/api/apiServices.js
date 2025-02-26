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
