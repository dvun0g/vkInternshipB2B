type Handler = () => void;

export interface IMeetingRoomFormButtonsProps {
	allFieldsCorrect: boolean;
	handlerSend: Handler;
	handlerClear: Handler;
}
