type Gender = "Male" | "Female" | "Other" | null;

export interface EmployeeData {
    avatarUrl: string;
    name: string;
    role: string | null;
    gender: Gender;
    experience: number;
    location: string;
}

export type EmployeeId = string | undefined;
