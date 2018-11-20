import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { css } from 'aphrodite';
import styles from './styles';

// 普通视图
export default class Scrollbar extends Component {
  // 参数
  static propTypes = {
    className: PropTypes.any,
    width: PropTypes.string,
    height: PropTypes.string,
  };

  // 参数默认值
  static defaultProps = {
    className: undefined,
    width: '100%',
    height: '100%',
  };

  // 渲染
  render() {
    const { className, width, height } = this.props;
    let realClassName = [styles.div];
    realClassName = realClassName.concat(className instanceof Array ? className : [className]);

    return (
      <Scrollbars
        autoHide // 启用自动隐藏模式
        style={{ width, height }}
        autoHideTimeout={500} // (数字）以毫秒为单位隐藏延迟。（默认值：1000）
        autoHideDuration={100} // ( Number）以ms为单位隐藏动画的持续时间。（默认值：200）
        autoHeight={false} // (布尔值）启用自动高度模式。（默认值：false） 当true容器随内容增长时
      >
        <div
          {...this.props}
          className={css.apply(this, realClassName)}
        />
      </Scrollbars>
    );
  }
}
