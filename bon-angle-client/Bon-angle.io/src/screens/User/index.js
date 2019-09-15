import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import users from './../User/users';
import items from './../List/items';
import Item from './../User/Item';
import { Ionicons,AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

export default class User extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }

    componentDidMount(){
        let products_owned = items.filter((item => item.id_user == '2daf302b-ecb1-4704-9d87-fdeb4c7abd9c'));
        this.setState({items:products_owned})
    }

    delete(products){
        this.setState({items:products})
    }

    add(products){
        this.setState({items:products})
    }

    render(){
        const user = users.find((user) => user.id == '2daf302b-ecb1-4704-9d87-fdeb4c7abd9c');
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);

        return(
            <SafeAreaView>
                <Ionicons name="ios-add-circle" size={24} color="green" style={{position:'absolute',right:20,top:20}} onPress={()=> this.add()}/>
                <ScrollView>
            <Text style={{textAlign:'center'}}>Hi {user.firstName}</Text>
            <Text style={{textAlign:'center'}}>Here are the products you are selling</Text>
            <View style={{flex:1}}>
                {this.state.items.map((m,i) => (
                    <Item data = {m} key = {i} update = {this.delete.bind(this)}/>
                ))}
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
