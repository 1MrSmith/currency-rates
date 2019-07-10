import { Rate } from '../Model/Rate';

export function loadDataByID(id: number): string {
    const date: Date = new Date();
    return 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/' + id + '?startDate=' + [date.getFullYear(), date.getMonth(), date.getDay()].join('-') + '&endDate=' + [date.getFullYear(), date.getMonth() + 1, date.getDay()].join('-');
}

export function loadData(): string {
    return 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
}

export function searchByAbbr(str: string, tempRateList: Rate[]): Rate[] {
    return tempRateList.filter((item: Rate) => item.Cur_Abbreviation.toLowerCase().match(str.toLocaleLowerCase()));
}
