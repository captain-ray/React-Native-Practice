import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([ //Promise.all return a promise that resolves when all of the promises in the iterable argument have resolved, 
        Icon.getImageSource("md-map", 30), //Icon.getImageSource will return a Promise
        Icon.getImageSource("md-share-alt", 30),
        Icon.getImageSource("md-menu", 30)
    ]).then((sources) => {

        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title:"Menu",
                                id: "MenuToggleButton"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title:"Menu",
                                id: "MenuToggleButton"
                            }
                        ]
                    }
                },
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            }
        })

    })

}

export default startTabs;
