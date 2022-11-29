import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';

import { AppStackRoutes } from './app.stack.routes';
import { MyCars } from '../screens/MyCars';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                // to set color when route is active or not
                tabBarActiveTintColor: theme.colors.main,
                tabBarInactiveTintColor: theme.colors.text_detail,
                // to hide label
                tabBarShowLabel: false,
                // style tab navigator
                tabBarStyle: {
                    height: 78,
                    backgroundColor: theme.colors.background_primary
                }
            }}
        >
            <Screen
                name="Home"
                component={AppStackRoutes}
                options={{
                    tabBarIcon: (({ color }) => (
                        // passing the icon with the color management (active or not)
                        // Need to take off "fill" property from archive .svg
                        <HomeSvg width={24} height={24} fill={color} />
                    ))
                }}
            />
            <Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: (({ color }) => (
                        // passing the icon with the color management (active or not)
                        // Need to take off "fill" property from archive .svg
                        <PeopleSvg width={24} height={24} fill={color} />
                    ))
                }}
            />
            <Screen
                name="MyCars"
                component={MyCars}
                options={{
                    tabBarIcon: (({ color }) => (
                        // passing the icon with the color management (active or not)
                        // Need to take off "fill" property from archive .svg
                        <CarSvg width={24} height={24} fill={color} />
                    ))
                }}
            />
        </Navigator>
    )
}