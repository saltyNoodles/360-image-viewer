import 'aframe';

import React from 'react';

import { Entity, Scene } from 'aframe-react';
import styled from 'styled-components';

class Image360 extends React.Component {
  decodeRecursive(str, times = 0) {
    const decoded = decodeURIComponent(str);

    if (decoded.includes('%') && times < 20) {
      return this.decodeRecursive(decoded, times + 1);
    }

    return decoded;
  }

  render() {
    const { match } = this.props;

    // Recursively decode the url
    const src = decodeRecursive(match.params.src);

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
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
`;
