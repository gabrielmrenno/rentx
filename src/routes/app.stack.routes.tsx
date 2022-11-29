import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SingUpFirstStep } from '../screens/SingUp/SingUpFirstStep';
import { SingUpSecondStep } from '../screens/SingUp/SingUpSecondStep';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="FirstPage">
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SingUpFirstStep" component={SingUpFirstStep} />
            <Screen name="SingUpSecondStep" component={SingUpSecondStep} />
            <Screen
                name="FirstPage"
                component={Home}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Screen name="CarDetails" component={CarDetails} />
            <Screen name="Scheduling" component={Scheduling} />
            <Screen name="Confirmation" component={Confirmation} />
            <Screen name="SchedulingDetails" component={SchedulingDetails} />
            <Screen name="MyCars" component={MyCars} />
        </Navigator>
    )
}