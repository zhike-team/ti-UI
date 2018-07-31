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

var _jsxFileName = 'src/view/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 普通视图
var View = function (_Component) {
  (0, _inherits3.default)(View, _Component);

  function View() {
    (0, _classCallCheck3.default)(this, View);
    return (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).apply(this, arguments));
  }

  (0, _createClass3.default)(View, [{
    key: 'render',


    // 渲染

    // 参数
    value: function render() {
      var className = this.props.className;

      var realClassName = [_styles2.default.div];
      realClassName = realClassName.concat(className instanceof Array ? className : [className]);

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, {
        className: _aphrodite.css.apply(this, realClassName),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }

    // 参数默认值

  }]);
  return View;
}(_react.Component);

View.propTypes = {
  className: _propTypes2.default.any
};
View.defaultProps = {
  className: undefined
};
exports.default = View;