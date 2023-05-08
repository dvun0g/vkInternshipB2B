import type { RefObject } from 'react';

export type IMouseEvent = 'mouseup' | 'mousedown';
export type IHandler = () => void;
export type IRef<T> = RefObject<T>;
