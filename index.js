import {
	cartesian,
	createArrayOfNumberFromN,
	getPrimes,
	isArrayUnique,
	isUnique,
	nextChar,
	permutation,
	power,
	sum
} from "./utils";

/**
 * Answer to question 5
 * @param N
 * @returns {*}
 */
export function Question5(N) {
	let result = [];
	for (let item of power(getPrimes(N))) {
		if (item.length && sum(item) === N) result.push([...item]);
	}
	return result.length ? result : [[]];
}

/**
 * Answer to question 6
 * @param N
 * @returns {Array}
 */
export function Question6(N) {
	let result = [];
	for (let item of permutation(createArrayOfNumberFromN(N))) {
		result.push([...item]);
	}
	return result;
}

/**
 * Answer to question 7
 * @constructor {number} N - number of room
 */
export class Question7 {
	constructor(N) {
		let data = [];
		let sms = 'a';
		for (let perms of power(createArrayOfNumberFromN(N))) {
			data.push({sms, rooms:[...perms]});
			sms = nextChar(sms);
		}
		this.data = data;
	}

	getSMS(roomsInput) {
		let dict = this.data.find(({rooms}) => isArrayUnique(roomsInput, rooms));
		if (dict) {
			return dict.sms;
		}
		return "";
	}

	getRooms(smsInput) {
		let dict = this.data.find(({sms}) => smsInput === sms);
		if (dict) {
			return dict.rooms;
		}
		return [];
	}
}

/**
 * Answer to question 8
 * @param {Array} clothes
 * @return {boolean}
 */
export function Question8(clothes) {
	for (let prod of cartesian(...clothes)) {
		if (isUnique(prod)) return true;
	}
	return false;
}