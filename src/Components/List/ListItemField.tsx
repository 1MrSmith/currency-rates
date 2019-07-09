import React, { memo } from 'react';
import clsx from 'clsx';
import { useStyles } from '../../Styles/list.style';
import { Link } from 'react-router-dom';

interface Props {
  curId: number;
  curAbbr: string;
  curScale: number;
  curName: string;
  curOfficialRate: number;
}

export const ListItemField: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  if (props.curAbbr !== 'AUD' && props.curAbbr !== 'NZD') {
    return (
      <li
        className={clsx(classes.list__item, classes.list__item_verticalAlign)}
      >
        <span className={classes.list__item_cell}>
          {' '}
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {props.curId}{' '}
          </Link>
        </span>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {props.curAbbr}
          </Link>
        </span>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {' '}
            {props.curScale}{' '}
          </Link>
        </span>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {' '}
            {props.curName}{' '}
          </Link>
        </span>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {' '}
            {props.curOfficialRate}{' '}
          </Link>
        </span>
      </li>
    );
  } else {
    return (
      <li className={classes.list__item}>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {' '}
            {props.curId}{' '}
          </Link>
        </span>
        <span className={classes.list__item_cell}>
          {' '}
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {props.curAbbr}
          </Link>{' '}
        </span>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {' '}
            {props.curScale}{' '}
          </Link>
        </span>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {' '}
            {props.curName}{' '}
          </Link>
        </span>
        <span className={classes.list__item_cell}>
          <Link to={`/currency/${props.curId}/${props.curAbbr}`}>
            {' '}
            {props.curOfficialRate}{' '}
          </Link>
        </span>
      </li>
    );
  }
});
