import { CarModel } from "../../models/CarModel";

export type RootStackParamList = {
    Splash: undefined,
    Home: undefined,
    CarDetails: { car: CarModel },
    Scheduling: { car: CarModel },
    Confirmation: {
        title: string;
        message: string;
        // keyof takes an object type and produces a string
        nextScreenRoute: keyof RootStackParamList;
    },
    SchedulingDetails: { car: CarModel, dates: string[] },
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