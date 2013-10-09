;(function(global) {

	var myFuncD = function() {
		console.log('my clever-exported function v.3');
	};

	/*
	 * browser, node.js and AMD support
	 */

	//console.log(module); // XXX

	if (typeof define === 'function' && define.amd) {
		define(function() { return myFuncD; });
	} else {
		// export in browser and in node.js to global
		global.myFuncD = myFuncD;
	}

})(function() {
	return this || (typeof window !== 'undefined' ? window : global);
}());
