import { Container } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { MyModal } from '../components/MyModal'
import { TodoForm } from '../components/TodoForm'
import { TodoHeader } from '../components/TodoHeader'
import { TodoList } from '../components/TodoList'
import { MyContext } from '../context/MyContext'

export const Todo = () => {

    const [todos, setTodos] = useState([])
    const [formValue, setFormValue] = useState('')
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [modalState, setModalState] = useState(false)



    // Изменение чекбокса
    const todoComplete = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    
    // Проверка на дубль 
    const handleSubmit = () => {
        let flag = true
        todos.forEach(todo => {
            if(todo.text.toLowerCase() === formValue.toLowerCase()) {
                flag = false
            }
        })
        return flag
    }

    // Добавление todo
    const addTodo = e => {
        e.preventDefault()
        if(formValue.trim() && handleSubmit()) {
            setTodos([
                ...todos, {
                    id: Date.now(),
                    date: moment().format('MMM D, HH:mm'),
                    text: formValue,
                    completed: false
                }
            ])
            setFormValue('')
        } else {
            setModalState(true)
        }
    }

    // Удаление todo
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // Изменение todo
    const editTodo = (id, text) => {
        setEdit(id)
        setValue(text)
    }

    // Сохранение измененного todo
    const saveTodo = id => {
        let newTodo = [...todos].map(todo => {
            if (todo.id === id) {
                todo.text = value
            }
            return todo
        })
        setTodos(newTodo)
        setEdit(null)
    }

    return (
        <MyContext.Provider value={{
            formValue,
            setFormValue,
            todos,
            setTodos,
            todoComplete,
            addTodo,
            deleteTodo,
            editTodo,
            edit,
            value,
            setValue,
            saveTodo,
            modalState,
            setModalState,
            handleSubmit
        }}>
            <Container maxWidth="md" sx={{marginTop: '30px', marginBottom: '30px'}}>
                <TodoHeader />
                <TodoForm />
                <TodoList />
                <MyModal />
            </Container>
        </MyContext.Provider>
        
    )
}
