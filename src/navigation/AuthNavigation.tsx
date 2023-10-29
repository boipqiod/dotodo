import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/user/Login';
import {Register} from '../pages/user/Register';
import {UserStackParamList} from './NavigationType';

const Stack = createNativeStackNavigator<UserStackParamList>();

export const AuthNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};
