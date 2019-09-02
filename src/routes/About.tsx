import React, { memo } from 'react';
import { useStyles } from '../styles/about.style';

export const About: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <h3>About page!</h3>
      <div className={classes.describe}>
        Data have been received from nbrb.by
      </div>
    </div>
  );
});
