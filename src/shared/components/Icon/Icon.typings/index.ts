import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IIconProps
	extends DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	size: 'small' | 'medium' | 'large';
}

export type IClassNameSize = IIconProps[keyof Pick<IIconProps, 'size'>][];
