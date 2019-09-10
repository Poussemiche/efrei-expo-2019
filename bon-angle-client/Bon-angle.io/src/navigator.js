import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import List from './screens/List';
import Main from './screens/Main';
import Item from './screens/Item';
import User from './screens/User';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const HomeStack = createStackNavigator({
    Login: {
      screen: Login,
    },
    List: {
      screen: List,
    },
    Main: {
      screen: Main,
    },
    Item: {
      screen: Item,
    }
  }, {
      initialRouteName: 'Main',
    }
    );

    const TabNavigator = createBottomTabNavigator({
      Home: {
        screen: HomeStack
      },
      User:{
        screen: User
      }
    }, {
      initialRouteName: 'Home',
    });
  
  const AppContainer = createAppContainer(TabNavigator);
  
  export default AppContainer;