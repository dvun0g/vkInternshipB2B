import { Button } from '@shared/components/Button';

import type { IMeetingRoomFormButtonsProps } from './MeetingRoomFormButtons.typings';
import styles from './MeetingRoomFormButtons.module.scss';

export const MeetingRoomFormButtons = function ({
	allFieldsCorrect,
	handlerSend,
	handlerClear,
}: IMeetingRoomFormButtonsProps) {
	const sendButtonDisabled = !allFieldsCorrect;

	return (
		<div className={styles.container}>
			<Button
				className={styles.buttonSend}
				text="Отправить"
				disabled={sendButtonDisabled}
				color="primary"
				size="medium"
				onClick={handlerSend}
			/>
			<Button
				className={styles.buttonClean}
				text="Очистить"
				color="secondary"
				size="medium"
				onClick={handlerClear}
			/>
		</div>
	);
};
