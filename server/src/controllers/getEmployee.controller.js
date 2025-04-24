import { EmployeeModel } from "../model/employee.model.js";

export const getEmployee = async (req, res) => {
    const { employeeId } = req.params;

    try {
        const response = await EmployeeModel.findOne({ _id: employeeId });
        res.json(response);
    } catch (error) {
        console.log("Error while fetching employee", error);
    }
};
