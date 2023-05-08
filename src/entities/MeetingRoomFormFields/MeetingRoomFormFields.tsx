import { Select } from '@shared/components/Select/Select';
import { DatePicker } from '@shared/components/DatePicker';
import { TextArea } from '@shared/components/TextArea';

import {
	SELECT_TOWER,
	SELECT_FLOOR,
	SELECT_MEETING_ROOM_NUMBER,
} from './MeetingRoomFormFields.constants';
import styles from './MeetingRoomFormFields.module.scss';

export const MeetingRoomFormFields = function () {
	return (
		<div className={styles.container}>
			<Select
				className={styles.select}
				items={SELECT_TOWER}
				arrow
				placeholder="Выберите башню"
			/>
			<Select
				className={styles.select}
				items={SELECT_FLOOR}
				arrow
				placeholder="Выберите этаж"
			/>
			<Select
				className={styles.select}
				items={SELECT_MEETING_ROOM_NUMBER}
				arrow
				placeholder="Выберите переговорную"
			/>
			<DatePicker
				className={styles.datePicker}
				placeholderText="Выберите дату"
				onChange={() => null}
			/>
			<TextArea
				className={styles.textArea}
				placeholder="Оставьте комментарий"
			/>
		</div>
	);
};
