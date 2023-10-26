import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../pages/main/Main';
import {Setting} from '../pages/setting/Setting';

type TabParamList = {
  Home: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
