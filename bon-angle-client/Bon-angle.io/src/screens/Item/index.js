import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import items from './../List/items';
import NavBar from './../NavBar';

export default class Item extends Component{

    constructor(props){
        super(props)
    }
    
    render(){
        const id = this.props.navigation.getParam('id');
        const item = items.find((item) => item.id == id);
        return(
            <View>
            <NavBar/>
                <Text>{item.title}</Text>
            </View>
        )
    }
}