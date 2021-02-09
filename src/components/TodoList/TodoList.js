import React, { useState} from 'react';
import AddTodo from '../AddTodo';
import DisplayTodos from '../DisplayTodos';


const TodoList = () => {

    const [todoList, setTodoList ] = useState([])
    return (
        <div style={styles.container}>
            <AddTodo todoList={todoList} setTodoList={setTodoList}/>
            <DisplayTodos todoList={todoList}/>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        backgroundColor: "yellow",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        backgroundColor: "#BADFF1"
    }
}

export default TodoList;