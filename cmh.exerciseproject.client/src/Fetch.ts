import { Patient } from "./Patient";

export async function GetPatients():Promise<Patient[]> {
    return await request("Patient/GetPatients");
}

export async function SearchPatients(name: string): Promise<Patient[]> {
    /**
     * Todo
     */
    return [];
}


export async function DeletePatient(patientId: number): Promise<number> {
    /**
     * Todo
     */
    return 0;
}

export async function AddPatient(patient: Patient): Promise<number> {
    /**
     * Todo
     */
    return 0;
}

export function request<T>(url: string, config: RequestInit = {}): Promise<T>
{
    return fetch(url, config)
        .then(response => response.json())
        .then(data => data as T)
        .catch(e => {
            console.error(e)
            return e;
        });
}