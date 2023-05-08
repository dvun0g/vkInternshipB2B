import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type StringField = string | null;

export interface ISelectProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: StringField;
	items: string[];
	handleChange: (value: StringField) => unknown;
	arrow?: boolean;
	placeholder?: string;
}
