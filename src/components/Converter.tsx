import React, { memo, useCallback, useState } from 'react';
import { useStyles } from '../styles/converter.style';
import { ConvertCurrency } from '../model/ConvertCurrency';
import { InputField } from './InputField';

interface Props {
  currency: ConvertCurrency[];
}

export const Converter: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  const [convert, SetConvert] = useState();

  const changeInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // SetConvert(convertCurrency(e.target.value, convert));
      // SetConvert(props.currency.EUR);
    },
    [SetConvert, convert],
  );

  return (
    <div className={classes.footer}>
      {(() => {
        const squares = [];

        for (const item of props.currency) {
          squares.push(<InputField label={item.label} />);
        }

        return squares;
      })()}
    </div>
  );
});
