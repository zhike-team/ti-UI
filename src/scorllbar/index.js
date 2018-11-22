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
    onScroll: PropTypes.func,
    onScrollFrame: PropTypes.func,
    onScrollStart: PropTypes.func,
    onScrollStop: PropTypes.func,
    onUpdate: PropTypes.func,
  };

  // 参数默认值
  static defaultProps = {
    className: undefined,
    width: '100%',
    height: '100%',
    onScroll: () => {},
    onScrollFrame: () => {},
    onScrollStart: () => {},
    onScrollStop: () => {},
    onUpdate: () => {},
  };

  // 渲染
  render() {
    const { className, width, height,
      onScroll, onScrollFrame, onScrollStart, onScrollStop, onUpdate } = this.props;
    let realClassName = [styles.div];
    realClassName = realClassName.concat(className instanceof Array ? className : [className]);
    return (
      <Scrollbars
        autoHide // 启用自动隐藏模式
        style={{ width, height }}
        autoHideTimeout={500} // (数字）以毫秒为单位隐藏延迟。（默认值：1000）
        autoHideDuration={100} // ( Number）以ms为单位隐藏动画的持续时间。（默认值：200）
        autoHeight={false} // (布尔值）启用自动高度模式。（默认值：false） 当true容器随内容增长时
        // 将与天然滚动事件调用
        onScroll={onScroll}
        // 动画帧内运行。通行证关于当前的滚动位置的一些方便的值
        onScrollFrame={onScrollFrame}
        // 滚动开始时调用
        onScrollStart={onScrollStart}
        // 当滚动停止时调用
        onScrollStop={onScrollStop}
        // 在组件更新时调用。在动画帧内运行
        onUpdate={onUpdate}
      >
        <div
          {...this.props}
          className={css.apply(this, realClassName)}
        />
      </Scrollbars>
    );
  }
}
