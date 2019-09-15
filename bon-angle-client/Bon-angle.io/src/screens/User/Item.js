import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation';
import { Ionicons,AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';
import items from './../List/items'

class Item extends Component{

    constructor(props){
        super(props)
        this.state={
            items :[]
        }
    }

    edit(){
        // const { navigate } = this.props.navigation; //decommenter pour naviguer vers edit
        // navigate('EditItem', {data : this.props.data});
        // console.log(this.props.data);
        
    }

    delete(id){
        for( var i = 0; i < items.length; i++){ 
            if ( items[i].id === id) {
                items.splice(i, 1);
            }
         }

        this.props.update(items);
        alert('Item successfully deleted');
    }
    
    render(){
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        return( 
            <View style={{marginTop:10,flex: 1,flexDirection:'row'}}>
                <Image style={{ width: screenWidth/3, height: screenHeight/6 }} source = {this.props.data.photo}></Image>       
                <View style={{flex:1,marginTop:20,marginLeft:5}}>
                <Text style={{marginTop:5}}>{this.props.data.title}</Text>
                <Text style={{marginTop:5}}>$ {this.props.data.price}</Text>
                </View>
                <Entypo name="edit" size ={24} style={{marginRight:40,marginTop:20}} onPress={()=>this.edit()}/>
                <MaterialIcons name="delete" size ={24} style={{marginRight:30,marginTop:20}} onPress={()=>this.delete(this.props.data.id)}/>
            </View>
        )
    }
}

export default withNavigation(Item);