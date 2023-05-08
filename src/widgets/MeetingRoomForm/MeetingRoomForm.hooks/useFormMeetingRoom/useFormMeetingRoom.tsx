import { useState, useEffect, useCallback } from 'react';

import type { IUseFormMeetingRoom } from './useFormMeetingRoom.typings';
import { formatData } from '@widgets/MeetingRoomForm/MeetingRoomForm.helpers/formatData/formatData';

export const useFormMeetingRoom: IUseFormMeetingRoom = function () {
	const [towerField, setTowerField] = useState<string | null>(null);
	const [floorField, setFloorField] = useState<string | null>(null);
	const [roomField, setRoomField] = useState<string | null>(null);
	const [dateField, setDateField] = useState<Date | null>(null);
	const [commentField, setCommentField] = useState<string | null>(null);

	const [allFieldsCorrect, setAllFieldsCorrect] = useState<boolean>(false);

	useEffect(() => {
		const atLeastOneEmpty =
			!towerField ||
			!floorField ||
			!roomField ||
			!dateField ||
			!commentField;

		if (atLeastOneEmpty) {
			setAllFieldsCorrect(false);
			return;
		}

		setAllFieldsCorrect(true);
	}, [towerField, floorField, roomField, dateField, commentField]);

	const handlerSend = useCallback(
		function () {
			if (!allFieldsCorrect) {
				return;
			}

			// Состояние allFieldsCorrect и так отражает это состояние, но ts ругается
			const atLeastOneEmpty =
				!towerField ||
				!floorField ||
				!roomField ||
				!dateField ||
				!commentField;

			if (atLeastOneEmpty) {
				return;
			}

			// eslint-disable-next-line no-console
			console.log(
				JSON.stringify(
					formatData({
						towerField,
						floorField,
						roomField,
						dateField,
						commentField,
					}),
					null,
					4,
				),
			);
			handlerClear();
		},
		[
			towerField,
			floorField,
			roomField,
			dateField,
			commentField,
			allFieldsCorrect,
		],
	);

	const handlerClear = useCallback(function () {
		setTowerField(null);
		setFloorField(null);
		setRoomField(null);
		setDateField(null);
		setCommentField(null);
	}, []);

	const handlerChangeTower = useCallback(function (newValue: string | null) {
		setTowerField(newValue);
	}, []);
	const handlerChangeFloor = useCallback(function (newValue: string | null) {
		setFloorField(newValue);
	}, []);
	const handlerChangeRoom = useCallback(function (newValue: string | null) {
		setRoomField(newValue);
	}, []);
	const handlerChangeDate = useCallback(function (newValue: Date | null) {
		setDateField(newValue);
	}, []);
	const handlerChangeComment = useCallback(function (
		newValue: string | null,
	) {
		setCommentField(newValue);
	},
	[]);

	return {
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
	};
};
