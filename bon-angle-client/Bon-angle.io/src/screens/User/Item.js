import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation';

class Product extends Component{
    
    render(){

        return(
            <View style={{marginTop:10}}>
                <Image style={{ width: 125, height: 125 }} source = {this.props.data.photo}></Image>
                <Text style={{marginTop:5}}>{this.props.data.title}</Text>
                <Text style={{marginTop:5}}>$ {this.props.data.price}</Text>
            </View>
        )
    }
}

export default withNavigation(Product);