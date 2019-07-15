import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        activeLink: {
            color: 'red',
        },
        menu: {
            marginLeft: '5vh',
            marginTop: '2vh',
            fontSize: '2.5vh',
        },
        menu__item: {
            marginBottom: '1vh',
        },
    }),
);
