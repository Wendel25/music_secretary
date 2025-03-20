export interface DataDashboardReceived {
    resultData: ResultCalcInterface;
    secondResultData: TypesCalcInterface;
}

export interface TypesCalcInterface {
    Cordas: number
    Metais: number
    Madeiras: number
}

export interface ResultCalcInterface {
    musicians: MusiciansInterface;
    organists: OrganistsInterface;
}

export interface MusiciansInterface { 
    total: number;
    status: StatusMusicianInterface;
}

export interface OrganistsInterface {
    total: number;
    status: StatusMusicianInterface;
}

export interface StatusMusicianInterface {
    ensaio: number;
    reuniao_jovens: number;
    culto_oficial: number;
    oficializado: number;
}