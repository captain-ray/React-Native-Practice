import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,TextInput } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <View style={styles.contianer}>
                <Text>Please Log in</Text>
                <Button
                    title="Switch to Login"
                />

                <TextInput placeholder="Your Email Address"/>
                <TextInput placeholder="Password"/>
                <TextInput placeholder="Confirm Password"/>

                <Button 
                title="Login"
                onPress={this.loginHandler}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    contianer:{
        borderColor:'red',
        borderWidth:1
    }

})

export default AuthScreen;