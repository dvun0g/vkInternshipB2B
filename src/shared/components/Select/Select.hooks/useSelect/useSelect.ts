import { useEffect, useState, useCallback } from 'react';

import type { IUseSelect } from './useSelect.typings';

export const useSelect: IUseSelect = function (value, onChange, items) {
	const [selected, setSelected] = useState<string | null>(value);
	const [visited, setVisited] = useState<boolean>(false);

	const handlerChangeVisited = function () {
		setVisited((prev) => !prev);
	};

	const handlerClose = function () {
		setVisited(false);
	};

	const handlerChange = useCallback(function (index: number) {
		const newValue = items[index];

		setSelected(newValue);
		handlerClose();
	}, []);

	useEffect(() => {
		if (selected !== value) {
			onChange(selected);
		}
	}, [selected]);

	useEffect(() => {
		if (selected !== value) {
			setSelected(value);
		}
	}, [value]);

	return {
		selected,
		visited,
		handlerChange,
		handlerClose,
		handlerChangeVisited,
	};
};
