import React, { Component } from "react";
import { Text, View } from "react-native";
import List from './../List/index';
import NavBar from './../NavBar';
import Filter from './../NavBar/Filter';

export default class Main extends Component{
    
    render(){

        return(
            <View>
            <NavBar/>
            <Filter/>
            <List/>
            </View>
        )
    }
}