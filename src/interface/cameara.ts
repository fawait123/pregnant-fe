import type { IUser } from "./user";

export interface ICamera {
    date: string,
    userID: IUser,
    source: string,
}