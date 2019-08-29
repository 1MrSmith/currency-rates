import { Rate } from '../model/Rate';
import { ConvertCurrency } from '../model/ConvertCurrency';

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

export function converter(e: React.ChangeEvent<HTMLInputElement>, currencies: ConvertCurrency[]): void {
    const array = document.getElementsByTagName('input');

    if (e.target.name === 'BYN') {
        if (e.target.value === '1') {
            for (let index = 1; index < array.length; index += 1) {
                array[index].value = String(currencies[index - 1].value);
            }
        } else {
            for (let index = 1; index < array.length; index += 1) {
                array[index].value = String(parseFloat(e.target.value) / currencies[index - 1].value);
            }
        }
    }
}
