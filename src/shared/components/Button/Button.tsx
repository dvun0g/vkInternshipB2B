import cn from 'classnames';

import { generateClassNameFromArray } from '@shared/helpers/generateClassNameFromArray/generateClassNameFromArray';

import type { IButtonProps } from './Button.typings';
import { CLASSNAME_COLOR, CLASSNAME_SIZE } from './Button.constants';
import styles from './Button.module.scss';

export const Button = function ({
	className,
	size,
	color,
	text,
	...props
}: IButtonProps) {
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
		<button
			className={cn(
				styles.button,
				classNameColor,
				classNameSize,
				className,
			)}
			{...props}
		>
			<span className={styles.text}>{text}</span>
		</button>
	);
};
