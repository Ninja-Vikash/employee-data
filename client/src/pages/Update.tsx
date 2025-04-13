import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getEmployeeApi, updateEmployeeApi } from "../api/apiServices";
import { EmployeeData } from "../types/employee.types";

function Update() {
    const navigate = useNavigate();
    const { employeeId } = useParams();

    const [employeeData, setEmployeeData] = useState<EmployeeData>({
        avatarUrl: "",
        name: "",
        role: null,
        gender: null,
        experience: 0,
        location: "",
    });

    const handleEmployeeData = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setEmployeeData((prevDets) => ({
            ...prevDets,
            [name]: value,
        }));
    };

    const getEmployee = async () => {
        try {
            const res = await getEmployeeApi(employeeId);
            setEmployeeData(res);
        } catch (error) {
            console.log("Error while fetching data on frontend", error);
        }
    };

    const updateEmployee = async () => {
        await updateEmployeeApi(employeeId, employeeData);
    };

    useEffect(() => {
        getEmployee();
    }, []);

    return (
        <div className='min-h-[100dvh] font-[Poppins] bg-zinc-950 text-white flex flex-col items-center'>
            <div className='w-3/4 mt-4'>
                <div className='flex gap-4'>
                    <div className='w-2/4'>
                        <h1 className='text-lg font-semibold'>EMPLOYEE NAME</h1>
                        <input
                            type='text'
                            name='name'
                            value={employeeData.name}
                            className='p-2 h-10 bg-zinc-900 mt-2 w-full'
                            onChange={handleEmployeeData}
                        />
                        <h1 className='mt-3 text-lg font-bold'>
                            EMPLOYEE PICTURE URL
                        </h1>
                        <textarea
                            name='avatarUrl'
                            value={employeeData.avatarUrl}
                            onChange={handleEmployeeData}
                            className='h-29 p-2 resize-none bg-zinc-900 mt-2 w-full'
                        ></textarea>
                    </div>

                    <div className='w-2/4'>
                        <h1 className='text-lg font-semibold'>EMPLOYEE ROLE</h1>
                        <input
                            type='text'
                            name='role'
                            className='p-2 h-10 bg-zinc-900 mt-2 w-full'
                            value={employeeData.role || ""}
                            onChange={handleEmployeeData}
                        />
                        <fieldset
                            className='mt-3 flex gap-2 py-2 px-2 bg-zinc-900'
                            name='gender'
                        >
                            <legend>SELECT GENDER</legend>

                            <label
                                htmlFor='Male'
                                className='flex gap-1 items-center'
                            >
                                <input
                                    type='radio'
                                    name='gender'
                                    id='Male'
                                    value='Male'
                                    checked={employeeData.gender === "Male"}
                                    onChange={handleEmployeeData}
                                />
                                MALE
                            </label>
                            <label
                                htmlFor='Female'
                                className='flex gap-1 items-center'
                            >
                                <input
                                    type='radio'
                                    name='gender'
                                    id='Female'
                                    value='Female'
                                    checked={employeeData.gender === "Female"}
                                    onChange={handleEmployeeData}
                                />
                                FEMALE
                            </label>
                            <label
                                htmlFor='Other'
                                className='flex gap-1 items-center'
                            >
                                <input
                                    type='radio'
                                    name='gender'
                                    id='Other'
                                    value='Other'
                                    checked={employeeData.gender === "Other"}
                                    onChange={handleEmployeeData}
                                />
                                OTHER
                            </label>
                        </fieldset>
                        <div className='flex gap-2'>
                            <section className='w-1/2'>
                                <h1 className='mt-3 text-lg font-semibold'>
                                    EXPERIENCE
                                </h1>
                                <input
                                    type='text'
                                    name='experience'
                                    className='p-2 h-10 bg-zinc-900 mt-2 w-full'
                                    value={employeeData.experience}
                                    onChange={handleEmployeeData}
                                />
                            </section>
                            <section className='w-1/2'>
                                <h1 className='mt-3 text-lg font-semibold'>
                                    LOCATION
                                </h1>
                                <input
                                    type='text'
                                    name='location'
                                    className='p-2 h-10 bg-zinc-900 mt-2 w-full'
                                    value={employeeData.location}
                                    onChange={handleEmployeeData}
                                />
                            </section>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-start mt-2 gap-4'>
                    <button
                        onClick={() => navigate(-1)}
                        className='p-3 bg-green-700 rounded-md'
                    >
                        BACK
                    </button>

                    <button
                        onClick={() => {
                            updateEmployee();
                            navigate("/");
                        }}
                        className='p-3 bg-blue-700 rounded-md flex gap-1'
                    >
                        <img src='/refresh.svg' alt='' />
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Update;
