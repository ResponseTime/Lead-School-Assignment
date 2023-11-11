import React from "react";
import GoogleMapReact from "google-map-react";
import MapPlacer from "./MapPlacer";
export default function Maps(props) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: parseFloat(props.center.lat),
          lng: parseFloat(props.center.lng),
        }}
        defaultZoom={defaultProps.zoom}>
        <MapPlacer />
      </GoogleMapReact>
    </div>
  );
}
const defaultProps = {
  zoom: 15,
};
