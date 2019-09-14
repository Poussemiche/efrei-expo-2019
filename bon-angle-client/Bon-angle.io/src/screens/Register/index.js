import React, { Component } from "react";
import { Text, View, Form, Field } from "react-native";
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default class Register extends Component {
  constructor(props){
    super(props);
}


render(){
    return(
        <View >
           <Text>
             plop
           </Text>
        </View>
    )
}
}

Register.navigationOptions = {
    title: 'Register'
  }
