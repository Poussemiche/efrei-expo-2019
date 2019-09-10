import React, { Component } from "react";
import { Text, View, Image,Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class Product extends Component{

    navigate_item(){
        const { navigate } = this.props.navigation;
        navigate('Item', {id:this.props.data.id});
    }
    
    render(){
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        return(
            <TouchableOpacity onPress={()=>this.navigate_item()}>
            <View style={{marginTop:10}}>
                <Image style={{ width: screenWidth/2.5, height: screenHeight/4 }} source = {this.props.data.photo}></Image>
                <Text style={{marginTop:5}}>{this.props.data.title}</Text>
                <Text style={{marginTop:5}}>$ {this.props.data.price}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(Product);