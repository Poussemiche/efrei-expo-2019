import React, { Component } from "react";
import { Text, View } from "react-native";
import List from './../List/index';
import NavBar from './../NavBar';

export default class Main extends Component{
    
    render(){

        return(
            <View>
            <NavBar/>
            <List/>
            </View>
        )
    }
}