import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import { addPlace } from '../../store/actions/index'
import { connect } from 'react-redux'

class Campaigns extends Component {
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName)
    };

    render () {
        return  (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <Text>'Hiiii'</Text>
            </View>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return  {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};
export default connect(null, mapDispatchToProps)(Campaigns)