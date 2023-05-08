import { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import { DatePickerInput } from './DatePicket.components/DatePickerInput/DatePickerInput';
import { DatePickerDay } from './DatePicket.components/DatePickerDay/DatePickerDay';

import type { IDatePickerProps } from './DatePicker.typings';
import styles from './DatePicker.module.scss';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

export const DatePickerCustom = function ({
	className,
	...props
}: IDatePickerProps) {
	const [date, setDate] = useState<Date | null>(null);
	const initialDate = new Date();

	const handleChange = useCallback(function (date: Date | null) {
		setDate(date);
	}, []);

	return (
		<DatePicker
			{...props}
			className={className}
			dateFormat="dd-MM-yyyy"
			timeCaption="Время"
			locale={ru}
			timeIntervals={30}
			minDate={initialDate}
			customInput={<DatePickerInput />}
			showTimeSelect
			selected={date}
			onChange={(date) => handleChange(date)}
			renderDayContents={(day) => <DatePickerDay day={day} />}
			weekDayClassName={() => styles.weekDay}
			timeClassName={() => styles.time}
		/>
	);
};
