import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('group', 30),
        Icon.getImageSource('tasks', 30),
        Icon.getImageSource('institution', 30),
        Icon.getImageSource('user', 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'Ecclesia.Campaigns',
                    label: 'Campaigns',
                    title: 'Campaigns',
                    icon: sources[0]
                },
                {
                    screen: 'Ecclesia.SharePlaceScreen',
                    label: 'Tasks',
                    title: 'Tasks',
                    icon: sources[1]
                },
                {
                    screen: 'Ecclesia.SharePlaceScreen',
                    label: 'user',
                    title: 'user',
                    icon: sources[3]
                }
            ],
            tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
                tabBarButtonColor: '#7f7f7f', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
                tabBarSelectedButtonColor: '#2679ff', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
                tabBarBackgroundColor: '#ffffff', // optional, change the background color of the tab bar
                initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
            }
        });
    });
};

// const startTabs = () => {
//     Promise.all([
//         Icon.getImageSource('group', 30),
//         Icon.getImageSource('task', 30),
//         Icon.getImageSource('institution', 30),
//         Icon.getImageSource('user', 30)
//     ]).then(sources => {
//         Navigation.startTabBasedApp({
//             tabs: [
//                 {
//                     screen: 'Ecclesia.FindPlaceScreen',
//                     label: 'Find Place',
//                     title: 'Find Place',
//                     icon: sources[0]
//                 },
//                 {
//                     screen: 'Ecclesia.SharePlaceScreen',
//                     label: 'Share Place',
//                     title: 'Share Place',
//                     icon: sources[1]
//                 }
//             ]
//         });
//     });
// };

export default startTabs
