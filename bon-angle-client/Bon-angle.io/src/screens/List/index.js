import React, { Component } from "react";
import { Text, View } from "react-native";
import items from './items';
import Product from './Product';

export default class List extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <View style={{flex:1, flexDirection:'row'}}>
                {items.map((m,i) => (
                    <Product data = {m}/>
                ))}
            </View>
        )
    }
}