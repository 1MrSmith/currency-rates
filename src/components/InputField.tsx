import React, { memo, useCallback, useState } from 'react';
import { useStyles } from '../styles/converter.style';

interface Props {
    label: string;
    value: number;
}

export const InputField: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  const [convert, SetConvert] = useState('');

  const changeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const strNum: string = e.target.name;
      // const num: number = +strNum;
      // tslint:disable-next-line: no-console
      // console.log(num);
      SetConvert(strNum);
    },
    [SetConvert, convert],
  );

  return (
    <div className={classes.footer__cell}>
      <label className={classes.footer__label}>{props.label}</label>
      <input className={classes.footer__input} name={props.label} type="number" pattern="\d+(\.\d{2})?"  onChange={changeInput}/>
    </div>
  );
});
