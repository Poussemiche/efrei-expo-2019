import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation';
import { Ionicons,AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';

class AddItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>
                    AddItem
                </Text>
            </View>
        )
    }
}

