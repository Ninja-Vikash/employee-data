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

app.post("/api/create", async (req, res) => {
    const { avatarUrl, name, role, experience, gender, location } = req.body;

    try {
        if ([name, avatarUrl, role, gender, location, experience].includes("")) {
            res.send("Please fill all the boxes");
            throw Error("Please fill all the boxes");
        }

        if (!avatarUrl.includes("https")) {
            throw Error("Enter a valid url");
        }

        await EmployeeModel.create({
            url: avatarUrl,
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
