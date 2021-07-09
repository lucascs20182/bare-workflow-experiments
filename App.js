import React from 'react';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();

import Home from './components/Home';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import PrimeiroDesafio from './components/PrimeiroDesafio';
import CoreComponents from './components/CoreComponents';
import ScrollComponent from './components/ScrollComponent';
import ImageComponent from './components/ImageComponent';
import NewComponent from './components/NewComponent';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar hidden />
        {/* <Navigator >
          <Screen name="Portfólio da vergonha" component={Home} />
          <Screen name="Trabalho 1 kkkkkkk" component={Ex1} />
          <Screen name="Trabalho 2 kkkkkkk" component={Ex2} />
          <Screen name="Trabalho 3 kkkkkkk" component={Ex3} />
          <Screen name="Trabalho 4 kkkkkkk" component={Ex4} />
          <Screen name="Trabalho 5 kkkkkkk" component={Ex5} />
          <Screen name="Trabalho 6 kkkkkkk" component={Ex6} />
          <Screen name="Trabalho 7 kkkkkkk" component={PrimeiroDesafio} />
          <Screen name="Trabalho 8 kkkkkkk" component={CoreComponents} />
          <Screen name="Trabalho 9 kkkkkkk" component={ScrollComponent} />
          <Screen name="Trabalho 10 kkkkkkk" component={ImageComponent} />
          <Screen name="Trabalho 11 kkkkkkk" component={NewComponent} />
        </Navigator> */}
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Ex1" component={Ex1} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
