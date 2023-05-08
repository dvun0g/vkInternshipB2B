import { Button } from '@shared/components/Button';

import styles from './MeetingRoomFormButtons.module.scss';

export const MeetingRoomFormButtons = function () {
	return (
		<div className={styles.container}>
			<Button
				className={styles.buttonSend}
				text="Отправить"
				color="primary"
				size="medium"
			/>
			<Button
				className={styles.buttonClean}
				text="Очистить"
				color="secondary"
				size="medium"
			/>
		</div>
	);
};
