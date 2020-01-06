import React, {
  memo,
  useEffect,
  useState,
  useCallback,
} from 'react';

import axios from 'axios';

import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

import {
  loadData,
  searchByAbbr,
} from '../data-entities/Data';

import { Rate } from '../model/Rate';
import { ListTo } from '../components/list/ListTo';
import { useStyles } from '../styles/home.style';

import {
  TextField,
  InputAdornment,
  Icon,
} from '@material-ui/core';

import { Converter } from '../components/Converter';
import { ConvertCurrency } from '../model/ConvertCurrency';

const override = css`
  display: block;
  margin: 0 auto;
`;

export const Home: React.FC = memo(() => {
  const classes = useStyles();

  const arr: Rate[] = [];
  const currency: ConvertCurrency[] = [];

  const [dataState, setDataState] = useState(arr);
  const [isLoadSpinner, setFlagLoadSpinner] = useState(true);
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

        arr2.map((item: Rate) => {
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
              value: item.Cur_OfficialRate / 100,
            });
          }
          if (item.Cur_Abbreviation === 'PLN') {
            cur.push({
              label: item.Cur_Abbreviation,
              value: item.Cur_OfficialRate / 10,
            });
          }
        });

        cur.unshift({
          label: 'BYN',
          value: 1,
        });

        if (arr2.length !== 0) {
          setFlagLoadSpinner(false);
        }

        setCurrencies(cur);
        setDataState(arr2);
        setDataTempState(arr2);
      })
      .catch(error => {
        throw new TypeError(error);
      });
  }, []);

  const changeInputSearch = useCallback(
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
          onChange={changeInputSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
        <ListTo items={dataState} />
        <BeatLoader
          css={override}
          color={'#404040'}
          loading={isLoadSpinner}
        />
      </div>

      <Converter currency={currencies} />
    </div>
  );
});
