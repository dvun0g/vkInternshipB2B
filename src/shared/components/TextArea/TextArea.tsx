import cn from 'classnames';

import type { ITextAreaProps } from './TextArea.typings';
import styles from './TextArea.module.scss';

export const TextArea = function ({ className, ...props }: ITextAreaProps) {
	return <textarea className={cn(styles.textArea, className)} {...props} />;
};
