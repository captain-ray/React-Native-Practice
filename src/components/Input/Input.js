import React, { Component } from 'react';
import { StyleSheet,View,TextInput,Button } from 'react-native';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
          text: '',
        }
      }


    submitPlaceName=()=>{
        if(this.state.text.trim()===""){
            return;
        }

        this.props.addPlaceName(this.state.text);
    }

    render() {
        return (
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.placeInput}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text: text })}
                    placeholder='input something here'
                ></TextInput>

                <Button
                    title='ADD'
                    style={styles.placeButton}
                    onPress={this.submitPlaceName}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
})

export default Input;