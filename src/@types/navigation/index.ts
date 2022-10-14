import { CarDTO } from "../../dtos/CarDTO";
import {
    MarkedDateProps
} from '../../components/Calendar';

export type RootStackParamList = {
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