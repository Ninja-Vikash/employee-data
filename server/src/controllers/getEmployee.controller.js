import { EmployeeModel } from "../model/employee.model.js";

export const getEmployee = async (req, res) => {
    const { _id } = req.params;

    try {
        const employee = await EmployeeModel.findOne({ _id });

        if (!employee) {
            throw new Error(`Employee doesn't exist with the following empId: ${_id}`)
        }
        
        return res.json(employee);
    } catch (error) {
        console.error("Error while fetching employee", error);
        throw error
    }
};
