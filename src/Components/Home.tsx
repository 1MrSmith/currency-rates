import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { loadData } from '../Engine/Data';
import { Rate } from '../Model/Rate';
import { ListTo } from './List/ListTo';
import { useStyles } from '../Styles/home.style';

export const Home: React.FC = memo(() => {
  const classes = useStyles();

  const arr: Rate[] = [];

  const [dataState, setDataState] = useState(arr);

  useEffect(() => {
    axios
      .get(loadData())
      .then(res => {
        const arr2: Rate[] = res.data.filter(
          (item: Rate) => item.Cur_Abbreviation !== 'XDR',
        ) as Rate[];
        setDataState(arr2);
      })
      .catch(error => {
        throw new TypeError(error);
      });
  }, []);

  return (
    <div className={classes.body}>
      <h3>Home page!</h3>
      <ListTo items={dataState} />
    </div>
  );
});
