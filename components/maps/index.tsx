import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./marker";
import mapStyle from './treinta-mapstyle.json'
import placesData from "./places.json"

export interface Mapprops {

}

export const Map = (props: Mapprops) => {
  const [places, setplaces] = useState(placesData.results)

  const mapOptions = {
    center: {
      lat: 4.6428224,
      lng: -74.1073778
    },
    zoom: 13
  };

  const bindResizeListener = (map: any, maps: any, bounds: any) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  }

  const handleApiLoaded = (map: any, maps: any, places: any) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
    const styledMapType = new maps.StyledMapType(mapStyle)

    map.mapTypes.set("treinta", styledMapType);
    map.setMapTypeId("treinta");
  }


  const getMapBounds = (map: any, maps: any, places: any) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place: { geometry: { location: { lat: any; lng: any; }; }; }) => {
      bounds.extend(new maps.LatLng(
        place.geometry.location.lat,
        place.geometry.location.lng,
      ));
    });
    return bounds;
  };

  const onChildClickCallback = (key: number) => {
    let newPlaces = [...places]; // copying the old datas array
    const index = newPlaces.findIndex((e: any) => e.reference === key);
    newPlaces[index].show = !newPlaces[index].show || false; // eslint-disable-line no-param-reassign
    // console.log(places[index])
    setplaces(newPlaces)
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_API_KEY,
          language: 'es',
          region: 'co',
        }}
        options={{
          mapTypeId: 'treinta'
        }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={onChildClickCallback}
        onGoogleApiLoaded={({ map, maps }: any) => handleApiLoaded(map, maps, places)}
      >
        {places.map((place) => (
          <Marker
            key={place.reference}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
            place={place}
            show={place.show}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}