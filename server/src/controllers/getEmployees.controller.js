import { EmployeeModel } from "../model/employee.model.js";

export const getEmployees = async (_, res) => {
    const data = await EmployeeModel.find();
    res.json(data);
};
