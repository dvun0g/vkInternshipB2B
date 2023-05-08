export interface IMeetingRoomFormFields {
    towerValue: string | null;
    floorValue: string | null;
    roomValue: string | null;
    dateValue: Date | null;
    commentValue: string | null;
	handlerChangeTower: (newValue: string | null) => void;
	handlerChangeFloor: (newValue: string | null) => void;
	handlerChangeRoom: (newValue: string | null) => void;
	handlerChangeDate: (newValue: Date | null) => void;
	handlerChangeComment: (newValue: string | null) => void;
}
