import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  // const [locationInfo, setLocationInfo] = useState(null);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCdeDt_Z1ANSM2Y6gH3C69oI8ns98AcwvM" }}
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
  zoom: 5,
};

export default Map;
