export interface RegistersInterface {
    id: string;
    name: string;
    phone: string;
    created_at: string;
    id_church: RegisterChurchInterface;
    id_ministry: RegisterDataInterface;
    id_instrument: RegisterInstrumentInterface;
    id_status: RegisterDataInterface;
}

interface RegisterChurchInterface {
    id: string;
    name: string;
    created_at: string;
    id_city: RegisterDataInterface;
}

interface RegisterInstrumentInterface extends RegisterDataInterface {
    id_category: RegisterDataInterface
}

export interface RegisterDataInterface {
    id: string;
    value: string;
    created_at: string;
}