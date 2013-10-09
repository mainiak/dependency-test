;(function() {

	var myFuncC = function() {
		console.log('my clever-exported function v.2');
	};

	/*
	 * browser, node.js and AMD support
	 */

	//console.log(exports); // XXX

	if (typeof exports === 'object') {
		module.exports = myFuncC;
	} else if (typeof define === 'function' && define.amd) {
		define(function() { return myFuncC; });
	} else {
		this.myFuncC = myFuncC;
	}

}).call(function() {
	return this || (typeof window !== 'undefined' ? window : global);
}());
