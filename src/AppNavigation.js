import React from 'react';
import {NavigationContainer} from '@react-native/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screen/MainScreen';
import CatalogScreen from './screen/CatalogScreen';
import NewsScreen from './screen/NewsScreen';
import PlantsScreen from './screen/PlantsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
    </Stack.Navigator>
  );
};

const CatalogFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
      <Stack.Screen name="PlantsScreen" component={PlantsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainFlow}></Tab.Screen>
      <Tab.Screen name="Catalog" component={CatalogFlow}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigation;
