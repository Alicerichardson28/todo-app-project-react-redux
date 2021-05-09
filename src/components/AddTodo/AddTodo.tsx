import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Input } from '@material-ui/core';
import CSS from 'csstype';


interface Props {
    todoList: string[];
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>
}
const AddTodo: React.FC<Props> = ({todoList, setTodoList}) => {
    const [textTodo, setTextTodo] = useState<string>('')

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        setTodoList([...todoList,textTodo])
        // ["make dinner", "make pizza"]
        // ...,["make dinner"]
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target, "handleChange")
        setTextTodo(e.target.value) 
    }
    console.log("textTodo", textTodo )
    console.log("todoList", todoList )
    return (
        <div style={styles.container}>
            <form>
                <Input
                    type="text"
                    value={textTodo}
                    onChange={handleChange}
                    id="standard-full-width"
                    placeholder="Add your task here"
                    fullWidth
                />
                <div style={styles.containerBtn}>
                    <button onClick={handleSubmit}>Add</button>
                    <IconButton aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </div>
            </form>
        </div>
    );
};



const styles: {
    container: CSS.Properties;
    containerBtn: CSS.Properties;
    btnAdd: CSS.Properties;
} = {
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
