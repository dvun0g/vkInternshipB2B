import type { TextareaHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ITextAreaProps
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	initialValue: string | null;
	handleChange: (newValue: string | null) => unknown;
}
