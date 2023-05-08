import cn from 'classnames';
import { forwardRef } from 'react';
import type { Ref } from 'react';

import type { IDatePickerInputProps } from './DatePickerInput.typings';
import styles from './DatePickerInput.module.scss';

export const DatePickerInput = forwardRef(
	(
		{ className, ...props }: IDatePickerInputProps,
		ref: Ref<HTMLInputElement>,
	) => {
		const handlerDisableChange = () => null;

		return (
			<input
				ref={ref}
				className={cn(styles.input, className)}
				{...props}
				// Обязательно нужно поместить после {...props}, потому библиотека добавляет свой кастомный onChange.
				onChange={handlerDisableChange}
			/>
		);
	},
);

// Меняем название компонента в DevTools
DatePickerInput.displayName = 'DatePickerInput';
