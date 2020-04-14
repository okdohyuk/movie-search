import React from 'react';
import styled from 'styled-components/native';
import PropsTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { apiImage } from '../../api';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
`;

const Slide = ({ id, title, backgroundImage, votes, overview }) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
  </Container>
);

Slide.PropsTypes = {
  id: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  backgroundImage: PropsTypes.string.isRequired,
  votes: PropsTypes.number.isRequired,
  overview: PropsTypes.string.isRequired,
};

export default Slide;
