import { MeetingRoomForm } from '@widgets/MeetingRoomForm';

import { MeetingRoomLayout } from './MeetingRoom.components/MeetingRoomLayout/MeetingRoomLayout';

export const MeetingRoom = function () {
	return (
		<MeetingRoomLayout>
			<MeetingRoomForm />
		</MeetingRoomLayout>
	);
};
