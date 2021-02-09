import React from 'react';
import Todo from './Todo'

const DisplayTodos = () => {
    const todos = [
        "make dinner",
        "Trade stock",
        "Take Vitamin",
    ]
    return (
        <div style={styles.container}>
            {todos.map(todoList => 
                <Todo todoList={todoList}/>
            )}
        </div>
    );
};

const styles = {
    container: {
        width : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
}
export default DisplayTodos;
