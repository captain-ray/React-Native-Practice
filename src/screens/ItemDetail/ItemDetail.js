import React, { Component } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index'

class ItemDetail extends Component {

    placeDeletedHandler=()=>{
        this.props.onDeletePlace(this.props.selectedPlace.key);

        this.props.navigator.pop()
    }

    render() {


        const { selectedPlace } = this.props;
        return (


            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image}
                        source={selectedPlace.placeImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.text}>{selectedPlace.placeName}</Text>
                </View>

                <View style={styles.deleteButton}>

                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <Icon size={30} name="ios-trash" color="red" />
                    </TouchableOpacity>

                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,

    },
    image: {
        width: "100%",
        height: 200
    },
    text: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }

})


const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: key => dispatch(deletePlace(key))
    }
}


export default connect(null,mapDispatchToProps)(ItemDetail);