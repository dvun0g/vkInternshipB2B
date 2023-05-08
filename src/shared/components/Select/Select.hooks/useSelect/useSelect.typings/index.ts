type OnChange = (newValue: string | null) => unknown;
type VoidFunction = () => void;

export type IUseSelect = (
	value: string | null,
	onChange: OnChange,
	items: string[],
) => {
	selected: string | null;
	visited: boolean;
	handlerChange: (index: number) => void;
	handlerClose: VoidFunction;
	handlerChangeVisited: VoidFunction;
};
