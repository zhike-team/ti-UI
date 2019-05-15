import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Icon } from '../index';
import styles from './styles';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.any,
    textClassName: PropTypes.any,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any,
    theme: PropTypes.string,
    onClick: PropTypes.func,
    isAvailable: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    className: undefined,
    textClassName: undefined,
    leftIcon: undefined,
    rightIcon: undefined,
    theme: '',
    onClick: undefined,
    isAvailable: true,
    loading: false,
  };

  render() {
    const {
      text, className, leftIcon, textClassName,
      rightIcon, theme, onClick, isAvailable, loading,
    } = this.props;
    let themeStyle;
    switch (theme) {
      case 'darken':
        themeStyle = styles.containerDarken;
        break;
      case 'hollow':
        themeStyle = styles.containerHollow;
        break;
      default:
        break;
    }
    return (
      <View
        className={[
          styles.container,
          themeStyle,
          !isAvailable ? styles.containerUnavailable : undefined,
          className,
        ]}
        onClick={isAvailable && !loading ? onClick : undefined}
      >
        {leftIcon && <Icon source={leftIcon} width="12" height="12" marginRight="3" />}
        <View
          className={[
            styles.text,
            textClassName,
          ]}
        >
          {text}
        </View>
        {rightIcon && <Icon source={rightIcon} width="12" height="12" marginLeft="3" />}
        {
          loading && isAvailable && <View className={styles.mask}><View className={styles.buttonLoading} /></View>
        }
      </View>
    );
  }
}
