import React from 'react';
import Todo from './Todo'

const DisplayTodos = ({todoList}) => {
    const todos = [
        "make dinner",
        "Trade stock",
        "Take Vitamin",
    ]
    return (
        <div style={styles.container}>
            {todoList.map(todo => 
                <Todo todo={todo}/>
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
