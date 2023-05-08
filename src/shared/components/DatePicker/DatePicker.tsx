import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import { DatePickerInput } from './DatePicket.components/DatePickerInput/DatePickerInput';
import { DatePickerDay } from './DatePicket.components/DatePickerDay/DatePickerDay';

import type { IDatePickerProps } from './DatePicker.typings';
import styles from './DatePicker.module.scss';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

export const DatePickerCustom = function ({
	initialValue,
	onChange,
	...props
}: IDatePickerProps) {
	const initialDate = new Date();

	return (
		<DatePicker
			{...props}
			dateFormat="dd-MM-yyyy"
			timeCaption="Время"
			locale={ru}
			timeIntervals={30}
			minDate={initialDate}
			customInput={<DatePickerInput />}
			showTimeSelect
			selected={initialValue}
			onChange={onChange}
			renderDayContents={(day) => <DatePickerDay day={day} />}
			weekDayClassName={() => styles.weekDay}
			timeClassName={() => styles.time}
		/>
	);
};
