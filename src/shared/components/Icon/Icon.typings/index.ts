import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IIconProps
	extends DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	size: 'small' | 'medium' | 'large';
	className?: string;
}

export type IClassNameSize = IIconProps[keyof Pick<IIconProps, 'size'>][];
