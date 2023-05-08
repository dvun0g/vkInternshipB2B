import type { IGenerateClassNameFromArray } from './generateClassNameFromArray.typings';

/**
 * Функция генерирует объект с классами стилей при определенном условии.
 */
export const generateClassNameFromArray: IGenerateClassNameFromArray =
	function (styles, property, allValues) {
		const result: { [key: string]: boolean } = {};

		for (const className of allValues) {
			result[styles[className]] = property === className;
		}

		return result;
	};
