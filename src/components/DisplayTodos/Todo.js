import React from 'react';

const Todo = () => {
    return (
        <div style={styles.container}>
            <input type="checkbox"></input>
            <p>make dinner</p>
            <button>x</button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-evenly"
    }
}

export default Todo;