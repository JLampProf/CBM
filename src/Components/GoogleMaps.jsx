import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

const center = { lat: -25.8782, lng: 28.0724 };
const mapId = "myMapId";

const GoogleMaps = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    getKey();
    // fetchLocationData();
  }, []);

  const getKey = async () => {
    try {
      const response = await fetch("/.netlify/functions/getKey");

      if (!response.ok) {
        throw new Error("Error fetching Key");
      }

      const data = await response.json();

      setKey(data.key);
    } catch (error) {
      console.log("FetchKeyError");
    }
  };

  if (!key) return <div className="map">Loading...</div>;

  return (
    <APIProvider apiKey={key}>
      <Map
        mapId={mapId}
        className="map"
        defaultCenter={center}
        defaultZoom={16}
        disableDefaultUI={true}
      />
      <AdvancedMarker position={center} />
    </APIProvider>
  );
};

export default GoogleMaps;
