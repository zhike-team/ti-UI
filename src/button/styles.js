import { StyleSheet } from 'aphrodite';

const circle = {
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
};

export default StyleSheet.create({
  container: {
    position: 'relative',
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
      backgroundColor: '#5BADFF',
    },
  },

  containerDarken: {
    backgroundColor: '#36424D',
    borderWidth: 1,
    borderColor: '#EAEFF2',
    borderStyle: 'solid',
    ':hover': {
      backgroundColor: '#5E6770',
    },
  },

  containerHollow: {
    backgroundColor: '#fff',
    color: '#333',
    borderWidth: 1,
    borderColor: '#878F98',
    borderStyle: 'solid',
    ':hover': {
      backgroundColor: '#F4F6F7',
    },
  },

  containerUnavailable: {
    cursor: 'default',
    opacity: '0.5',
    pointerEvents: 'none',
  },

  mask: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: '2px',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonLoading: {
    width: 14,
    height: 14,
    border: '2px solid transparent',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animationName: [circle],
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },

  text: {
    fontSize: 12,
  },
});
