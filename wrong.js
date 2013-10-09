;(function (global) {

	// needed only in browser (node is caching files)
	if ("XXX" in global) {
		console.log('return!');
		return;
	}

	var funcXXX = function() {
		console.log('XXX');
	}

	if ('module' in global) {
		module.exports = funcXXX;
	}

	global.XXX = funcXXX; // this overwrites exports

	// this in node is module scope
	//console.log(XXX);
	//console.log(this); // prints global !!!
	//console.log(this.XXX); // undefined
	//console.log(global);

})(this); // this means and contains module, not global context

/*
// this prints global context
;(function() {
	console.log(this);
})();
*/
