import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation';
import { Ionicons,AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';
import items from './../List/items'

class EditItem extends Component{

    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    render(){
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        return( 
            <View style={{marginTop:10,flex: 1,textAlign:'center'}}>
                {/* <Image style={{ width: screenWidth/3, height: screenHeight/6 }} source = {this.props.data.photo}></Image>       
                <Text style={{marginTop:5}}>{this.props.data.title}</Text>
                <Text style={{marginTop:5}}>$ {this.props.data.price}</Text>
                <Text style={{marginTop:5}}>$ {this.props.data.categories}</Text> */}
                <Text>{this.props.data}</Text>
                
            </View>
        )
    }
}

export default withNavigation(EditItem);