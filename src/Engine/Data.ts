
export function loadDataByID(id: number): string {
    const date: Date = new Date();
    return 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/' + id + '?startDate=' + [date.getFullYear(), date.getMonth(), date.getDay()].join('-') + '&endDate=' + [date.getFullYear(), date.getMonth() + 1, date.getDay()].join('-');
}

export function loadData(): string {
    return 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
}
