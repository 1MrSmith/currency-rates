import React, {
  memo,
  useCallback,
  useState,
} from 'react';

import { useStyles } from '../styles/converter.style';
import { ConvertCurrency } from '../model/ConvertCurrency';
import { converter } from '../data-entities/Data';

interface Props {
    label: string;
    value: number;
    currencies: ConvertCurrency[];
}

export const InputField: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  const [convert, SetConvert] = useState({value : 0});

  const changeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      SetConvert({value : parseFloat(e.target.value)});
      converter(e, props.currencies);
    },
    [SetConvert, convert],
  );

  return (
    <div className={classes.footer__cell}>
      <label className={classes.footer__label}>{props.label}</label>
      <input className={classes.footer__input} name={props.label} type="number" value={convert.value} onChange={changeInput}/>
    </div>
  );
});
