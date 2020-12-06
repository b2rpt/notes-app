import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root ': {
            marginTop: theme.spacing(2),
            width: '100%',
        },
    },
}));

export default function Form(props) {
    const { children , ...other} = props;
    const classes = useStyle()
    return (
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    );
};