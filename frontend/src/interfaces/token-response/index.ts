export interface TokenResponse {
    church: ChurchToken;
    created_at: string;
    email: string;
    exp: number;
    first_access_at: string;
    iat: number;
    id: string;
    last_login_at: string;
    ministry: string;
    name: string
    password_changed_at: string;
    phone: string;
}
interface ChurchToken {
    city: {
        id: string;
        value: string;
        created_at: string;
    },
    name: string;
}