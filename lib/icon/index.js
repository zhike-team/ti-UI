'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = 'src/icon/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          marginLeft = _props.marginLeft,
          marginRight = _props.marginRight,
          source = _props.source;


      return _react2.default.createElement(_index.Image, {
        style: {
          width: parseInt(width, 10),
          height: parseInt(height, 10),
          marginLeft: parseInt(marginLeft, 10),
          marginRight: parseInt(marginRight, 10)
        },
        src: source,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      });
    }
  }]);
  return Icon;
}(_react.Component);

Icon.propTypes = {
  width: _propTypes2.default.any,
  height: _propTypes2.default.any,
  marginLeft: _propTypes2.default.any,
  marginRight: _propTypes2.default.any,
  source: _propTypes2.default.any
};
Icon.defaultProps = {
  width: 14,
  height: 14,
  marginLeft: 0,
  marginRight: 0,
  source: ''
};
exports.default = Icon;