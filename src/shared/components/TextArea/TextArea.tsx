import cn from 'classnames';

import { useTextArea } from './TextArea.hooks/useTextArea/useTextArea';

import type { ITextAreaProps } from './TextArea.typings';
import styles from './TextArea.module.scss';

export const TextArea = function ({
	initialValue,
	handleChange: onChange,
	className,
	...props
}: ITextAreaProps) {
	const { value, handlerChange } = useTextArea(initialValue, onChange);
	const textAreaValueString = value || '';

	return (
		<textarea
			className={cn(styles.textArea, className)}
			onChange={handlerChange}
			value={textAreaValueString}
			{...props}
		/>
	);
};
