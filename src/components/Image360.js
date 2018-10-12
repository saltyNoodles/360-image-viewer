import 'aframe';

import React from 'react';

import { Entity, Scene } from 'aframe-react';
import styled from 'styled-components';

export default ({ match }) => {
  const src = decodeURIComponent(match.params.src);
  return (
    <Container>
      <Scene>
        <Entity
          primitive="a-camera"
          id="camera"
          look-controls={{ reverseMouseDrag: true }}
        >
          <Entity primitive="a-cursor" />
        </Entity>
        <Entity
          primitive="a-sky"
          src={`https://cors-anywhere.herokuapp.com/${src}`}
        />
      </Scene>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
`;
