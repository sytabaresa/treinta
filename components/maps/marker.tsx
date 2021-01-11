import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  top: 50%;
  left: 50%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props: { onClick: any; }) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
` as any;

const InfoWindow = (props: { place: any; }) => {
  const { place } = props;

  return (
    <div style={{
      bottom: 110,
      left: '-45px',
    }}
      className="bg-principal border-black border-2 w-24 relative shadow-lg z-10 p-4"
    >
      <div className="text-sm text-white font-bold leading-tight mb-2">
        {place.name}
      </div>
      <div className="font-bold text-black">
        {place.types[0]}
      </div>

    </div>
  );
};

export interface Markerprops extends HTMLAttributes<HTMLDivElement> {
  text: string
  show: boolean
  place: any
  lat: number,
  lng: number,
}

const Marker = (props: Markerprops) => {

  const { text, show, place, ...other } = props

  return (
    <Wrapper
      className="absolute w-4 h-4 bg-principal rounded-full border-2 border-black"
      alt={text}
      {...other}
    >
      {show && <InfoWindow place={place} />}


    </Wrapper>
  )
}

export default Marker;
