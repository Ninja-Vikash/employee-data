import { EmployeeModel } from "../model/employee.model.js";

export const getEmployee = async (req, res) => {
    const { employeeId } = req.params;

    try {
        const employee = await EmployeeModel.findOne({ _id: employeeId });

        if (!employee) {
            res.send("employee not exist");
            return;
        }
        
        res.json(employee);
    } catch (error) {
        console.log("Error while fetching employee", error);
    }
};
