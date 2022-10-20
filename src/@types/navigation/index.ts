import { CarDTO } from "../../dtos/CarDTO";

export type RootStackParamList = {
    Splash: undefined,
    Home: undefined,
    CarDetails: { car: CarDTO },
    Scheduling: { car: CarDTO },
    SchedulingComplete: undefined,
    SchedulingDetails: { car: CarDTO, dates: string[] },
    MyCars: undefined,
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}