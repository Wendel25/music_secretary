export interface DataUserInterface {
    id: string;
    name: string;
    email: string;
    phone: string;
    first_access_at: string | null;
    password_changed_at: string | null;
    last_login_at: string | null;
    failed_attempts: number;
    blocked_at: string | null;
    active: boolean;
    created_at: string;
    id_church: ChurchUserInterface;
    id_ministry: InformationsUserInterface | null;
    id_instrument: InformationsUserInterface | null;
    id_status: InformationsUserInterface | null;
}

export interface ChurchUserInterface {
    id: string;
    name: string;
    city: string;
    created_at: string;
}

export interface InformationsUserInterface {
    id: string;
    value: string;
    created_at: string;
}