import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISelectProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: string | null;
	items: string[];
	handleChange: (value: string | null) => unknown;
	arrow?: boolean;
	placeholder?: string;
}
