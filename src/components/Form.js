import React from "react";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
}));

const Form = ({ children, ...props }) => {
    const styles = useStyles();
    return (
        <forms className={styles.root} noValidate {...props}>
            {children}
        </forms>
    );
};

export default Form;
