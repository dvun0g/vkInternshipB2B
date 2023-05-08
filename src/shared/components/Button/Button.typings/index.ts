import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string;
	color: 'primary' | 'secondary';
	size: 'small' | 'medium' | 'large';
}

export type IClassNameColor = IButtonProps[keyof Pick<IButtonProps, 'color'>][];
export type IClassNameSize = IButtonProps[keyof Pick<IButtonProps, 'size'>][];
