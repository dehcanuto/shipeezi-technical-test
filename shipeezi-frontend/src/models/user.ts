import { LoginCredentials } from "./auth";

export interface UserInfos extends LoginCredentials {
    fullName: string;
    username: string;
}

export interface UserUpdate extends UserInfos {
    birthdate: string;
    gender:  number;
    email: string;
    phone: string;
    address: string;
    address_type: number;
}

export interface UsersListResponse extends UserUpdate {
    id: number;
    updatedAt: string;
    createdAt: string;
}