import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation';

class Product extends Component{

    navigate_item(){
        const { navigate } = this.props.navigation;
        navigate('Item', {id:this.props.data.id});
    }
    
    render(){

        return(
            <TouchableOpacity onPress={()=>this.navigate_item()}>
            <View style={{marginTop:10}}>
                <Image style={{ width: 200, height: 200 }} source = {this.props.data.photo}></Image>
                <Text style={{marginTop:5}}>{this.props.data.title}</Text>
                <Text style={{marginTop:5}}>$ {this.props.data.price}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(Product);