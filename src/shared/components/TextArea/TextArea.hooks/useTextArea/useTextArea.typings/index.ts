import type { ChangeEvent } from 'react';

type OnChange = (newValue: string | null) => unknown;

export type IUseTextArea = (
	value: string | null,
	onChange: OnChange,
) => {
	value: string | null;
	handlerChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};
