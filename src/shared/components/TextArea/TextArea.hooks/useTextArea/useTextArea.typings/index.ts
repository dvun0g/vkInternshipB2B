import type { ChangeEvent } from 'react';

type OnChange = (newValue: string | null) => unknown;
export type StringField = string | null;

export type IUseTextArea = (
	value: StringField,
	onChange: OnChange,
) => {
	value: StringField;
	handlerChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};
