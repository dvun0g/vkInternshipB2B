import type { IFormatData } from './formatData.typings';

const formatStringToStringNumbers = function (string: string) {
	return [...string].reduce((acc, char) => {
		if (char !== ' ' && !Number.isNaN(Number(char))) {
			acc += char;
		}

		return acc;
	}, '');
};

const formatDate = function (date: Date) {
	const dateNext = new Date(date);
	dateNext.setMinutes(dateNext.getMinutes() + 30);

	return `${date.toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	})} - ${dateNext.toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	})}`;
};

export const formatData: IFormatData = function (data) {
	return {
		Башня: data.towerField,
		Этаж: formatStringToStringNumbers(data.floorField),
		Переговорная: formatStringToStringNumbers(data.roomField),
		Дата: formatDate(data.dateField),
		Комментарий: data.commentField,
	};
};
