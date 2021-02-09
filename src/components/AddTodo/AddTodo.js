import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const AddTodo = () => {
    return (
        <div style={styles.container}>
           <TextField
            id="standard-full-width"
            placeholder="Add your task here"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <div style={styles.containerBtn}>
                <Button variant="contained" style={styles.btnAdd} component="span">
                    Add
                </Button>
                <IconButton style={styles.icon} aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "70%"
    },
    containerBtn:{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    btnAdd: {
        width: "50px",
        height: "35px",
        backgroundColor: "#ffffff",
        textTransform: "capitalize"
    }
}

export default AddTodo;
