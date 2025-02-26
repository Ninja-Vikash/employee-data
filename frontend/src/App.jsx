import React, { useEffect, useState } from "react";
import { createEmployeeApi, getEmployeesApi } from "./api/apiServices";

const App = () => {
    const [avatarUrl, setAvatarUrl] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState(null);
    const [gender, setGender] = useState(null);
    const [experience, setExperience] = useState(0);
    const [location, setLocation] = useState("");

    const [employeeData, setEmployeeData] = useState([]);

    const createAvatar = async () => {
        const res = await createEmployeeApi({
            name,
            avatarUrl,
            role,
            gender,
            experience,
            location,
        });
        console.log(res);
    };

    const getEmployees = async () => {
        const res = await getEmployeesApi();
        setEmployeeData(res);
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="min-h-[100dvh] font-[Poppins] bg-zinc-950 text-white flex flex-col items-center">
            <div className="w-3/4 mt-4">
                <div className="flex gap-4">
                    <div className="w-2/4">
                        <h1 className="text-lg font-semibold">EMPLOYEE NAME</h1>
                        <input
                            type="text"
                            className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <h1 className="mt-3 text-lg font-bold">
                            EMPLOYEE PICTURE URL
                        </h1>
                        <textarea
                            onChange={(e) => setAvatarUrl(e.target.value)}
                            className="h-29 p-2 resize-none bg-zinc-900 mt-2 w-full"
                        ></textarea>
                    </div>

                    <div className="w-2/4">
                        <h1 className="text-lg font-semibold">EMPLOYEE ROLE</h1>
                        <input
                            type="text"
                            className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <fieldset
                            className="mt-3 flex gap-2 py-2 px-2 bg-zinc-900"
                            onChange={(e) => setGender(e.target.value)}
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
                                    className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                                    onChange={(e) =>
                                        setExperience(e.target.value)
                                    }
                                />
                            </section>
                            <section className="w-1/2">
                                <h1 className="mt-3 text-lg font-semibold">
                                    LOCATION
                                </h1>
                                <input
                                    type="text"
                                    className="p-2 h-10 bg-zinc-900 mt-2 w-full"
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                />
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-start mt-2 gap-4">
                    <button
                        onClick={createAvatar}
                        className="p-3 bg-blue-700 rounded-md"
                    >
                        SAVE
                    </button>

                    <button
                        onClick={() => window.location.reload()}
                        className="p-3 bg-yellow-700 rounded-md flex gap-1"
                    >
                        <img src="/refresh.svg" alt="" />
                        REFRESH
                    </button>
                </div>
            </div>

            <div className="w-3/4 mt-3 grid grid-cols-4 gap-2">
                {employeeData.map((employee, idx) => {
                    return (
                        <div
                            key={idx}
                            className="p-2 w-full bg-zinc-800 rounded-md"
                        >
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
};

export default App;
