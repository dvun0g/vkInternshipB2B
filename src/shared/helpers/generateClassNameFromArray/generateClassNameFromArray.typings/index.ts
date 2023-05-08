export type IGenerateClassNameFromArray = (
	styles: CSSModuleClasses,
	property: string,
	allValues: string[],
) => { readonly [key: string]: boolean };
