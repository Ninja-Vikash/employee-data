import { Router } from "express";
import { createEmployee } from "../controllers/createEmployee.controller.js";
import { deleteEmployee } from "../controllers/deleteEmployee.controller.js";
import { getEmployee } from "../controllers/getEmployee.controller.js";
import { getEmployees } from "../controllers/getEmployees.controller.js";
import { updateEmployee } from "../controllers/updateEmployee.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employee/:_id", getEmployee);

router.post("/employee/create", createEmployee);

router.delete("/employee/:_id/delete", deleteEmployee);

router.patch("/employee/:_id/update", updateEmployee);

export default router;
