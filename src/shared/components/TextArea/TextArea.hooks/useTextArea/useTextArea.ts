import { useState, useEffect, useCallback } from 'react';
import type { ChangeEvent } from 'react';

import type { IUseTextArea, StringField } from './useTextArea.typings';

export const useTextArea: IUseTextArea = function (initialValue, onChange) {
	const [value, setValue] = useState<StringField>(initialValue);

	const handlerChange = useCallback(function (
		event: ChangeEvent<HTMLTextAreaElement>,
	) {
		const newValue = event.target.value || null;
		setValue(newValue);
	},
	[]);

	useEffect(() => {
		if (value !== initialValue) {
			onChange(value);
		}
	}, [value]);

	useEffect(() => {
		if (value !== initialValue) {
			setValue(initialValue);
		}
	}, [initialValue]);

	return {
		value,
		handlerChange,
	};
};
