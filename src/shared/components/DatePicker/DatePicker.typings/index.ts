import type { ReactDatePickerProps } from 'react-datepicker';

type DateField = Date | null;

export interface IDatePickerProps extends ReactDatePickerProps {
	initialValue: DateField;
	onChange: (newValue: DateField) => unknown;
}
