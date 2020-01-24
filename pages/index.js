import Head from "next/head";
import ReactMapGL from "react-map-gl";
import FicheSite from "../components/fiche-site";
import React from "react";

function Map() {
  let [viewport, setViewport] = React.useState({
    width: 400,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
    />
  );
}

function ListeMarchés() {
  return (
    <div class="cards_and_map_container">
      <div class="cards-row">
        <FicheSite />
        <FicheSite />
      </div>
      <div class="mapboxgl-map">
        <Map />
      </div>
    </div>
  );
}

export default function() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,600|Montserrat:400,600"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <ListeMarchés />
    </>
  );
}
