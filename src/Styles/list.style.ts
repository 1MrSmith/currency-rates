import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            listStyleType: 'none',
        },
        list__item_caption: {
            fontWeight: 'bold',
        },
        list__item: {
            fontSize: '18px',
            height: '75px',
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
        },
        list__item_verticalAlign: {
            lineHeight: '75px',
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
        },
        list__item_cell: {
            display: 'inline-block',
            padding: '5px',
            width: '180px',
            textAlign: 'center',
        },
    }),
);
