import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class DoctorInnerMap extends Component {
    onMarkerClick(props, marker, e) {
        console.log(marker);
        console.log(props);
    }

    render() {
        const markerItem = this.props.item.map(function (item) {
            return <Marker
                key={item.key}
                id={item.id}
                name={item.name}
                title={item.name}
                position={{lat: item.geo_point.lat, lng: item.geo_point.lng}}
                onClick={this.onMarkerClick}
            />
        }.bind(this));
        return (
            <Map
                google={this.props.google}
                zoom={14}
                clickableIcons={false}
                initialCenter={{
                    lat: 51.505002,
                    lng: -0.126275
                }}
            >

                {markerItem}

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>1</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}
//export class MapContainer extends Component {}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB8YZdLwCpE2aS6ks55Opn9oeTz_UNmFWI',
    version: '3.28'
})(DoctorInnerMap)

// const WrappedContainer = GoogleApiWrapper({
//     apiKey: 'AIzaSyB8YZdLwCpE2aS6ks55Opn9oeTz_UNmFWI',
// })(MapContainer);
// export default WrappedContainer
