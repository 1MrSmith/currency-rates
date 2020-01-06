import { Rate } from '../model/Rate';
import { ConvertCurrency } from '../model/ConvertCurrency';

export function loadDataByID(id: number): string {
    const date: Date = new Date();
    let year: number;
    let month: number;
    if (date.getMonth() === 0) {
        month = 12;
        year = date.getFullYear() - 1;
    } else {
        month = date.getMonth();
        year = date.getFullYear();
    }
    return 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/' + id + '?startDate=' +
            [year, month, date.getDate()].join('-') + '&endDate=' +
            [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}

export function loadData(): string {
    return 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
}

export function searchByAbbr(str: string, tempRateList: Rate[]): Rate[] {
    return tempRateList.filter((item: Rate) => item.Cur_Abbreviation.toLowerCase().match(str.toLocaleLowerCase()));
}

export function converter(e: React.ChangeEvent<HTMLInputElement>, currencies: ConvertCurrency[]): void {
    const array = document.getElementsByTagName('input');

    if (e.target.name === 'BYN') {
        for (let index = 1; index < array.length; index += 1) {
            array[index].value = String(parseFloat(e.target.value) / currencies[index - 1].value);
        }
    }
}
