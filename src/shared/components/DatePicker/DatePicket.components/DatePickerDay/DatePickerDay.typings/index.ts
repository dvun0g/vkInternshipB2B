import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface IDatePickerDayProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	day: number;
}
