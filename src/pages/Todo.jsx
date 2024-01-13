import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoQuery } from '../store/todoSlice'

export const Todo = () => {
    const dispatch = useDispatch()

    const handlerAddTodo = () => {
        dispatch(todoQuery())
    }

    return (
        <div>
            <div className="container">
                <div className="todo__inner">
                    <h2>Todo</h2>
                    <div className="page__todo">
                        <input type="text" />
                        <input type="text" />
                        <button onClick={handlerAddTodo}>add todo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
