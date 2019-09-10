import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filter_display: false
        }
    }

    filter_display() {
        if (this.state.filter_display == false) {
            this.setState({ filter_display: true })
        } else {
            this.setState({ filter_display: false })
        }
    }

    _applyfilter(){
        this.setState({ filter_display: false });
        this.props.filtrer(this.state.text ? this.state.text : '');
    }

    render() {

        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', height: 50, backgroundColor: '#d1cdcd' }}>
                    <TouchableOpacity>
                        <View>
                            <Text style={{ paddingTop: 15 }}>Trier</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.filter_display()}>
                        <View>
                            <Text style={{ paddingTop: 15 }}>Filtrer</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {this.state.filter_display &&
                    <View><TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ text })}
                        placeholder='What tags are you looking for ?'
                    />
                        <Button title='Filtrer'
                            onPress={() => this._applyfilter()}
                        /></View>
                }
            </View>
        )
    }
}