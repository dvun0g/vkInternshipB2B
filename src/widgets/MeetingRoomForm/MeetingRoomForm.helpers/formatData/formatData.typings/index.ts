interface IDate {
	towerField: string;
	floorField: string;
	roomField: string;
	dateField: Date;
	commentField: string;
}

export interface IResultDate {
	Башня: string;
	Этаж: string;
	Переговорная: string;
	Дата: string;
	Комментарий: string;
}

export type IFormatData = (data: IDate) => IResultDate;
