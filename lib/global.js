var g = {};

if (typeof global === 'undefined' && typeof window === 'object') {
	window.global = window;
} else if (typeof global === 'object') {
	g = global;
}

export default g;