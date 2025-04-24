import { EmployeeModel } from "../model/employee.model.js";

export const deleteEmployee = async (req, res) => {
    const { employeeId } = req.params;

    try {
        const isEmployeeExist = await EmployeeModel.findOne({
            _id: employeeId,
        });

        if (!isEmployeeExist) {
            res.send("Employee not exist")
        }

        const response = await EmployeeModel.findOneAndDelete({
            _id: employeeId,
        });
        res.json({ status: 200, message: "employee deleted", data: response });
    } catch (error) {
        console.log("Error on deleting employee");
        res.send("Error on deleting employee");
    }
};
