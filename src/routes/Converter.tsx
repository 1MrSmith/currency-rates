import React, { memo, useCallback, useState } from 'react';
import { useStyles } from '../styles/converter.style';
import { ConvertCurrency } from '../model/ConvertCurrency';

interface Props {
  currency: ConvertCurrency;
}

export const Converter: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  const [convert, SetConvert] = useState();

  const changeInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // SetConvert(convertCurrency(e.target.value, convert));

      SetConvert(props.currency.EUR);
    },
    [SetConvert, convert],
  );

  return (
    <div className={classes.footer}>
      <div className={classes.footer__cell}>
        <label className={classes.footer__label}>BYN</label>
        <input className={classes.footer__input} type="number" pattern="\d+(\.\d{2})?" onKeyDown={changeInput} />
      </div>
      <div className={classes.footer__cell}>
        <label className={classes.footer__label}>USD</label>
        <input className={classes.footer__input} type="number" pattern="\d+(\.\d{2})?" onKeyDown={changeInput} />
      </div>
      <div className={classes.footer__cell}>
        <label className={classes.footer__label}>EUR</label>
        <input className={classes.footer__input} type="number" pattern="\d+(\.\d{2})?" onKeyDown={changeInput} />
      </div>
      <div className={classes.footer__cell}>
        <label className={classes.footer__label}>RUB</label>
        <input className={classes.footer__input} type="number" pattern="\d+(\.\d{2})?" onKeyDown={changeInput} />
      </div>
      <div className={classes.footer__cell}>
        <label className={classes.footer__label}>PLN</label>
        <input className={classes.footer__input} type="number" pattern="\d+(\.\d{2})?" onKeyDown={changeInput} />
      </div>
    </div>
  );
});
