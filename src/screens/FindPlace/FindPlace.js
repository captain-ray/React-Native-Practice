import React, { Component } from 'react';
import { View } from 'react-native';
import PlaceList from '../../components/List/List';
import { connect } from 'react-redux';

class FindPlace extends Component {

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent=event=>{
        if(event.type==="NavBarButtonPress"){
            if(event.id==="MenuToggleButton"){
                this.props.navigator.toggleDrawer({
                    side:"left"
                });
            }
        }
    }


    onPlaceSelectedHandler=key=>{
        const selPlace=this.props.places.find(place=>{
            return place.key===key;
        });

        this.props.navigator.push({
            screen:"awesome-places.PlaceDetailScreen",
            title:selPlace.placeName,
            passProps:{
                selectedPlace:selPlace
            }
        })
    }


    render() {
        const { places } = this.props;

        return (
            <View>
                <PlaceList
                    places={places}
                    onPlaceSelected={this.onPlaceSelectedHandler}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.placeReducer.places
    }
}



export default connect(mapStateToProps)(FindPlace);