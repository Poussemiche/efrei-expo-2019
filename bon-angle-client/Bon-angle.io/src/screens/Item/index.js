import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import items from './../List/items';

export default class Item extends Component{

    constructor(props){
        super(props)
    }
    
    render(){
        const id = this.props.navigation.getParam('id');
        const item = items.find((item) => item.id == id);
        return(
            <View>
                <Image style={{ width: '100%', height: 400 }} source = {item.photo}/>
                <Text>{item.title}</Text>
                <Text>{item.price} $</Text>
                <Text>Tags: {item.categories.map((m,i) => (
                    <Text key = {i}> {m}</Text>
                ))}</Text>
            </View>
        )
    }
}