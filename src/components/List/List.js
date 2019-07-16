import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

class List extends Component {



    render() {



        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.places}
                renderItem={({item}) =>
                    <ListItem
                        placeName={item.placeName}
                        placeImage={item.placeImage}
                        selectItem={()=>this.props.onPlaceSelected(item.key)}
                    />}
            >
            </FlatList>

        )
    }

}


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default List;