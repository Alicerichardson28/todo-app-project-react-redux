import React from 'react';
import { IoMdTrash, IoMdCreate } from "react-icons/io";


const Todo = () => {
    return (
        <div style={styles.container}>
            <div style={styles.todoList}>
                <input style={styles.checkbox} type="checkbox"></input>
                <p style={styles.listContent}>make dinner</p>
                <div>
                    <IoMdCreate size='24px'/>
                    <IoMdTrash size='24px'/>    
                </div> 
            </div>
            <div style={styles.todoList}>
                <input style={styles.checkbox} type="checkbox"></input>
                <p style={styles.listContent}>Trade stock</p>
                <div>
                    <IoMdCreate size='24px'/>
                    <IoMdTrash size='24px'/>    
                </div> 
            </div>
            <div style={styles.todoList}>
                <input style={styles.checkbox} type="checkbox"></input>
                <p style={styles.listContent}>Take Vitamin</p>
                <div>
                    <IoMdCreate size='24px'/>
                    <IoMdTrash size='24px'/>    
                </div> 
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginTop: "10px",
        marginBottom: "20px"
    },
    todoList: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "130px",
        marginBottom: "10px",
        width: "60%"
    },
    listContent: {
        margin: 0
    },
    checkbox: {
        width: "40px",
        height: "20px"
    }
}

export default Todo;