'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

var _url = require('../common/url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = function (_Core) {
  _inherits(Url, _Core);

  function Url(config) {
    _classCallCheck(this, Url);

    return _possibleConstructorReturn(this, (Url.__proto__ || Object.getPrototypeOf(Url)).call(this, config));
  }

  _createClass(Url, [{
    key: 'makeUrl',
    value: function makeUrl() {
      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      if (this.config.trailingSlash) {
        params.push('');
      }

      var url = this.sanitizeUrl([this.routes[this.currentRoute]].concat(params).filter(Boolean).join('/'));

      if (this.config.extension) {
        url += '.' + this.config.extension;
      }

      this.setCurrentRoute(this.config.defaultRoute);

      return url;
    }
  }, {
    key: 'sanitizeUrl',
    value: function sanitizeUrl(url) {
      return (0, _url.sanitizeUrl)(url, this.config.trailingSlash);
    }
  }, {
    key: 'resetURLParams',
    value: function resetURLParams() {
      this.urlParams = false;
    }
  }, {
    key: 'setURLParams',
    value: function setURLParams() {
      var urlParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var prepend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.urlParams = this.urlParams || [];

      if (!(0, _isArray2.default)(urlParams)) {
        urlParams = [urlParams];
      }

      if (overwrite) {
        this.urlParams = urlParams;

        return this;
      }

      if (prepend) {
        this.urlParams = urlParams.concat(this.urlParams);
      } else {
        this.urlParams = this.urlParams.concat(urlParams);
      }

      return this;
    }
  }, {
    key: 'url',
    value: function url() {
      this.setURLParams.apply(this, arguments);

      return this;
    }
  }, {
    key: 'prepend',
    value: function prepend(params) {
      this.setURLParams(params, true);

      return this;
    }
  }, {
    key: 'append',
    value: function append(params) {
      this.setURLParams(params);

      return this;
    }
  }]);

  return Url;
}(_core2.default);

exports.default = Url;