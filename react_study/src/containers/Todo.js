import React from "react";

import AddLi from "../components/AddLi"
import Title from "../components/Title"
import TodoLi from "../components/TodoLi"

class Todo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="container">
                <Title />
                <AddLi />
                <hr/>
                <ul>
                    <TodoLi/>
                </ul>
            </div>
        );
    }
}

export  default Todo;