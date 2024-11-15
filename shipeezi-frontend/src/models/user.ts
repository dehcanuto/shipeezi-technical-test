import { LoginCredentials } from "./auth";

export interface UserInfos extends LoginCredentials {
    fullName: string;
    username: string;
}

export interface UsersListResponse extends UserInfos {
    id: number;
}