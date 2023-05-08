import { MeetingRoomFormButtons } from '@entities/MeetingRoomFormButtons';
import { MeetingRoomFormTitle } from '@entities/MeetingRoomFormTitle';
import { MeetingRoomFormFields } from '@entities/MeetingRoomFormFields';

import { useFormMeetingRoom } from './MeetingRoomForm.hooks/useFormMeetingRoom/useFormMeetingRoom';

import styles from './MeetingRoomForm.module.scss';

export const MeetingRoomForm = function () {
	const {
		towerField,
		floorField,
		roomField,
		dateField,
		commentField,
		allFieldsCorrect,
		handlerChangeTower,
		handlerChangeFloor,
		handlerChangeRoom,
		handlerChangeDate,
		handlerChangeComment,
		handlerSend,
		handlerClear,
	} = useFormMeetingRoom();

	return (
		<div className={styles.container}>
			<MeetingRoomFormTitle />
			<div className={styles.form}>
				<MeetingRoomFormFields
					towerValue={towerField}
					floorValue={floorField}
					roomValue={roomField}
					dateValue={dateField}
					commentValue={commentField}
					handlerChangeTower={handlerChangeTower}
					handlerChangeFloor={handlerChangeFloor}
					handlerChangeRoom={handlerChangeRoom}
					handlerChangeDate={handlerChangeDate}
					handlerChangeComment={handlerChangeComment}
				/>
				<MeetingRoomFormButtons
					allFieldsCorrect={allFieldsCorrect}
					handlerSend={handlerSend}
					handlerClear={handlerClear}
				/>
			</div>
		</div>
	);
};
