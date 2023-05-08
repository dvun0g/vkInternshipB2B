import type { IFormatData } from './formatData.typings';

/**
 * Функция выбирает числа из строки и возращает строку с цифрами.
 */
const formatStringToStringNumbers = function (string: string) {
	return [...string].reduce((acc, char) => {
		if (char !== ' ' && !Number.isNaN(Number(char))) {
			acc += char;
		}

		return acc;
	}, '');
};

/**
 * Функция прибавляет к дате 30м и выводит дату в виде интервала.
 */
const formatDate = function (date: Date) {
	const optionsConvertDateToString: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};

	return `${date.toLocaleString(
		'ru-RU',
		optionsConvertDateToString,
	)} - ${new Date(Number(date) + 30 * 60000).toLocaleString(
		'ru-RU',
		optionsConvertDateToString,
	)}`;
};

/**
 * Функция для форматирования данных формы.
 */
export const formatData: IFormatData = function (data) {
	return {
		Башня: data.towerField,
		Этаж: formatStringToStringNumbers(data.floorField),
		Переговорная: formatStringToStringNumbers(data.roomField),
		Дата: formatDate(data.dateField),
		Комментарий: data.commentField,
	};
};
