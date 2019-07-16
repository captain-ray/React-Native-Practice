import React,{Component} from 'react';
import {View,StyleSheet,Button,Alert} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})



class ButtonTest extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Button 
                onPress={()=>{Alert.alert('Whats up')}}
                title='Come press me'
                >

                </Button>

            </View>
        )
    }
}


export default ButtonTest;