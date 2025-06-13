import { EmployeeModel } from "../model/employee.model.js";

export const deleteEmployee = async (req, res) => {
    const { _id } = req.params;

    try {
        const employee = await EmployeeModel.findOne({ _id });

        if (!employee) {
            throw new Error("Employee doesn't exist in the database!");
        }

        const response = await EmployeeModel.findOneAndDelete({ _id });
        
        return res.json({ status: 200, data: response });
    } catch (error) {
        throw error;
    }
};
