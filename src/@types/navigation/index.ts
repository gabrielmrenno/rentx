import { CarDTO } from "../../dtos/CarDTO";

export type RootStackParamList = {
    Splash: undefined,
    Home: undefined,
    CarDetails: { car: CarDTO },
    Scheduling: { car: CarDTO },
    Confirmation: {
        title: string;
        message: string;
        // keyof takes an object type and produces a string
        nextScreenRoute: keyof RootStackParamList;
    },
    SchedulingDetails: { car: CarDTO, dates: string[] },
    MyCars: undefined,
    SignIn: undefined,
    SignUpFirstStep: undefined,
    SignUpSecondStep: { user: Object },
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}