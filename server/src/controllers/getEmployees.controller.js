import { EmployeeModel } from "../model/employee.model.js";

export const getEmployees = async (_, res) => {
    try {
        const data = await EmployeeModel.find();
        return res.json(data);
    } catch (error) {
        console.error(`Error while fetching employee from server ${error}`)
        throw error
    }
};
