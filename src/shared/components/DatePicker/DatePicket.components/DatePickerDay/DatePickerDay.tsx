import cn from 'classnames';

import type { IDatePickerDayProps } from './DatePickerDay.typings';
import styles from './DatePickerDay.module.scss';

export const DatePickerDay = function ({
	className,
	day,
	...props
}: IDatePickerDayProps) {
	return (
		<button className={cn(styles.day, className)} {...props}>
			{day}
		</button>
	);
};

// Меняем название компонента в DevTools
DatePickerDay.displayName = 'DatePickerDay';
