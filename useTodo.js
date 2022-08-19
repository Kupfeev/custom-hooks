import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/intro-reducer";

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const todosCount = todos.length;

    const todosPendingCount = todos.filter((todo) => !todo.done).length;

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    
    const onNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        dispatch(action);
    };
    const onDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action);
    };
    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    };

    return {
        todos,
        todosCount,
        todosPendingCount,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo,
    }
}
