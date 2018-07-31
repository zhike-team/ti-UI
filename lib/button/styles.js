'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aphrodite = require('aphrodite');

exports.default = _aphrodite.StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 86,
    height: 28,
    backgroundColor: '#3399FF',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    cursor: 'pointer',
    transition: '0.15s',
    userSelect: 'none',
    ':hover': {
      backgroundColor: '#5BADFF'
    }
  },

  containerDarken: {
    backgroundColor: '#36424D',
    borderWidth: 1,
    borderColor: '#EAEFF2',
    borderStyle: 'solid',
    ':hover': {
      backgroundColor: '#5E6770'
    }
  },

  containerHollow: {
    backgroundColor: '#fff',
    color: '#333',
    borderWidth: 1,
    borderColor: '#878F98',
    borderStyle: 'solid',
    ':hover': {
      backgroundColor: '#F4F6F7'
    }
  },

  containerUnavailable: {
    cursor: 'default',
    opacity: '0.5',
    pointerEvents: 'none'
  },

  text: {
    fontSize: 12
  }
});