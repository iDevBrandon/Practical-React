import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDUfYYqsLqCYCLvUEFdAcPFDMUjJ6ptA2o" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 43.6532,
    lng: -79.347015,
  },
  zoom: 6,
};

export default Map;
