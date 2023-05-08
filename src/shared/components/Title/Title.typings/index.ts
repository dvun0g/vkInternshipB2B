import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITitleProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	className?: string;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color: 'black' | 'gray';
	text: string;
}

export type IClassNameTag = ITitleProps[keyof Pick<ITitleProps, 'tag'>][];
export type IClassNameColor = ITitleProps[keyof Pick<ITitleProps, 'color'>][];
