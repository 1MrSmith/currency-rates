import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
    createStyles({
        footer: {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        footer__cell: {
            padding: '1.5vh',
            width: '25vh',
            fontSize: '1.8vh',
            lineHeight: '5vh',
        },
        footer__label: {
            color: 'white',
            marginRight: '0.5vh',
        },
        footer__input: {
            width: '20vh',
            height: '2vh',
        },
    }),
);
