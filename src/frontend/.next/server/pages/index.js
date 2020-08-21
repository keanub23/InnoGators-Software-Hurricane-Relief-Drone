module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Commands.js":
/*!********************************!*\
  !*** ./components/Commands.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket */ "./socket.js");
var _jsxFileName = "C:\\Users\\keanu\\OneDrive\\Desktop\\InnoGators-Software-Hurricane-Relief-Drone\\src\\frontend\\components\\Commands.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function sendCommand(command) {
  return function () {
    console.log(`Sending the command ${command}`);
    _socket__WEBPACK_IMPORTED_MODULE_1__["default"].emit('command', command);
  };
}

const Commands = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: sendCommand('takeoff'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "TAKEOFF"), __jsx("button", {
    onClick: sendCommand('land'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "LAND"), __jsx("button", {
    onClick: sendCommand('up 10'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "UP 10cm"), __jsx("button", {
    onClick: sendCommand('down 10'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "DOWN 10cm"), __jsx("button", {
    onClick: sendCommand('left 10'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "LEFT 10cm"), __jsx("button", {
    onClick: sendCommand('right 10'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "RIGHT 10cm"), __jsx("button", {
    onClick: sendCommand('emergency'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "EMERGENCY"));
};

/* harmony default export */ __webpack_exports__["default"] = (Commands);

/***/ }),

/***/ "./components/State.js":
/*!*****************************!*\
  !*** ./components/State.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket */ "./socket.js");
var _jsxFileName = "C:\\Users\\keanu\\OneDrive\\Desktop\\InnoGators-Software-Hurricane-Relief-Drone\\src\\frontend\\components\\State.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function useSocket() {
  const {
    0: status,
    1: updateStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('DISCONNECTED');
  _socket__WEBPACK_IMPORTED_MODULE_1__["default"].on('status', message => {
    console.log('Socket sent Message');
    updateStatus(message);
  });
  return status;
}

const DroneState = () => {
  const status = useSocket();
  return __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, "State: ", status);
};

/* harmony default export */ __webpack_exports__["default"] = (DroneState);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/State */ "./components/State.js");
/* harmony import */ var _components_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Commands */ "./components/Commands.js");
var _jsxFileName = "C:\\Users\\keanu\\OneDrive\\Desktop\\InnoGators-Software-Hurricane-Relief-Drone\\src\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const IndexPage = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, "JavaScript Drone"), __jsx(_components_State__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx(_components_Commands__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./socket.js":
/*!*******************!*\
  !*** ./socket.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:6767');
/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tYW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJzZW5kQ29tbWFuZCIsImNvbW1hbmQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0IiwiZW1pdCIsIkNvbW1hbmRzIiwidXNlU29ja2V0Iiwic3RhdHVzIiwidXBkYXRlU3RhdHVzIiwidXNlU3RhdGUiLCJvbiIsIm1lc3NhZ2UiLCJEcm9uZVN0YXRlIiwiSW5kZXhQYWdlIiwiaW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzFCLFNBQU8sWUFBVztBQUNoQkMsV0FBTyxDQUFDQyxHQUFSLENBQWEsdUJBQXNCRixPQUFRLEVBQTNDO0FBQ0FHLG1EQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaLEVBQXVCSixPQUF2QjtBQUNELEdBSEQ7QUFJRDs7QUFHSCxNQUFNSyxRQUFRLEdBQUcsTUFBTTtBQUNuQixTQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFdBQU8sRUFBRU4sV0FBVyxDQUFDLFNBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVBLFdBQVcsQ0FBQyxNQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQVEsV0FBTyxFQUFFQSxXQUFXLENBQUMsT0FBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosRUFJSTtBQUFRLFdBQU8sRUFBRUEsV0FBVyxDQUFDLFNBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixFQUtJO0FBQVEsV0FBTyxFQUFFQSxXQUFXLENBQUMsU0FBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLEVBTUk7QUFBUSxXQUFPLEVBQUVBLFdBQVcsQ0FBQyxVQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosRUFPSTtBQUFRLFdBQU8sRUFBRUEsV0FBVyxDQUFDLFdBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixDQURBO0FBV0gsQ0FaRDs7QUFjZU0sdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOztBQUdBLFNBQVNDLFNBQVQsR0FBcUI7QUFDakIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXlCQyxzREFBUSxDQUFDLGNBQUQsQ0FBdkM7QUFFSk4saURBQU0sQ0FBQ08sRUFBUCxDQUFVLFFBQVYsRUFBb0JDLE9BQU8sSUFBSTtBQUMzQlYsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQU0sZ0JBQVksQ0FBQ0csT0FBRCxDQUFaO0FBQ0gsR0FIRDtBQUlBLFNBQU9KLE1BQVA7QUFDQzs7QUFFRCxNQUFNSyxVQUFVLEdBQUcsTUFBTTtBQUNyQixRQUFNTCxNQUFNLEdBQUdELFNBQVMsRUFBeEI7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVdDLE1BQVgsQ0FBUDtBQUNILENBSEQ7O0FBS2VLLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLE1BQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsRUFFQSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGQSxFQUdBLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhBLENBRFI7O0FBUWlCQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNYRjtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1WLE1BQU0sR0FBR1csdURBQUUsQ0FBQyx1QkFBRCxDQUFqQjtBQUVlWCxxRUFBZixFOzs7Ozs7Ozs7OztBQ0pBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi4vc29ja2V0JztcclxuXHJcbmZ1bmN0aW9uIHNlbmRDb21tYW5kKGNvbW1hbmQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coYFNlbmRpbmcgdGhlIGNvbW1hbmQgJHtjb21tYW5kfWApO1xyXG4gICAgICBzb2NrZXQuZW1pdCgnY29tbWFuZCcsIGNvbW1hbmQpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcblxyXG5jb25zdCBDb21tYW5kcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZENvbW1hbmQoJ3Rha2VvZmYnKX0+VEFLRU9GRjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZENvbW1hbmQoJ2xhbmQnKX0+TEFORDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZENvbW1hbmQoJ3VwIDEwJyl9PlVQIDEwY208L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRDb21tYW5kKCdkb3duIDEwJyl9PkRPV04gMTBjbTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZENvbW1hbmQoJ2xlZnQgMTAnKX0+TEVGVCAxMGNtPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kQ29tbWFuZCgncmlnaHQgMTAnKX0+UklHSFQgMTBjbTwvYnV0dG9uPiBcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRDb21tYW5kKCdlbWVyZ2VuY3knKX0+RU1FUkdFTkNZPC9idXR0b24+ICBcclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tYW5kczsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc29ja2V0IGZyb20gJy4uL3NvY2tldCc7XHJcbiBcclxuXHJcbmZ1bmN0aW9uIHVzZVNvY2tldCgpIHtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHVwZGF0ZVN0YXR1c10gPSB1c2VTdGF0ZSgnRElTQ09OTkVDVEVEJyk7XHJcblxyXG5zb2NrZXQub24oJ3N0YXR1cycsIG1lc3NhZ2UgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1NvY2tldCBzZW50IE1lc3NhZ2UnKTtcclxuICAgIHVwZGF0ZVN0YXR1cyhtZXNzYWdlKTtcclxufSk7XHJcbnJldHVybiBzdGF0dXM7XHJcbn1cclxuXHJcbmNvbnN0IERyb25lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB1c2VTb2NrZXQoKTtcclxuICAgIHJldHVybiA8cD5TdGF0ZToge3N0YXR1c308L3A+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9uZVN0YXRlOyIsImltcG9ydCBTdGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL1N0YXRlJztcclxuaW1wb3J0IENvbW1hbmRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbWFuZHMnO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkphdmFTY3JpcHQgRHJvbmU8L2gyPlxyXG4gICAgICAgIDxTdGF0ZSAvPlxyXG4gICAgICAgIDxDb21tYW5kcyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiLCJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDo2NzY3Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9