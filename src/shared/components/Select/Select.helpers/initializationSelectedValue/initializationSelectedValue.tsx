import type { IInitializationSelectedValue } from './initializationSelectedValue.typings';

export const initializationSelectedValue: IInitializationSelectedValue =
	function (initialValue, placeholder) {
		if (initialValue !== undefined) {
			return initialValue;
		}

		if (placeholder !== undefined) {
			return placeholder;
		}

		return '';
	};
