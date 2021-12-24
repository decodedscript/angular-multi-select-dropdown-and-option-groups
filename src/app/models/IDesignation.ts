import { IDepartment } from "./IDepartment";

export interface IDesignation {
    disabled: boolean,
    department: string,
    designations: IDepartment[]
}