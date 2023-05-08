import { createElement } from 'react';
import cn from 'classnames';

import { generateClassNameFromArray } from '@shared/helpers/generateClassNameFromArray/generateClassNameFromArray';

import { CLASSNAME_COLOR, CLASSNAME_TAG } from './Title.constants';
import type { ITitleProps } from './Title.typings';
import styles from './Title.module.scss';

export const Title = function ({
	text,
	tag,
	color,
	className,
	...props
}: ITitleProps) {
	const classNameTag = generateClassNameFromArray(styles, tag, CLASSNAME_TAG);
	const classNameColor = generateClassNameFromArray(
		styles,
		color,
		CLASSNAME_COLOR,
	);

	return createElement(tag, {
		children: text,
		className: cn(styles.title, classNameTag, classNameColor, className),
		...props,
	});
};
