import React from "react";

const TodoLi = (props) =>{
    const onClickRemoveButton = ()=>{
        props.handleRemovedData(props.list);
    };
  return (
      <li>
          <span>{props.list}</span>
          <span className="btn-container"><a href="#" onClick={onClickRemoveButton}>삭제</a></span>
      </li>
  );
};

export default TodoLi;