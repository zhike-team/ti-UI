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

var _jsxFileName = 'src/image/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 图片
var Image = function (_Component) {
  (0, _inherits3.default)(Image, _Component);

  function Image() {
    (0, _classCallCheck3.default)(this, Image);
    return (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).apply(this, arguments));
  }

  (0, _createClass3.default)(Image, [{
    key: 'render',


    // 渲染

    // 参数
    value: function render() {
      var className = this.props.className;

      var realClassName = [];
      realClassName = realClassName.concat(className instanceof Array ? className : [className]);

      return _react2.default.createElement('img', (0, _extends3.default)({}, this.props, {
        alt: '',
        className: _aphrodite.css.apply(this, realClassName),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }

    // 参数默认值

  }]);
  return Image;
}(_react.Component);

Image.propTypes = {
  className: _propTypes2.default.any
};
Image.defaultProps = {
  className: undefined
};
exports.default = Image;