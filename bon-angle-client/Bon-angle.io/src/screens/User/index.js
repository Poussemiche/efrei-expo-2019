import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import users from './../User/users';
import items from './../List/items';
import Item from './../User/Item';

export default class User extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const user = users.find((user) => user.id == '2daf302b-ecb1-4704-9d87-fdeb4c7abd9c');
        let products_owned = items.filter((item => item.id_user == '2daf302b-ecb1-4704-9d87-fdeb4c7abd9c'));
        console.log(products_owned)
        return(
            <SafeAreaView>
                <ScrollView>
            <Text style={{textAlign:'center'}}>Hi {user.firstName}</Text>
            <Text style={{textAlign:'center'}}>Here are the products you are selling</Text>
            <View style={{flexDirection:'row',justifyContent: 'space-around',flexWrap: 'wrap'}}>
                {products_owned.map((m,i) => (
                    <Item data = {m} key = {i}/>
                ))}
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}