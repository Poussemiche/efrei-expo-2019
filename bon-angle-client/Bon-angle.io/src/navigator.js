// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/Register';
import Login from './screens/Login';
import List from './screens/List';
import Main from './screens/Main';
import Item from './screens/Item';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
    Register: {
      screen: Register,
    },
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
      initialRouteName: 'Register',
    }
    );
  
  const AppContainer = createAppContainer(AppNavigator);
  
  export default AppContainer;