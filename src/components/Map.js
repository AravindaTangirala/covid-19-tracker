import React from "react";
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";
import "./Map.css";
import { iconPerson, showDataOnMap } from "../util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Loop through countries and draw cirles on the screen */}
        {<Marker position={center} icon={iconPerson} />}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;