import React, { Component } from "react";
import { Text, View } from "react-native";

export default class NavBar extends Component{
    
    render(){

        return(
            <View style={{height:50, backgroundColor:'#404040'}}>
                <Text style={{textAlign:'center',paddingTop:10}}>Bon Angle</Text>
            </View>
        )
    }
}