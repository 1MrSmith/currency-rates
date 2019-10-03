import {
    Theme,
    makeStyles,
    createStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        body: {
            margin: '0 auto',
            width: '105vh',
        },
        title: {
            fontSize: '3vh',
            fontWeight: 'bold',
        },
        search__input: {
            width: '43vh',
        },
        search: {
            height: '5vh',
            textAlign: 'center',
        },
    }),
);
