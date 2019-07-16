import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import PlaceDetailScreen from './src/screens/ItemDetail/ItemDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import {Provider} from 'react-redux';

import createStore from './src/store/configureStore';


const store =createStore();

//register navigation
Navigation.registerComponent("awesome-places.AuthScreen",()=>AuthScreen,store,Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen",()=>FindPlaceScreen,store,Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen",()=>SharePlaceScreen,store,Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen",()=>PlaceDetailScreen,store,Provider);
Navigation.registerComponent("awesome-places.SideDrawer",()=>SideDrawer)

//Start an app
Navigation.startSingleScreenApp({
  screen:{
    screen:"awesome-places.AuthScreen",
    title:"Login"
  }
});



