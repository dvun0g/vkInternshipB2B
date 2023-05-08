import cn from 'classnames';

import { generateClassNameFromArray } from '@shared/helpers/generateClassNameFromArray/generateClassNameFromArray';

import type { ITextProps } from './Text.typings';
import { CLASSNAME_COLOR, CLASSNAME_SIZE } from './Text.constants';
import styles from './Text.module.scss';

export const Text = function ({
	className,
	size,
	color,
	text,
	...props
}: ITextProps) {
	const classNameColor = generateClassNameFromArray(
		styles,
		color,
		CLASSNAME_COLOR,
	);
	const classNameSize = generateClassNameFromArray(
		styles,
		size,
		CLASSNAME_SIZE,
	);

	return (
		<span
			className={cn(
				styles.text,
				classNameColor,
				classNameSize,
				className,
			)}
			{...props}
		>
			{text}
		</span>
	);
};
