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