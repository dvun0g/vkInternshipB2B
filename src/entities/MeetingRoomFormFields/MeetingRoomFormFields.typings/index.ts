type StringField = string | null;
type DateField = Date | null;
type Handler<T> = (newValue: T) => void;

export interface IMeetingRoomFormFields {
	towerValue: StringField;
	floorValue: StringField;
	roomValue: StringField;
	dateValue: DateField;
	commentValue: StringField;
	handlerChangeTower: Handler<StringField>;
	handlerChangeFloor: Handler<StringField>;
	handlerChangeRoom: Handler<StringField>;
	handlerChangeDate: Handler<DateField>;
	handlerChangeComment: Handler<StringField>;
}
