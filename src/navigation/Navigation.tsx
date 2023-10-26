/**
 * 전체 네이게이션을 관리하는 컴포넌트
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {MainTab} from './MainTab';
import {Splash} from '../pages/common/Splash';
import {AuthNavigation} from './AuthNavigation';
import {RootStackParamList} from './NavigationType';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Main'} component={MainTab} />
        <Stack.Screen name={'Auth'} component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
