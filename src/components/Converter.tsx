import React, { memo, useCallback, useState } from 'react';
import { useStyles } from '../styles/converter.style';
import { ConvertCurrency } from '../model/ConvertCurrency';
import { InputField } from './InputField';

interface Props {
  currency: ConvertCurrency[];
}

export type UpdateInputParam = React.SyntheticEvent<{ value: string }>;

export const Converter: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      {props.currency.map((item: ConvertCurrency, i: number) => (
            <InputField
              key={i}
              label={item.label}
              value={item.value}
              currencies={props.currency}
            />
          ))}
    </div>
  );
});
