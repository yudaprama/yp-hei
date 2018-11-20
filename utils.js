/**
 * Performs all possible subsets of set (power).
 * @param {Array|String} arr - The set of elements.
 * @returns {Generator} yields each subset as an array
 */
export function* power(arr) {
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
 * Performs all permutations of a set.
 * @param {Array} arr - The set of elements.
 * @param {Number} [size=arr.length] - Number of elements to choose from the set.
 * @returns {Generator} yields each permutation as an array
 */
export function* permutation(arr, size = arr.length) {
	let len = arr.length;
	if (size === len) return yield* heapsAlgorithm(arr);
	let data = [];
	let indices = [];
	yield* permutationUtil(0);
	function* permutationUtil(index) {
		if (index === size) return yield data;
		for (let i = 0; i < len; i++) {
			if (!indices[i]) {
				indices[i] = true;
				data[index] = arr[i];
				yield *permutationUtil(index + 1);
				indices[i] = false
			}
		}
	}
}

/**
 * Performs the cartesian product of sets.
 * @param {...array} sets of n elements.
 * @returns {Generator} yields each product as an array
 */
export function* cartesian(...sets) {
	let data = [];
	yield* cartesianUtil(0);
	function* cartesianUtil(index) {
		if (index === sets.length) return yield data;
		for (let i = 0; i < sets[index].length; i++) {
			data[index] = sets[index][i];
			yield* cartesianUtil(index + 1)
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
export function sum(array) {
	return array.reduce((a, b) => a + b, 0);
}

/**
 * Swaps two array elements.
 * @param arr
 * @param i
 * @param j
 * @returns {Array}
 */
function swap(arr, i, j) {
	let len = arr.length;
	if (i >= len || j >= len) {
		console.warn('Swapping an array\'s elements past its length.')
	}
	let temp = arr[j];
	arr[j] = arr[i];
	arr[i] = temp;
	return arr
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

/**
 * Get next character
 * @param {string} character
 * @returns {string}
 */
export function nextChar(character) {
	return String.fromCharCode(character.charCodeAt(0) + 1);
}

/**
 * Check uniqueness of two arrays
 * @param {array} array1
 * @param {array} array2
 * @returns {boolean}
 */
export function isArrayUnique(array1, array2) {
	return array1.length === array2.length && array1.sort().every((value, index) => value === array2.sort()[index]);
}