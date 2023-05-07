import { resolve } from 'path';

import type { IPathResolve } from './pathResolve.typings';

export const pathResolve: IPathResolve = function (currentPath) {
	return resolve(__dirname, '../../../', currentPath);
};
