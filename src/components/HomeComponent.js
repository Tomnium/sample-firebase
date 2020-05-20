import React from 'react'
import './HomeComponent.scss'
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const HomeComponent = props => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='card'>
                    <div className='card-title'>
                        Todo List
                    </div>
                    <div className='card-body'>
                        <TodoForm onSubmit={props.addTodo}/>
                        <TodoList todoList={props.todoList}/>
                        {props.isFetching?<div className="lds-dual-ring"/>:null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;