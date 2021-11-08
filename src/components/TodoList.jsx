import { Divider, List, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { TodoItem } from './TodoItem'

export const TodoList = () => {

    const { todos } = useContext(MyContext)

    if (!todos.length) {
        return (
            <Typography variant="h4" component="h2">
                Todo's is empty!
            </Typography>
        )
    }

    return (
        <List>
            {todos.map(todo => {
                return (
                    <>
                        <TodoItem key={todo.id} todo={todo}/>
                        <Divider />
                    </>
                )
            })}
        </List>
    )
}
