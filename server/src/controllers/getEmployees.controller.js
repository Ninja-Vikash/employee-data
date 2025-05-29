import { EmployeeModel } from "../model/employee.model.js";

export const getEmployees = async (_, res) => {
    try {
        const data = await EmployeeModel.find();
        res.json(data);
    } catch (error) {
        console.log("Error while fetching employee from server", error)
    }
};
