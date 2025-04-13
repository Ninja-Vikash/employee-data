import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./database/index.js";
import { EmployeeModel } from "./model/employee.model.js";

dotenv.config({
    path: "./env",
});

app.get("/", (_, res) => {
    res.send("Server is working!");
});

app.get("/api/employees", async (_, res) => {
    const data = await EmployeeModel.find();
    res.send(data);
});

app.get("/api/employee/:employeeId", async (req, res) => {
    const { employeeId } = req.params;

    try {
        const response = await EmployeeModel.findOne({ _id: employeeId });
        res.send(response);
    } catch (error) {
        console.log("Error while fetching employee", error);
        throw Error("Error in fetching employee", error);
    }
});

app.post("/api/create", async (req, res) => {
    const { avatarUrl, name, role, experience, gender, location } = req.body;

    try {
        if (
            [name, avatarUrl, role, gender, location, experience].includes("")
        ) {
            res.send("Please fill all the boxes");
            throw Error("Please fill all the boxes");
        }

        if (!avatarUrl.includes("https")) {
            throw Error("Enter a valid url");
        }

        await EmployeeModel.create({
            avatarUrl,
            name,
            role,
            gender,
            experience,
            location,
        });
    } catch (error) {
        console.log("Error in creating document on database", error);
    }
});

app.put("/api/update/:employeeId", async (req, res) => {
    const { employeeId } = req.params;
    const newData = req.body;

    try {
        const response = await EmployeeModel.findOneAndUpdate(
            { _id: employeeId },
            { $set: newData },
            { new: true }
        );

        res.send(response);
    } catch (error) {
        console.log("Error while updating employee", error);
        res.send("Error while updating employee", error);
    }
});

app.delete("/api/delete/:employeeId", async (req, res) => {
    const { employeeId } = req.params;

    try {
        const response = await EmployeeModel.findOneAndDelete(employeeId);
        res.body(response);
    } catch (error) {
        console.log("Error on deleting employee");
        res.send("Error on deleting employee");
    }
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                `App is running on the http://localhost:${process.env.PORT}`
            );
        });
    })
    .catch((error) => {
        console.log(`Error in MONGODB connection ${error}`);
    });
