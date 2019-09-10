import React, { Component } from "react";
import { Text, View,ScrollView } from "react-native";
import items from './items';
import Product from './Product';

export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            items: []
        }
    }

    componentDidMount(){
        
    }

    render(){
        let items_filtered = [];
        if(this.props.filtre == null){
            items_filtered = items;
        }else{
            items_filtered = items.filter(item => item.title.toUpperCase().includes(this.props.filtre.toUpperCase()))
        }
        return(
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent: 'space-around',flexWrap: 'wrap'}}>
                {items_filtered.map((m,i) => (
                    <Product data = {m} key = {i}/>
                ))}
            </View>
            </ScrollView>
        )
    }
}