import { LoginCredentials } from "./auth";

export interface UserInfos extends LoginCredentials {
    fullName: string;
    username: string;
}

export interface UsersListResponse extends UserInfos {
    id: number;
    birthdate: string;
    gender:  number;
    email: string;
    phone: string;
    updatedAt: string;
    createdAt: string;
}