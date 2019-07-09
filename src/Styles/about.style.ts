import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        body: {
            margin: '0 auto',
            width: '1000px',
        },
        describe: {
            textAlign: 'center',
            fontSize: '20px',
        },
    }),
);
