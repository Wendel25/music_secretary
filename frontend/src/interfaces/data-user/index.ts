export interface DataUserInterface {
    id: string;
    name: string;
    email: string;
    phone: string;
    first_access_at: Date | null,
    password_changed_at: Date | null;
    last_login_at: Date | null;
    blocked_at: Date | null;
    failed_attempts: number;
    active: boolean;
    created_at: string;
    id_church: ChurchUserInterface;
    id_ministry: InformationsUserInterface;
}

export interface ChurchUserInterface {
    id: string;
    name: string;
    id_city: InformationsUserInterface;
    created_at: string;
}

export interface InstrumentUserInterface extends InformationsUserInterface {
    id_category: InformationsUserInterface;
}

export interface InformationsUserInterface {
    id: string;
    value: string;
    created_at: string;
}

export type MinistriesType = "all-users" | "all-musicians" | "all-organists";
export type UseForType = "all-users" | "all-musicians";