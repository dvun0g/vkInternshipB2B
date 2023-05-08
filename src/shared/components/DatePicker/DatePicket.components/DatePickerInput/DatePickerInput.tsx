import cn from 'classnames';

import type { IDatePickerInputProps } from './DatePickerInput.typings';
import styles from './DatePickerInput.module.scss';

export const DatePickerInput = function ({ ...props }: IDatePickerInputProps) {
	return (
		<input
			{...props}
			className={cn(styles.input, props.className)}
			onChange={() => null}
		/>
	);
};

DatePickerInput.displayName = 'DatePickerInput';
