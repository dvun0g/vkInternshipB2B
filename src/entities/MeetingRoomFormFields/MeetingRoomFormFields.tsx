import { Select } from '@shared/components/Select';
import { DatePicker } from '@shared/components/DatePicker';
import { TextArea } from '@shared/components/TextArea';

import {
	SELECT_TOWER,
	SELECT_FLOOR,
	SELECT_MEETING_ROOM_NUMBER,
} from './MeetingRoomFormFields.constants';
import type { IMeetingRoomFormFields } from './MeetingRoomFormFields.typings';
import styles from './MeetingRoomFormFields.module.scss';

export const MeetingRoomFormFields = function ({
	towerValue,
	floorValue,
	roomValue,
	dateValue,
	commentValue,
	handlerChangeTower,
	handlerChangeFloor,
	handlerChangeRoom,
	handlerChangeDate,
	handlerChangeComment,
}: IMeetingRoomFormFields) {
	return (
		<div className={styles.container}>
			<Select
				className={styles.select}
				value={towerValue}
				handleChange={handlerChangeTower}
				items={SELECT_TOWER}
				placeholder="Выберите башню"
				arrow
			/>
			<Select
				className={styles.select}
				handleChange={handlerChangeFloor}
				value={floorValue}
				items={SELECT_FLOOR}
				placeholder="Выберите этаж"
				arrow
			/>
			<Select
				className={styles.select}
				handleChange={handlerChangeRoom}
				value={roomValue}
				items={SELECT_MEETING_ROOM_NUMBER}
				arrow
				placeholder="Выберите переговорную"
			/>
			<DatePicker
				className={styles.datePicker}
				initialValue={dateValue}
				onChange={handlerChangeDate}
				placeholderText="Выберите дату"
			/>
			<TextArea
				className={styles.textArea}
				initialValue={commentValue}
				placeholder="Оставьте комментарий"
				handleChange={handlerChangeComment}
			/>
		</div>
	);
};
