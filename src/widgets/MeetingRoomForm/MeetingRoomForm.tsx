import { MeetingRoomFormButtons } from '@entities/MeetingRoomFormButtons';
import { MeetingRoomFormTitle } from '@entities/MeetingRoomFormTitle';
import { MeetingRoomFormFields } from '@entities/MeetingRoomFormFields';

import styles from './MeetingRoomForm.module.scss';

export const MeetingRoomForm = function () {
	return (
		<div className={styles.meetingRoomForm}>
			<MeetingRoomFormTitle />
			<MeetingRoomFormFields />
			<MeetingRoomFormButtons />
		</div>
	);
};
