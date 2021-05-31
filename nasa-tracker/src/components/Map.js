import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
        />
      );
    }
    return null;
  });
  console.log(markers);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDUfYYqsLqCYCLvUEFdAcPFDMUjJ6ptA2o" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 43.6532,
    lng: -79.347015,
  },
  zoom: 5,
};

export default Map;
