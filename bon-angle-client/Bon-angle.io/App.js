import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import List from './src/screens/List';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  List: {
    screen: List,
  }
}, {
    initialRouteName: 'List',
  }
  );

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;