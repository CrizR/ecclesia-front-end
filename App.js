
import { Navigation } from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/components/PlaceDetail/PlaceDetail'
import Campaigns from './src/screens/Campaigns/Campaigns'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent(
    "Ecclesia.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent(
    'Ecclesia.SharePlaceScreen', () => SharePlaceScreen, store, Provider);
Navigation.registerComponent(
    'Ecclesia.FindPlaceScreen', () => FindPlaceScreen, store, Provider);
Navigation.registerComponent(
    'Ecclesia.PlaceDetailScreen', () => PlaceDetailScreen, store, Provider
);
Navigation.registerComponent(
    'Ecclesia.Campaigns', () => Campaigns, store, Provider
);

// Start the App
Navigation.startSingleScreenApp({
    screen: {
        screen: "Ecclesia.AuthScreen",
        title: "Login"
    }
});
