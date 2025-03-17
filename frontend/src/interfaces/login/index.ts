export interface TokenLogin {
    token: string
}

export interface TokenDecode {
    id: string;
    name: string;
    email: string;
    phone: string;
    church: string;
    ministry: string;
    last_login_at: string;
    first_access_at: string;
    password_changed_at: string;
    created_at: string;
    iat: number;
    exp: number;
}