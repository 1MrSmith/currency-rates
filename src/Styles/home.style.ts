import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        body: {
            margin: '0 auto',
            width: '1000px',
        },
        search__input: {
            width: '400px',
        },
        search: {
            textAlign: 'center',
        },
    }),
);
