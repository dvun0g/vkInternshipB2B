import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISelectProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
	initialValue?: string;
	arrow?: boolean;
	items: string[];
	placeholder?: string;
}
