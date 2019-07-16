import React, { Component } from 'react';
import { View } from 'react-native';
import PlaceInput from '../../components/Input/Input';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index'

class SharePlace extends Component {

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

    render() {
        const { onAddPlaceName } = this.props;

        return (
            <View>
                <PlaceInput
                    addPlaceName={onAddPlaceName}

                />

            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlaceName: placeName => dispatch(addPlace(placeName)),

    }
}

export default connect(null, mapDispatchToProps)(SharePlace);