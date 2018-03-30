import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import questionIcon from '../icons/question.svg';

const propTypes = {
  glyph: PropTypes.string,
  size: PropTypes.sring,
  inverted: PropTypes.bool,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
  altText: PropTypes.string
};

const defaultProps = {
  glyph: questionIcon,
  size: '2em',
  inverted: false,
  fillColor: 'currentColor',
  strokeColor: 'currentColor',
  altText: ''
};

const SvgIcon = styled.svg`
  color: ${props => props.fillColor};
  stroke: ${props => props.strokeColor};
  fill: ${props => (props.inverted ? 'transparent' : props.fillColor)};
  width: inherit;
  height: inherit;
  transition: all 0.25s ease-in-out;
`;
const IconWrapper = styled.div`
  display: inline-block;
  color: #1abc9c;
  width: ${props => props.size};
  height: ${props => props.size};
`;

const Icon = ({ glyph, inverted, altText, size, fillColor, strokeColor }) => (
  <IconWrapper size={size}>
    <SvgIcon
      inverted={inverted}
      fillColor={fillColor}
      strokeColor={strokeColor}
    >
      {altText ? <title>{altText}</title> : null}
      <use xlinkHref={glyph} />
    </SvgIcon>
  </IconWrapper>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
