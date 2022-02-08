import moment from "moment";

export const timeDifferencer = (
	sh: number,
	sm: number,
	fh: number,
	fm: number
) => {
	const diff = makeTimeArray((fh * 60 + fm - (sh * 60 + sm)) / 60);
	if (fh * 60 + fm - (sh * 60 + sm) < 0) {
		return;
	}
	return `${("0" + diff[0]).slice(-2)}:${("0" + diff[1]).slice(-2)}`;
};

export const makeTimeArray = (num: any) => {
	num = ("" + num).match(/^(-?[0-9]+)([,.][0-9]+)?/) || [];
	return [~~num[1], +(0 + (num[2] * 60).toFixed(0)) || 0];
};

export const timeExpander = (value: any) => {
	if (value) {
		if (value.length <= 5) {
			const splitter = value.split(":");
			return {
				hours: parseInt(splitter[0]),
				minutes: parseInt(splitter[1]),
			};
		}
	}
	return {
		hours: 0,
		minutes: 0,
	};
};

export const minutesToDuration = (minutes: number) => {
	const temp = makeTimeArray(minutes / 60);
	return (
		temp[0].toString().padStart(2, "0") +
		":" +
		temp[1].toString().padStart(2, "0")
	);
};

export const minutesToDurationDetail = (minutes: number) => {
	const temp = makeTimeArray(minutes / 60);

	return (
		temp[0].toString().padStart(2, "0") +
		" hours " +
		temp[1].toString().padStart(2, "0") +
		" mins"
	);
};

export const loadState = () => {
	try {
		const logOldData = localStorage.getItem("logData");
		if (logOldData === null) {
			return undefined;
		}
		return JSON.parse(logOldData);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state: any) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("logData", serializedState);
	} catch {
		// ignore write errors
	}
};
