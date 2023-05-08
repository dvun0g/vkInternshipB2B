import type { ReactDatePickerProps } from 'react-datepicker';

export interface IDatePickerProps extends ReactDatePickerProps {
	initialValue: Date | null;
	onChange: (newValue: Date | null) => unknown;
}
