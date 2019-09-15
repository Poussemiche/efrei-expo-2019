import React, { Component } from "react";
import { Text, View, Image,Button,Dimensions } from "react-native";
import items from './../List/items';

export default class Item extends Component{

    constructor(props){
        super(props)
    }
    
    render(){
        const id = this.props.navigation.getParam('id');
        const item = items.find((item) => item.id == id);
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        return(
            <View>
                <Image style={{ width: '100%', height: screenHeight/1.5 }} source = {item.photo}/>
                <Text style={{textAlign:'center'}}>{item.title}</Text>
                <Text style={{textAlign:'center'}}>{item.price} $</Text>
                {/* <Text>Tags: {item.categories.map((m,i) => (
                    <Text key = {i}> {m}</Text>
                ))}</Text> */}
                <View style={{backgroundColor:'green',margin:10}}>
                <Button title="Buy" color="white"/>
                </View>
            </View>
        )
    }
}