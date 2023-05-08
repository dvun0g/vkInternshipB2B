import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITextProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	text: string;
	color: 'black' | 'gray';
	size: 'small' | 'medium' | 'large';
}

export type IClassNameColor = ITextProps[keyof Pick<ITextProps, 'color'>][];
export type IClassNameSize = ITextProps[keyof Pick<ITextProps, 'size'>][];
