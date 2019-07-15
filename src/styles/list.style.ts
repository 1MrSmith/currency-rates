import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            listStyleType: 'none',
            marginBottom: '9vh',
            marginTop: '2vh',
        },
        list__item_caption: {
            fontWeight: 'bold',
            fontSize: '2vh',
        },
        list__item: {
            fontSize: '1.8vh',
            height: '7.5vh',
            borderTop: '0.1vh solid black',
            borderBottom: '0.1vh solid black',
        },
        list__item_verticalAlign: {
            lineHeight: '7.5vh',
            borderTop: '0.1vh solid black',
            borderBottom: '0.1vh solid black',
        },
        list__item_cell: {
            display: 'inline-block',
            padding: '0.5vh',
            width: '18vh',
            textAlign: 'center',
        },
    }),
);
