import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        flex:1,
    },  
    firstBlock:{
        flex:1,
        backgroundColor:'powderblue'
    },
    secondBlock:{
        flex:5,
        backgroundColor:'skyblue'
    },
    thirdBlock:{
        flex:10,
        backgroundColor:'steelblue'
    },

})


class FlexBox extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstBlock}></View>
                <View style={styles.secondBlock}></View>
                <View style={styles.thirdBlock}></View>
            </View>
        )
    }
}

export default FlexBox;