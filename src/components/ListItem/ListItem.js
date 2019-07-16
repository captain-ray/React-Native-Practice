import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';





class ListItem extends Component {



    render() {

        return (
            <TouchableOpacity onPress={this.props.selectItem}>

                <View style={styles.ListItem}>

                    <Image style={styles.placeImage}
                        source={this.props.placeImage}
                        resizeMode="contain"
                    />
                    <Text>{this.props.placeName}</Text>
                </View>

            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    ListItem: {
        width: "100%",
        padding: 10,
        marginTop: 10,
        backgroundColor: 'powderblue',
        flexDirection:'row',
        alignItems:'center',
    },
    placeImage:{
        marginRight:8,
        width:30,
        height:30
    }
})


export default ListItem;