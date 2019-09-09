import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class List extends Component{
    
    render(){

        return(
            <View>
                <Image style={{ width: 150, height: 150 }} source = {this.props.data.photo}></Image>
                <Text>{this.props.data.title}</Text>
                <Text>{this.props.data.price}</Text>
            </View>
        )
    }
}