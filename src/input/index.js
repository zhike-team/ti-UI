import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './styles';

// 图片
export default class Input extends Component {
  // 参数
  static propTypes = {
    className: PropTypes.object,
    placeholder: PropTypes.string,
  };

  // 参数默认值
  static defaultProps = {
    className: undefined,
    placeholder: '',
  };

  // 渲染
  render() {
    const { className, placeholder } = this.props;
    let realClassName = [styles.input];
    realClassName = realClassName.concat(className instanceof Array ? className : [className]);
    return (
      <input
        {...this.props}
        className={css.apply(this, realClassName)}
        placeholder={placeholder}
      />
    );
  }
}
