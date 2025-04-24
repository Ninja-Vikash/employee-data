import { EmployeeModel } from "../model/employee.model.js";

export const updateEmployee = async (req, res) => {
    const { employeeId } = req.params;
    const newData = req.body;

    try {
        const existedEmployee = await EmployeeModel.findOne({
            _id: employeeId,
        });

        if (!existedEmployee) {
            res.send("Not existed employee");
        }

        const response = await EmployeeModel.findOneAndUpdate(
            { _id: employeeId },
            { $set: newData },
            { new: true }
        );

        res.json({
            message: "employee is updated",
            data: response,
        });
    } catch (error) {
        console.log("Error while updating employee", error);
        res.send("Error while updating employee");
    }
};
