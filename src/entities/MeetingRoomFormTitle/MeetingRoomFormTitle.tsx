import { Icon } from '@shared/components/Icon';
import { Title } from '@shared/components/Title';
import { Text } from '@shared/components/Text';

import styles from './MeetingRoomFormTitle.module.scss';
import vk from './MeetingRoomFormTitle.assets/vk.svg';

export const MeetingRoomFormTitle = function () {
	return (
		<div className={styles.container}>
			<Icon className={styles.icon} src={vk} alt="VK" size="large" />
			<Title
				className={styles.title}
				color="black"
				tag="h3"
				text="Бронирование переговорной"
			/>
			<Text
				className={styles.text}
				color="gray"
				size="small"
				text="Веберите башню, этаж, переговорную и дату с интервалом времени"
			/>
		</div>
	);
};
