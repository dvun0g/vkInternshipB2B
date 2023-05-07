import { resolve } from 'path';

import type { IPathResolve } from './pathResolve.typings';

/**
 * Функция для генерации путей от корневого каталога проекта
 */
export const pathResolve: IPathResolve = function (currentPath) {
	return resolve(__dirname, '../../../', currentPath);
};
