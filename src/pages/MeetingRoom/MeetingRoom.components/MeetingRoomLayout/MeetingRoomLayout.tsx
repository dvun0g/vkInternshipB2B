import cn from 'classnames';

import type { IMeetingRoomLayoutProps } from './MeetingRoomLayout.typings';

import styles from './MeetingRoomLayout.module.scss';

export const MeetingRoomLayout = function ({
	className,
	children,
	...props
}: IMeetingRoomLayoutProps) {
	return (
		<div className={cn(className, styles.layout)} {...props}>
			{children}
		</div>
	);
};
