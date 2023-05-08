import cn from 'classnames';

import { Icon } from '@shared/components/Icon';

import type { IMeetingRoomFormTitleProps } from './MeetingRoomFormTitle.typings';
import vk from './MeetingRoomFormTitle.assets/vk.svg';
import styles from './MeetingRoomFormTitle.module.scss';
import { Title } from '@shared/components/Title';
import { Text } from '@shared/components/Text';

export const MeetingRoomFormTitle = function ({
	className,
	...props
}: IMeetingRoomFormTitleProps) {
	return (
		<div className={cn(styles.container, className)} {...props}>
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
