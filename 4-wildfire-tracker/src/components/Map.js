import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "YOUR_KEY",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 43.65107,
    lng: -79.347015,
  },
  zoom: 6,
};

export default Map;
