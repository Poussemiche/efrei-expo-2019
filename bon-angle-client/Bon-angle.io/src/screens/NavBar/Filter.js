import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Product extends Component{

    navigate_item(){
        const { navigate } = this.props.navigation;
        navigate('Item', {id:this.props.data.id});
    }
    
    render(){

        return(
            <View style={{height:50, backgroundColor:'#d1cdcd'}}>
            </View>
        )
    }
}