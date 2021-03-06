'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = 'src/scorllbar/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCustomScrollbars = require('react-custom-scrollbars');

var _aphrodite = require('aphrodite');

var _lodash = require('lodash');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 普通视图
var Scrollbar = function (_Component) {
  (0, _inherits3.default)(Scrollbar, _Component);

  function Scrollbar() {
    (0, _classCallCheck3.default)(this, Scrollbar);
    return (0, _possibleConstructorReturn3.default)(this, (Scrollbar.__proto__ || (0, _getPrototypeOf2.default)(Scrollbar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Scrollbar, [{
    key: 'render',


    // 渲染

    // 参数
    value: function render() {
      var _props = this.props,
          className = _props.className,
          width = _props.width,
          height = _props.height,
          onScroll = _props.onScroll,
          onScrollFrame = _props.onScrollFrame,
          onScrollStart = _props.onScrollStart,
          onScrollStop = _props.onScrollStop,
          onUpdate = _props.onUpdate;

      var realClassName = [_styles2.default.div];
      realClassName = realClassName.concat(className instanceof Array ? className : [className]);
      return _react2.default.createElement(
        _reactCustomScrollbars.Scrollbars,
        {
          autoHide: true // 启用自动隐藏模式
          , style: { width: width, height: height },
          autoHideTimeout: 500 // (数字）以毫秒为单位隐藏延迟。（默认值：1000）
          , autoHideDuration: 100 // ( Number）以ms为单位隐藏动画的持续时间。（默认值：200）
          , autoHeight: false // (布尔值）启用自动高度模式。（默认值：false） 当true容器随内容增长时
          // 将与天然滚动事件调用
          , onScroll: onScroll
          // 动画帧内运行。通行证关于当前的滚动位置的一些方便的值
          , onScrollFrame: onScrollFrame
          // 滚动开始时调用
          , onScrollStart: onScrollStart
          // 当滚动停止时调用
          , onScrollStop: onScrollStop
          // 在组件更新时调用。在动画帧内运行
          , onUpdate: onUpdate,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        _react2.default.createElement('div', (0, _extends3.default)({}, (0, _lodash.omit)(this.props, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate']), {
          className: _aphrodite.css.apply(this, realClassName),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }))
      );
    }

    // 参数默认值

  }]);
  return Scrollbar;
}(_react.Component);

Scrollbar.propTypes = {
  className: _propTypes2.default.any,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  onScroll: _propTypes2.default.func,
  onScrollFrame: _propTypes2.default.func,
  onScrollStart: _propTypes2.default.func,
  onScrollStop: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};
Scrollbar.defaultProps = {
  className: undefined,
  width: '100%',
  height: '100%',
  onScroll: function onScroll() {},
  onScrollFrame: function onScrollFrame() {},
  onScrollStart: function onScrollStart() {},
  onScrollStop: function onScrollStop() {},
  onUpdate: function onUpdate() {}
};
exports.default = Scrollbar;