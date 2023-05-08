type OnChange = (newValue: string | null) => unknown;
type VoidFunction = () => void;
type StringField = string | null;

export type IUseSelect = (
	value: StringField,
	onChange: OnChange,
	items: string[],
) => {
	selected: StringField;
	visited: boolean;
	handlerChange: (index: number) => void;
	handlerClose: VoidFunction;
	handlerChangeVisited: VoidFunction;
};
