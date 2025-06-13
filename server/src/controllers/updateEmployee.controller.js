import { EmployeeModel } from "../model/employee.model.js";

export const updateEmployee = async (req, res) => {
    const { _id } = req.params;
    const newData = req.body;

    try {
        const employee = await EmployeeModel.findOne({ _id });

        if (!employee) {
            throw new Error(
                `Employee doesn't exist with the following empId: ${_id}`
            );
        }

        const response = await EmployeeModel.findOneAndUpdate(
            { _id },
            { $set: newData },
            { new: true }
        );

        return res.json({
            message: "employee is updated",
            data: response,
        });
    } catch (error) {
        console.error(`Error while updating employee ${error}`);
        throw error;
    }
};
