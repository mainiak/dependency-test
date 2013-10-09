;(function(global) {

	var myFuncB = function() {
		console.log('my clever-exported function');
	};

	/*
	 * browser, node.js and AMD support
	 */

	//console.log(module); // XXX

	if (typeof exports === 'object') {
		module.exports = myFuncB;
	} else if (typeof define === 'function' && define.amd) {
		define(function() { return myFuncB; });
	} else {
		global.myFuncB = myFuncB;
	}

})(function() {
	return this || (typeof window !== 'undefined' ? window : global);
}());
