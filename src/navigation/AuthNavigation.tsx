import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Login} from '../pages/auth/Login';
import {Register} from '../pages/auth/Register';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/*<Stack.Screen*/}
      {/*  name="ForgotPassword"*/}
      {/*  component={ForgotPassword}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="ResetPassword"*/}
      {/*  component={ResetPassword}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};
