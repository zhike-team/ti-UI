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

var _jsxFileName = 'src/button/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          className = _props.className,
          leftIcon = _props.leftIcon,
          textClassName = _props.textClassName,
          rightIcon = _props.rightIcon,
          theme = _props.theme,
          onClick = _props.onClick,
          isAvailable = _props.isAvailable,
          loading = _props.loading;

      var themeStyle = void 0;
      switch (theme) {
        case 'darken':
          themeStyle = _styles2.default.containerDarken;
          break;
        case 'hollow':
          themeStyle = _styles2.default.containerHollow;
          break;
        default:
          break;
      }
      return _react2.default.createElement(
        _index.View,
        {
          className: [_styles2.default.container, themeStyle, !isAvailable ? _styles2.default.containerUnavailable : undefined, className],
          onClick: isAvailable && !loading ? onClick : undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        },
        leftIcon && _react2.default.createElement(_index.Icon, { source: leftIcon, width: '12', height: '12', marginRight: '3', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }),
        _react2.default.createElement(
          _index.View,
          {
            className: [_styles2.default.text, textClassName],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          text
        ),
        rightIcon && _react2.default.createElement(_index.Icon, { source: rightIcon, width: '12', height: '12', marginLeft: '3', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }),
        loading && isAvailable && _react2.default.createElement(
          _index.View,
          { className: _styles2.default.mask, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          _react2.default.createElement(_index.View, { className: _styles2.default.buttonLoading, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          })
        )
      );
    }
  }]);
  return Button;
}(_react.Component);

Button.propTypes = {
  text: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.any,
  textClassName: _propTypes2.default.any,
  leftIcon: _propTypes2.default.any,
  rightIcon: _propTypes2.default.any,
  theme: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  isAvailable: _propTypes2.default.bool,
  loading: _propTypes2.default.bool
};
Button.defaultProps = {
  className: undefined,
  textClassName: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  theme: '',
  onClick: undefined,
  isAvailable: true,
  loading: false
};
exports.default = Button;