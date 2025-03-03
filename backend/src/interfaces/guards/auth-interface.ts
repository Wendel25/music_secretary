import { Request } from 'express';

export interface JwtPayload {
    id: string;
    name: string;
    email: string;
    church: string;
    ministry: string;
    instrument: string;
    status: string;
    last_login_at: Date | null;
    first_access_at: Date | null;
    password_changed_at: Date | null;
    created_at: Date | null;
    iat: number,
    exp: number
}

export interface CustomRequest extends Request {
    user?: JwtPayload;
}