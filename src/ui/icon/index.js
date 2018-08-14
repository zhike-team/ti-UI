import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from '../index';

export default class Icon extends Component {
  static propTypes = {
    width: PropTypes.any,
    height: PropTypes.any,
    marginLeft: PropTypes.any,
    marginRight: PropTypes.any,
    source: PropTypes.any,
  };

  static defaultProps = {
    width: 14,
    height: 14,
    marginLeft: 0,
    marginRight: 0,
    source: '',
  };

  render() {
    const {
      width, height, marginLeft,
      marginRight, source,
    } = this.props;

    return (
      <Image
        style={{
          width: parseInt(width, 10),
          height: parseInt(height, 10),
          marginLeft: parseInt(marginLeft, 10),
          marginRight: parseInt(marginRight, 10),
        }}
        src={source}
      />
    );
  }
}
