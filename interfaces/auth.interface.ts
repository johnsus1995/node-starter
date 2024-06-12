import { Router } from "express";

interface User{
    id: number,
    email: string,
    // name: string,
    isVerified: boolean,
}

export interface LoginResponse{
 user: User,
 token:string
}