import type { IAlias } from './alias.typings';

import { pathResolve } from '../../helpers/pathResolve/pathResolve';

export const alias: IAlias = {
	'@app': pathResolve('./src/app'),
	'@processes': pathResolve('./src/processes'),
	'@pages': pathResolve('./src/pages'),
	'@widgets': pathResolve('./src/widgets'),
	'@features': pathResolve('./src/features'),
	'@entities': pathResolve('./src/entities'),
	'@shared': pathResolve('./src/shared'),
};
