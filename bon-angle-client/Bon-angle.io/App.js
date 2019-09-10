import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import List from './src/screens/List';
import Main from './src/screens/Main';
import NavBar from './src/screens/NavBar';
import Item from './src/screens/Item';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  List: {
    screen: List,
  },
  Main: {
    screen: Main,
  },
  NavBar: {
    screen: NavBar,
  }
  ,
  Item: {
    screen: Item,
  }
}, {
    initialRouteName: 'Main',
  }
  );

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;