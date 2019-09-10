import React, { Component } from "react";
import { Text, View } from "react-native";
import List from './../List/index';
import Filter from './../NavBar/Filter';

export default class Main extends Component{
    
    constructor(props){
        super(props)
        this.state={
            filter:'',
            user_id:'2daf302b-ecb1-4704-9d87-fdeb4c7abd9c'
        }
    }

    componentDidMount(){
        
    }

    set_filter(filtre){
        if(!filtre){
            filtre = '';
        }
        this.setState({filter: filtre});
        console.log(this.state.filter)
    }

    render(){

        return(
            <View>
            <Filter filtrer = {this.set_filter.bind(this)}/>
            <List filtre = {this.state.filter}/>
            </View>
        )
    }
}
Main.navigationOptions = {
    title: 'Home'
  }