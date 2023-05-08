import { MeetingRoomFormButtons } from '@entities/MeetingRoomFormButtons';
import { MeetingRoomFormTitle } from '@entities/MeetingRoomFormTitle';
import { MeetingRoomFormFields } from '@entities/MeetingRoomFormFields';

import styles from './MeetingRoomForm.module.scss';

export const MeetingRoomForm = function () {
	return (
		<div className={styles.container}>
			<MeetingRoomFormTitle />
			<form className={styles.form}>
				<MeetingRoomFormFields />
				<MeetingRoomFormButtons />
			</form>
		</div>
	);
};
