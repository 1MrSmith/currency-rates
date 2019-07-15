import React, { memo } from 'react';
import { useStyles } from '../styles/converter.style';

interface Props {
    label: string;
}

export const InputField: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.footer__cell}>
      <label className={classes.footer__label}>{props.label}</label>
      <input className={classes.footer__input} type="number" pattern="\d+(\.\d{2})?"/>
    </div>
  );
});
