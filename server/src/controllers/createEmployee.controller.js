import { EmployeeModel } from "../model/employee.model.js";

export const createEmployee = async (req, res) => {
    const { avatarUrl, name, role, experience, gender, location } = req.body;

    try {
        if (
            [name, avatarUrl, role, gender, location, experience].includes("")
        ) {
            res.send("Please fill all keys")
            throw new Error("Please fill all the boxes");
        }

        if (!avatarUrl.includes("https")) {
            res.send("Please enter a valid url")
            throw new Error("Please enter a valid url");
        }

        const newEmployee = new EmployeeModel({
            avatarUrl,
            name,
            role,
            gender,
            experience,
            location,
        });

        await newEmployee.save();

        return res.json({
            status: 201,
            message: "employee created!",
            data: newEmployee,
        });
    } catch (error) {
        console.error(`Error while creating an employee: ${error}`);
        throw error
    }
};
