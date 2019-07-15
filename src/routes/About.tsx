import React, { memo } from 'react';
import { useStyles } from '../styles/about.style';

export const About: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <h3>About page!</h3>
      <div className={classes.describe}>
        It's the test project for understanding react
      </div>
    </div>
  );
});
