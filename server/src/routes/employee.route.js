import { Router } from "express";
import { createEmployee } from "../controllers/createEmployee.controller.js";
import { deleteEmployee } from "../controllers/deleteEmployee.controller.js";
import { getEmployee } from "../controllers/getEmployee.controller.js";
import { getEmployees } from "../controllers/getEmployees.controller.js";
import { updateEmployee } from "../controllers/updateEmployee.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employee/:employeeId", getEmployee);

router.post("/employee/create", createEmployee);

router.delete("/employee/delete/:employeeId", deleteEmployee);

router.patch("/employee/update/:employeeId", updateEmployee);

export default router;
