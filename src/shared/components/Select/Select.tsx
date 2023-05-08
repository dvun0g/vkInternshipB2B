import { useRef, useState } from 'react';
import cn from 'classnames';

import { Icon } from '@shared/components/Icon';
import { Text } from '@shared/components/Text';

import useOnClickOutside from '@shared/hooks/useOutsideClick/useOutsideClick';
import { initializationSelectedValue } from './Select.helpers/initializationSelectedValue/initializationSelectedValue';

import type { ISelectProps } from './Select.typings';
import arrowImg from './Select.assets/arrow.svg';
import styles from './Select.module.scss';

export const Select = function ({
	className,
	arrow,
	initialValue,
	items,
	placeholder,
	...props
}: ISelectProps) {
	const [selectedValue, setSelectedValue] = useState<string>(
		initializationSelectedValue(initialValue, placeholder),
	);
	const [isOpenList, setOpenList] = useState<boolean>(false);
	const ref = useRef<null | HTMLDivElement>(null);

	const handleChangeVisibleList = function () {
		setOpenList((prev) => !prev);
	};

	const handleClose = function () {
		setOpenList(false);
	};

	const handleChange = function (index: number) {
		let newSelectedValue = items[index];

		if (newSelectedValue === selectedValue) {
			newSelectedValue = initializationSelectedValue(
				undefined,
				placeholder,
			);
		}

		setSelectedValue(newSelectedValue);
		handleClose();
	};

	const arrowRender = arrow ? (
		<Icon size="small" src={arrowImg} alt="Arrow" />
	) : null;

	useOnClickOutside<HTMLDivElement>(ref, handleClose, 'mousedown');

	return (
		<div ref={ref} className={cn(styles.container, className)} {...props}>
			<div
				className={cn(styles.select, {
					[styles.selectActive]: isOpenList,
				})}
				onClick={handleChangeVisibleList}
			>
				<Text
					className={cn(styles.selectText, {
						[styles.selectTextPlaceholder]:
							selectedValue === placeholder,
					})}
					text={selectedValue}
					size="small"
					color="gray"
				/>
				{arrowRender}
			</div>

			<div
				className={cn(styles.list, {
					[styles.listVisited]: isOpenList === true,
				})}
			>
				{items.map((item, i) => (
					<button
						key={i}
						className={cn(styles.listItem, {
							[styles.listItemSelected]: item === selectedValue,
						})}
						onClick={() => handleChange(i)}
					>
						<Text
							className={styles.listItemText}
							text={item}
							size="small"
							color="gray"
						/>
					</button>
				))}
			</div>
		</div>
	);
};
