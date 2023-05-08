import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IMeetingRoomLayoutProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
