import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useStyles } from '../Styles/currency.style';
import { loadDataByID } from '../Engine/Data';
import { RateShort } from '../Model/RateShort';
import { RouteComponentProps } from 'react-router-dom';

export const Currency: React.FC<RouteComponentProps<any>> = memo((props: RouteComponentProps<any>) => {
  const classes = useStyles();

  const arrX: string[] = [];
  const arrY: number[] = [];

  const [dates, setDateChart] = useState(arrX);
  const [dataChart, setLabels] = useState(arrY);

  useEffect(() => {
    axios.get(loadDataByID(props.match.params.id)).then(res => {
      const arrDate: string[] = [];
      const arrLabels: number[] = [];
      for (const item of res.data as RateShort[]) {
        const str: string[] = item.Date.toString()
          .split('T')
          .slice(0, 1);
        arrDate.push(str[0]);
        arrLabels.push(item.Cur_OfficialRate);
      }
      setLabels(arrLabels);
      setDateChart(arrDate);
    });
  }, []);

  const data = {
    labels: dates,
    datasets: [
      {
        label: props.match.params.abbr,
        data: dataChart,
        fill: false,
        borderColor: '#00AEFF',
      },
    ],
  };

  return (
    <div className={classes.body}>
      <h3>Chart | ID: {props.match.params.id}</h3>
      <article className={classes.canvasContainer}>
        <Line data={data} />
      </article>
    </div>
  );
});
