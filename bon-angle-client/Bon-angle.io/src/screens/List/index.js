import React, { Component } from "react";
import { Text, View } from "react-native";
import items from './items';
import Product from './Product';

export default class List extends Component{
    constructor(props){
        super(props);
    }


    render(){
        let items_filtered = [];
        if(this.props.filtre == null){
            items_filtered = items;
            console.log('ok')
        }else{
            items_filtered = items.filter(item => item.title.toUpperCase().includes(this.props.filtre.toUpperCase()))
        }
        
        return(
            <View style={{flexDirection:'row',justifyContent: 'space-around',flexWrap: 'wrap'}}>
                {items_filtered.map((m,i) => (
                    <Product data = {m} key = {i}/>
                ))}
            </View>
        )
    }
}