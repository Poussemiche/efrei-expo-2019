import React, { Component } from "react";
import { Text, View } from "react-native";
import List from './../List/index';
import Filter from './../NavBar/Filter';

export default class Main extends Component{
    
    render(){

        return(
            <View>
            <Filter/>
            <List/>
            </View>
        )
    }
}