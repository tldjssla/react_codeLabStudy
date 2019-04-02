import React from "react";

const todos =[
    "이것도 해야 되고1",
    "저것도 해야 되고2",
    "그것도 해야 되고3",
    "언제 다 하나"
];


class TodoLi extends React.Component{
    constructor(){
        super();
    }
    render(){

        const todoLi=todos.map((list,idx)=>{
            return (
                <li key={"todo"+idx}>
                    <span>{list}</span>
                    <span className="btn-container"><a href="#">삭제</a></span>
                </li>
            );
         });
        return (
            <div>
                {todoLi}
            </div>
        );
    }
}

export default TodoLi;