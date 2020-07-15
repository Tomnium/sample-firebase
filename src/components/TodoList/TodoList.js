import React from 'react'

const TodoList = props => {

    const { todoList } = props;

    return(
        <div className='todo-list w-100'>
            <ul className='list-group'>
                <li className='list-group-item active'>To-dos:</li>
                {
                    todoList.map((item,index)=>{
                        return <li className='list-group-item' key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;