import cn from 'classnames';

import { generateClassNameFromArray } from '@shared/helpers/generateClassNameFromArray/generateClassNameFromArray';

import { CLASSNAME_SIZE } from './Icon.constants';
import type { IIconProps } from './Icon.typings';
import styles from './Icon.module.scss';

export const Icon = function ({ size, className, ...props }: IIconProps) {
	const classNameSize = generateClassNameFromArray(
		styles,
		size,
		CLASSNAME_SIZE,
	);

	return (
		<img
			className={cn(styles.icon, className, classNameSize)}
			{...props}
		></img>
	);
};
