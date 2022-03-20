import React from "react";
import Classes from "./Classes";
import {Link} from "react-router-dom";
import TodoItem from "./Todo/TodoItem";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";

const Index = () => {
    return (
        <>
            <h1>Labs</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <ReduxExamples/>

            <Link to="/hello">Hello | </Link>
            <Link to="/tuiter/home">Tuiter</Link>
        </>
    )
};

export default Index;
