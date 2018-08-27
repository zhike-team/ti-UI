import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './styles';

// 普通视图
export default class View extends Component {
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
    let realClassName = [styles.textarea];
    realClassName = realClassName.concat(className instanceof Array ? className : [className]);

    return (
      <textarea
        {...this.props}
        className={css.apply(this, realClassName)}
      />
    );
  }
}
