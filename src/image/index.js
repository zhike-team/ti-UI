import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

// 图片
export default class Image extends Component {
  // 参数
  static propTypes = {
    className: PropTypes.any,
  };

  // 参数默认值
  static defaultProps = {
    className: undefined,
  };

  // 渲染
  render() {
    const { className } = this.props;
    let realClassName = [];
    realClassName = realClassName.concat(className instanceof Array ? className : [className]);

    return (
      <img
        {...this.props}
        alt=""
        className={css.apply(this, realClassName)}
      />
    );
  }
}
