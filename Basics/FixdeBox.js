import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';


const styles=StyleSheet.create({
    firstBlock:{
        width:50,
        height:50,
        backgroundColor:'powderblue',
    },
    secondBlock:{
        // width:50,
        height:100,
        backgroundColor:'skyblue',
    },
    thirdBlock:{
        // width:50,
        height:50,
        backgroundColor:'steelblue',
    },
})

class FixedBox extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'column-reverse',justifyContent:'space-around'}}>
                <View style={styles.firstBlock}></View>
                <View style={styles.secondBlock}></View>
                <View style={styles.thirdBlock}></View>
            </View>
        )
    }

}

export default FixedBox;