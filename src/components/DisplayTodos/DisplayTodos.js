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
        display: "flex",
        justifyContent: "space-between"
    }
}
export default DisplayTodos;
