import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DefaultScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="DefaultScreen">
        <Stack.Screen name="DefaultScreen" component={DefaultScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
        <Stack.Screen name="MemberAreaTabs" component={MemberAreaTabs} />
        <Stack.Screen name="MyDocTabs" component={MyDocTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
