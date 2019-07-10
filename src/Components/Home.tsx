import React, { memo, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { loadData, searchByAbbr } from '../Engine/Data';
import { Rate } from '../Model/Rate';
import { ListTo } from './List/ListTo';
import { useStyles } from '../Styles/home.style';
import { TextField, InputAdornment, Icon } from '@material-ui/core';

export const Home: React.FC = memo(() => {
  const classes = useStyles();

  const arr: Rate[] = [];

  const [dataState, setDataState] = useState(arr);
  const [dataTempState, setDataTempState] = useState(arr);

  useEffect(() => {
    axios
      .get(loadData())
      .then(res => {
        const arr2: Rate[] = res.data.filter(
          (item: Rate) => item.Cur_Abbreviation !== 'XDR',
        ) as Rate[];
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
      <h3>Home page!</h3>
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
      </div>

      <ListTo items={dataState} />
    </div>
  );
});
