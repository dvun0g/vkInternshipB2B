import { useEffect } from 'react';

import type { IHandler, IRef, IMouseEvent } from './useOutsideClick.typings';

/**
 * Хук для отслеживать клика вне элемента
 * @param refs
 * @param handler
 * @param mouseEvent
 */
const useOnClickOutside = function <T extends HTMLElement = HTMLElement>(
	ref: IRef<T>,
	handler: IHandler,
	mouseEvent: IMouseEvent,
) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (!handler) {
				return;
			}

			// Обрабатываем случай со скролл баром.
			if (
				event.target === document.getElementsByTagName('html')[0] &&
				event.clientX >= document.documentElement.offsetWidth
			) {
				return;
			}

			const isRefContainElement =
				// @ts-ignore
				ref && ref.current && ref.current.contains(event.target);

			if (!isRefContainElement) {
				handler();
			}
		}

		document.addEventListener(mouseEvent, handleClickOutside);
		return () => {
			document.removeEventListener(mouseEvent, handleClickOutside);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
