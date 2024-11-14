import { LoginCredentials } from "./auth";

export interface UserInfos extends LoginCredentials {
    fullName: string;
    username: string;
}