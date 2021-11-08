import { Checkbox, IconButton, Input, ListItem, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

export const TodoItem = ({todo}) => {

    const {
        todoComplete, 
        deleteTodo,
        edit,
        editTodo,
        saveTodo,
        value,
        setValue
    } = useContext(MyContext)

    return (
        <ListItem >
            <Stack 
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{width: '100%'}}
            >
                <Checkbox 
                    sx={{width: '5%'}}
                    size="small"
                    checked={todo.completed} 
                    onChange={() => todoComplete(todo.id)}
                />
                <div style={{width: '80%'}}>
                {edit === todo.id
                ?
                <Input
                    fullWidth
                    disableUnderline
                    autoFocus
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                :
                <>
                <Typography 
                    className={todo.completed && 'done'} 
                    sx={{fontSize: '16px', overflow: 'hidden', width: '100%'}}
                    component="p"
                >
                    {todo.text}
                </Typography>
                <Typography 
                    className={todo.completed && 'date'}
                    sx={{fontSize: '14px'}}
                    component="div"
                >
                    {todo.date}
                </Typography>
                </>
                }
                </div>
                <Stack direction="row" className="edit-tools">
                    {edit === todo.id
                    ?
                    <IconButton 
                        onClick={() => saveTodo(todo.id, todo.text)}
                        size="small"
                    >
                        <CheckIcon fontSize="small"/>
                    </IconButton>
                    :
                    <IconButton 
                        onClick={() => editTodo(todo.id, todo.text)}
                        size="small"
                    >
                        <EditIcon fontSize="small"/>
                    </IconButton>
                    }
                    <IconButton size="small" onClick={() => deleteTodo(todo.id)}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </Stack>
            </Stack>
        </ListItem>
    )
}
