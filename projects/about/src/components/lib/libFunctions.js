export function objectToArray (jsonObject) {
	let keyList = Object.keys(jsonObject);
	let retArr =  [];
	keyList.forEach(function (keyName) {
		retArr.push({
			key: keyName,
			value: jsonObject[keyName]
		});
	});
	return retArr;
}
