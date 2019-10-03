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
        describe: {
            textAlign: 'center',
            fontSize: '2.5vh',
        },
    }),
);
