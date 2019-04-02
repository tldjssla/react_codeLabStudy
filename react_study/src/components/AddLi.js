import React from "react";

class AddLi extends React.Component{
    constructor(){
        super();
    }

    render(){

        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요" />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">등록1</button>
                </span>
            </div>
        );
    }
}

export default AddLi;