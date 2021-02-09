import React from 'react';
import Todo from './Todo'

const DisplayTodos = () => {
    return (
        <div style={styles.container}>
            <Todo/>
        </div>
    );
};

const styles = {
    container: {
        width : "100%",
        display: "flex",
        justifyContent: "space-between"
    }
}
export default DisplayTodos;
