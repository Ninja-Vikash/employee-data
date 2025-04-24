import { EmployeeModel } from "../model/employee.model.js";

export const createEmployee = async (req, res) => {
    const { avatarUrl, name, role, experience, gender, location } = req.body;

    try {
        if (
            [name, avatarUrl, role, gender, location, experience].includes("")
        ) {
            res.send("Please fill all the boxes");
            throw Error("Please fill all the boxes");
        }

        if (!avatarUrl.includes("https")) {
            res.send("Enter a valid url");
            throw Error("Enter a valid url");
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

        res.json({
            status: 201,
            message: "employee created!",
            data: newEmployee,
        });
    } catch (error) {
        console.log("Error in creating document on database", error);
    }
};
