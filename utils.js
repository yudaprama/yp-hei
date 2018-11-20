/**
 * Performs all possible subsets of set (power set).
 * @param {Array|String} arr - The set of elements.
 * @returns {Generator} yields each subset as an array
 */
export function* powerSet(arr) {
	let len = arr.length;
	let data = [];
	yield* powerUtil(0, 0);
	function* powerUtil(start, index) {
		data.length = index;
		yield data;
		if (index === len) return;
		for (let i = start; i < len; i++) {
			data[index] = arr[i];
			yield* powerUtil(i + 1, index + 1)
		}
	}
}

/**
 * Generates array of prime number based on max number
 * @param {Number} max
 * @returns {Array}
 */
export function getPrimes(max) {
	let filter = [], i, j, primes = [];
	for (i = 2; i <= max; ++i) {
		if (!filter[i]) {
			primes.push(i);
			for (j = i << 1; j <= max; j += i) {
				filter[j] = true;
			}
		}
	}
	return primes;
}

/**
 * Sums array of number
 * @param {Array} array
 * @returns {Number}
 */
function sum(array) {
	return array.reduce((a, b) => a + b, 0);
}

/**
 * Performing heap algorithm
 * @param {Array|String} arr - The set of elements.
 */
function* heapsAlgorithm(arr) {
	let size = arr.length;
	if (typeof arr === 'string') {
		arr = arr.split('')
	}
	yield* heapsUtil(0);
	function* heapsUtil(index) {
		if (index === size) return yield arr;

		for (let j = index; j < size; j++) {
			swap(arr, index, j);
			yield* heapsUtil(index + 1);
			swap(arr, index, j)
		}
	}
}