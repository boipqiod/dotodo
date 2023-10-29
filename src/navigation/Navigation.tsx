/**
 * 전체 네이게이션을 관리하는 컴포넌트
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainTab} from './MainTab';
import {Splash} from '../pages/common/Splash';
import {AuthNavigation} from './AuthNavigation';
import {RootStackParamList} from './NavigationType';
import {Scan} from '../pages/auth/Scan';
import {PassportScan} from '../pages/passport/PassportScan';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Splash'}
                screenOptions={{headerShown: false}}>
                <Stack.Screen name={'Splash'} component={Splash} />
                <Stack.Screen name={'Main'} component={MainTab} />
                <Stack.Screen name={'UserNavi'} component={AuthNavigation} />
                <Stack.Screen name={'Scan'} component={Scan} />
                <Stack.Screen name={'PassportScan'} component={PassportScan} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
