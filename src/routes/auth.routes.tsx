import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Confirmation } from '../screens/Confirmation';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SingUpFirstStep } from '../screens/SingUp/SingUpFirstStep';
import { SingUpSecondStep } from '../screens/SingUp/SingUpSecondStep';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Screen name="Splash" component={Splash} />
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SingUpFirstStep" component={SingUpFirstStep} />
            <Screen name="SingUpSecondStep" component={SingUpSecondStep} />
            <Screen name="Confirmation" component={Confirmation} />
        </Navigator>
    )
}