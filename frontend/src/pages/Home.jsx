import { useEffect, useState } from "react";
import {
    createEmployeeApi,
    deleteEmployeeApi,
    getEmployeesApi,
} from "../api/apiServices";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [createEmployeeData, setCreateEmployeeData] = useState({
        avatarUrl: "",
        name: "",
        role: null,
        gender: null,
        experience: 0,
        location: "",
    });

    const [employeeData, setEmployeeData] = useState([]);

    const handleEmployeeData = (e) => {
        setCreateEmployeeData((prevDets) => ({
            ...prevDets,
            [e.target.name]: e.target.value,
        }));
    };

    const createEmployee = async () => {
        try {
            const res = await createEmployeeApi(createEmployeeData);
        } catch (error) {
            console.log("Error in creating employee", error);
        }
    };

    const getEmployees = async () => {
        const res = await getEmployeesApi();
        setEmployeeData(res);
    };

    const deleteEmployee = async (employeeId) => {
        await deleteEmployeeApi(employeeId);
    };

    const updateEmployee = (employeeId) => navigate(`/update/${employeeId}`);

    useEffect(() => {
        getEmployees();
    }, []);
    
    useEffect(() => {
        getEmployees();
    }, [deleteEmployee]);

    return (
        <div className="min-h-[100dvh] font-[Poppins] bg-zinc-950 text-white flex flex-col items-center">
            {/* INPUT AREA */}
            <div className="w-3/4 mt-4">
                <div className="flex gap-4">
                    <div className="w-2/4">
                        <h1 className="text-lg font-semibold">EMPLOYEE NAME</h1>
                        <input
                            type="text"
                            name="name"
                            className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                            onChange={handleEmployeeData}
                        />
                        <h1 className="mt-3 text-lg font-bold">
                            EMPLOYEE PICTURE URL
                        </h1>
                        <textarea
                            name="avatarUrl"
                            onChange={handleEmployeeData}
                            className="h-29 p-2 resize-none bg-zinc-900 mt-2 w-full"
                        ></textarea>
                    </div>

                    <div className="w-2/4">
                        <h1 className="text-lg font-semibold">EMPLOYEE ROLE</h1>
                        <input
                            type="text"
                            name="role"
                            className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                            onChange={handleEmployeeData}
                        />
                        <fieldset
                            className="mt-3 flex gap-2 py-2 px-2 bg-zinc-900"
                            name="gender"
                            onChange={handleEmployeeData}
                        >
                            <legend>SELECT GENDER</legend>

                            <label
                                htmlFor="male"
                                className="flex gap-1 items-center"
                            >
                                <input
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value="Male"
                                />
                                MALE
                            </label>
                            <label
                                htmlFor="female"
                                className="flex gap-1 items-center"
                            >
                                <input
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="Female"
                                />
                                FEMALE
                            </label>
                            <label
                                htmlFor="other"
                                className="flex gap-1 items-center"
                            >
                                <input
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    value="Other"
                                />
                                OTHER
                            </label>
                        </fieldset>
                        <div className="flex gap-2">
                            <section className="w-1/2">
                                <h1 className="mt-3 text-lg font-semibold">
                                    EXPERIENCE
                                </h1>
                                <input
                                    type="text"
                                    name="experience"
                                    className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                                    onChange={handleEmployeeData}
                                />
                            </section>
                            <section className="w-1/2">
                                <h1 className="mt-3 text-lg font-semibold">
                                    LOCATION
                                </h1>
                                <input
                                    type="text"
                                    name="location"
                                    className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                                    onChange={handleEmployeeData}
                                />
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-start mt-2 gap-4">
                    <button
                        onClick={createEmployee}
                        className="p-3 bg-blue-700 rounded-md"
                    >
                        SAVE
                    </button>
                </div>
            </div>

            <div className="w-3/4 mt-3 grid grid-cols-4 gap-2">
                {employeeData.map((employee, idx) => {
                    return (
                        <div
                            key={idx}
                            className="p-2 w-full bg-zinc-800 rounded-md relative"
                        >
                            <div className="absolute top-0 right-0 flex gap-2 bg-zinc-800 px-2 py-2 rounded-md">
                                <button
                                    onClick={() => updateEmployee(employee._id)}
                                    className="cursor-pointer hover:grayscale-0 transition-all ease-in"
                                >
                                    <img src="/edit.svg" alt="delete" />
                                </button>
                                <button
                                    onClick={() => deleteEmployee(employee._id)}
                                    className="cursor-pointer hover:grayscale-0 transition-all ease-in"
                                >
                                    <img src="/delete.svg" alt="delete" />
                                </button>
                            </div>
                            <img
                                src={employee?.url}
                                alt="image"
                                className="h-64 w-full object-center rounded-sm"
                            />
                            <div className="mt-2 flex gap-2 items-center">
                                <p className="text-lg flex items-center gap-2 capitalize">
                                    {employee?.gender === "Male" ? "Mr" : "Ms"}
                                    <span className="capitalize">
                                        {employee?.name}
                                    </span>
                                    <span
                                        className={`h-2 w-2 bg-amber-300 block rounded-full`}
                                    ></span>
                                </p>
                                <p className="text-sm font-medium text-zinc-400 ">
                                    {employee.role}
                                </p>
                            </div>

                            <p className="text-xs mt-2 text-zinc-500">
                                Based on {employee.location}
                            </p>
                            <p className="text-sm mt-1 text-zinc-400">
                                Experience of{" "}
                                <span className="text-zinc-50">
                                    {employee.experience}Yrs
                                </span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
