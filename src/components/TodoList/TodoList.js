import React from 'react';
import AddTodo from '../AddTodo';
import DisplayTodos from '../DisplayTodos';


const TodoList = () => {
    return (
        <div style={styles.container}>
            <AddTodo/>
            <DisplayTodos/>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        backgroundColor: "yellow",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        backgroundColor: "#BADFF1"
    }
}

export default TodoList;