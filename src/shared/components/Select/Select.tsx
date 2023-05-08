import { useRef } from 'react';
import cn from 'classnames';

import { Icon } from '@shared/components/Icon';
import { Text } from '@shared/components/Text';

import { useSelect } from './Select.hooks/useSelect/useSelect';
import { useOnClickOutside } from '@shared/hooks/useOutsideClick/useOutsideClick';

import type { ISelectProps } from './Select.typings';
import arrowImg from './Select.assets/arrow.svg';
import styles from './Select.module.scss';

export const Select = function ({
	className,
	arrow,
	value,
	items,
	placeholder,
	handleChange: onChange,
	...props
}: ISelectProps) {
	const {
		handlerChange,
		handlerChangeVisited,
		handlerClose,
		visited,
		selected,
	} = useSelect(value, onChange, items);

	const ref = useRef<null | HTMLDivElement>(null);
	useOnClickOutside<HTMLDivElement>(ref, handlerClose, 'mousedown');

	const classNameSelectedVisited = { [styles.selectActive]: visited };
	const classNameListVisited = { [styles.listVisited]: visited };

	const classNameSelectedListItem = (item: string) => ({
		[styles.listItemSelected]: item === selected,
	});

	const renderSelectedText = selected ? (
		<Text
			className={cn(styles.selectText)}
			text={selected}
			size="small"
			color="black"
		/>
	) : null;

	const renderPlaceholder =
		!selected && placeholder ? (
			<Text
				className={cn(styles.selectText)}
				text={placeholder}
				size="small"
				color="gray"
			/>
		) : null;

	const renderArrowIcon = arrow ? (
		<Icon size="small" src={arrowImg} alt="Arrow" />
	) : null;

	const renderListItems = items.map((item, i) => (
		<button
			key={i}
			className={cn(styles.listItem, classNameSelectedListItem(item))}
			onClick={() => handlerChange(i)}
		>
			<Text
				className={styles.listItemText}
				text={item}
				size="small"
				color="gray"
			/>
		</button>
	));

	return (
		<div ref={ref} className={cn(styles.container, className)} {...props}>
			<div
				className={cn(styles.select, classNameSelectedVisited)}
				onClick={handlerChangeVisited}
			>
				{renderSelectedText}
				{renderPlaceholder}
				{renderArrowIcon}
			</div>
			<div className={cn(styles.list, classNameListVisited)}>
				{renderListItems}
			</div>
		</div>
	);
};
