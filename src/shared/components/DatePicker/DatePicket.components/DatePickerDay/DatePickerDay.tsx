import cn from 'classnames';

import type { IDatePickerDayProps } from './DatePickerDay.typings';
import styles from './DatePickerDay.module.scss';

export const DatePickerDay = function ({
	className,
	day,
	...props
}: IDatePickerDayProps) {
	return (
		<button {...props} className={cn(styles.day, className)}>
			{day}
		</button>
	);
};

DatePickerDay.displayName = 'DatePickerDay';
