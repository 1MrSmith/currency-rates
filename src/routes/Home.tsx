import React, { memo, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { loadData, searchByAbbr } from '../engine/Data';
import { Rate } from '../model/Rate';
import { ListTo } from '../components/list/ListTo';
import { useStyles } from '../styles/home.style';
import { TextField, InputAdornment, Icon } from '@material-ui/core';
import { Converter } from '../components/Converter';
import { ConvertCurrency } from '../model/ConvertCurrency';

export const Home: React.FC = memo(() => {
  const classes = useStyles();

  const arr: Rate[] = [];
  const currency: ConvertCurrency[] = [];

  const [dataState, setDataState] = useState(arr);
  const [dataTempState, setDataTempState] = useState(arr);

  const [currencies, setCurrencies] = useState(currency);

  useEffect(() => {
    axios
      .get(loadData())
      .then(res => {
        const arr2: Rate[] = res.data.filter(
          (item: Rate) => item.Cur_Abbreviation !== 'XDR',
        ) as Rate[];
        const cur: ConvertCurrency[] = [];
        for (const item of arr2) {
          if (item.Cur_Abbreviation === 'USD') {
            cur.push({
              label: item.Cur_Abbreviation,
              value: item.Cur_OfficialRate,
            });
          }
          if (item.Cur_Abbreviation === 'EUR') {
            cur.push({
              label: item.Cur_Abbreviation,
              value: item.Cur_OfficialRate,
            });
          }
          if (item.Cur_Abbreviation === 'RUB') {
            cur.push({
              label: item.Cur_Abbreviation,
              value: item.Cur_OfficialRate,
            });
          }
          if (item.Cur_Abbreviation === 'PLN') {
            cur.push({
              label: item.Cur_Abbreviation,
              value: item.Cur_OfficialRate,
            });
          }
        }
        cur.unshift({
          label: 'BYN',
          value: 1,
        });
        setCurrencies(cur);
        setDataState(arr2);
        setDataTempState(arr2);
      })
      .catch(error => {
        throw new TypeError(error);
      });
  }, []);

  const changeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataState(searchByAbbr(e.target.value, dataTempState));
    },
    [setDataTempState, dataTempState],
  );

  return (
    <div className={classes.body}>
      <div className={classes.title}>Home page!</div>
      <div className={classes.search}>
        <TextField
          label="Search"
          placeholder="Search necessary currency"
          className={classes.search__input}
          onChange={changeInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
        <ListTo items={dataState} />
      </div>

      <Converter currency={currencies} />
    </div>
  );
});
