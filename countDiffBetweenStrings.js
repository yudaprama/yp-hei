let arr = [];
let charCode = [];

export default function countDiffBetweenStrings(recruiterName, candidateName) {
	if (recruiterName === candidateName) {
		return 0;
	}

	// which one is the shortest & longest
	const swap = recruiterName;
	if (recruiterName.length > candidateName.length) {
		recruiterName = candidateName;
		candidateName = swap;
	}

	let recruiterNameLength = recruiterName.length;
	let candidateNameLength = candidateName.length;

	// suffix trimming
	while (recruiterNameLength > 0 && (recruiterName.charCodeAt(~-recruiterNameLength) === candidateName.charCodeAt(~-candidateNameLength))) {
		recruiterNameLength--;
		candidateNameLength--;
	}

	// prefix trimming
	let start = 0;
	while (start < recruiterNameLength && (recruiterName.charCodeAt(start) === candidateName.charCodeAt(start))) {
		start++;
	}

	recruiterNameLength -= start;
	candidateNameLength -= start;

	if (recruiterNameLength === 0) {
		return candidateNameLength;
	}

	let candidateNameCharCode, result, tmp, tmp2;
	let i = 0;
	let j = 0;

	while (i < recruiterNameLength) {
		charCode[i] = recruiterName.charCodeAt(start + i);
		arr[i] = ++i;
	}

	while (j < candidateNameLength) {
		candidateNameCharCode = candidateName.charCodeAt(start + j);
		tmp = j++;
		result = j;

		for (i = 0; i < recruiterNameLength; i++) {
			tmp2 = candidateNameCharCode === charCode[i] ? tmp : tmp + 1;
			tmp = arr[i];
			result = arr[i] = tmp > result ? tmp2 > result ? result + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
		}
	}

	return result;
}