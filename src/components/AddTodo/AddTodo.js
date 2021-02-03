import React from 'react';
import TextField from '@material-ui/core/TextField';

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
            <button>Add</button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "80%"
    }
}

export default AddTodo;
