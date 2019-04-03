import React from "react";

import AddLi from "../components/AddLi"
import Title from "../components/Title"
import TodoLi from "../components/TodoLi"

class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            text:"",
            todos:[]
        };
        this.handleAddedDataFn = this.handleAddedData.bind(this);
        this.handleRemovedDataFn = this.handleRemovedData.bind(this);

    }
/*    componentWillMount(){
        console.log('componentWillMount');
    }*/
    componentDidMount(){
        //console.log('componentDidMount');

        const text= "to do list";
        const todos=[
            "이것도 해야 되고1",
            "저것도 해야 되고2",
            "그것도 해야 되고3",
            "언제 다 하나"
            ];
        this.setState((prevState)=>{
           return {
               text: text,
               todos:todos
           }
        });
    }
/*    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    componentWillUpdate(){

        console.log('componentWillUpdate');
    }
    componentDidUpdate(){

        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }*/

    handleAddedData(todo){
        this.setState((prevState)=>{
           const todos = prevState.todos;
           todos.push(todo);
           return{
               todos:todos
           };
        });
    }
    handleRemovedData(todo){
        this.setState((prevState)=>{
           const todos = prevState.todos;
           const index = todos.indexOf(todo);
           console.log('index'+index);
           todos.splice(index,1);
           return{
               todos:todos
           }
        });
    }
    render(){
        console.log('render');
        const todoLi=this.state.todos.map((list,idx)=>{
            return (
                <TodoLi list={list} key={"todo" +idx} handleRemovedData={this.handleRemovedDataFn}/>
            );
        });
        return (
            <div className="container">
                <Title text={this.state.text}/>
                <AddLi handleAddedData={this.handleAddedDataFn} />
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export  default Todo;