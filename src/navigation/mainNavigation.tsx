import React, { FC } from 'react';
import {
    NavigationContainer,
} from '@react-navigation/native'
import HomeScreenStack from './HomeStack/HomeStack';
import { setTopLevelNavigator } from './NavigationService';

export const Navigation: FC = () => {
    return (
        <NavigationContainer
            ref={(navigatorRef: any) => {
                setTopLevelNavigator(navigatorRef);
            }}
        >
            <HomeScreenStack />
        </NavigationContainer>
    );
}