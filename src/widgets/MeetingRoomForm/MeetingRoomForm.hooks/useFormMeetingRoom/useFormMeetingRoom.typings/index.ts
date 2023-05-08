type StringField = string | null;
type DateField = Date | null;

type Handler<T> = (newValue: T) => void;
type HandlerVoid = () => void;

export type IUseFormMeetingRoom = () => {
	towerField: StringField;
	floorField: StringField;
	roomField: StringField;
	dateField: DateField;
	commentField: StringField;
	allFieldsCorrect: boolean;
	handlerChangeTower: Handler<StringField>;
	handlerChangeFloor: Handler<StringField>;
	handlerChangeRoom: Handler<StringField>;
	handlerChangeDate: Handler<DateField>;
	handlerChangeComment: Handler<StringField>;
	handlerSend: HandlerVoid;
	handlerClear: HandlerVoid;
};
