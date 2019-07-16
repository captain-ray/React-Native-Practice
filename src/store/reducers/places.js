
import * as actionTypes from '../actions/actionTypes';



const initialState = {
    places: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_PLACE:
            return {
                ...state,
                'places': state.places.concat({
                    key: Math.random().toString(),
                    placeName: action.placeName,
                    placeImage: {
                        uri: "https://content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches-1200x630.jpg"
                    }
                })
            }
            

        case actionTypes.DELETE_PLACE:
            return {
                ...state,
                'places': state.places.filter((place) => {
                    return place.key !==action.key
                }),
        
            }
            
    
        default:
            return state;
    }
}

export default reducer;