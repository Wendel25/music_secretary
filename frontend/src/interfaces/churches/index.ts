export interface ChurchInterface {
    id: string;
    name: string;
    city: CityInterface;
    created_at: string;
}

export interface CityInterface {
    id: string;
    name: string;
    created_at: string;
}