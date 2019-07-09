import React, { memo } from 'react';
import { Rate } from '../../Model/Rate';
import { ListItemField } from './ListItemField';
import clsx from 'clsx';
import { useStyles } from '../../Styles/list.style';

interface Props {
  items: Rate[];
}

export const ListTo: React.FC<Props> = memo((props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <ul className={classes.list}>
        <li className={clsx(classes.list__item_verticalAlign, classes.list__item_caption)}>
          <span className={classes.list__item_cell}>ID</span>
          <span className={classes.list__item_cell}>Abbreviation</span>
          <span className={classes.list__item_cell}>Scale</span>
          <span className={classes.list__item_cell}>Name</span>
          <span className={classes.list__item_cell}>Official rate</span>
        </li>
        {props.items.map((item: Rate) => (
          <ListItemField
            key={item.Cur_ID}
            curId={item.Cur_ID}
            curAbbr={item.Cur_Abbreviation}
            curScale={item.Cur_Scale}
            curName={item.Cur_Name}
            curOfficialRate={item.Cur_OfficialRate}
          />
        ))}
      </ul>
    </div>
  );
});
