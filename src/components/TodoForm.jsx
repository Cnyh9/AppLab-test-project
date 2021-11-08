import { Button, TextField, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

export const TodoForm = () => {

    const {formValue, setFormValue, addTodo} = useContext(MyContext)

    return (
        <Box onSubmit={addTodo} component="form" sx={{mt: '30px'}}>
            <TextField 
                label="Write something..."
                variant="outlined"
                fullWidth
                size="small"
                type="search"
                value={formValue}
                onChange={e => setFormValue(e.target.value)}
            />
            <Stack direction="row" justifyContent="flex-end">
                <Button type="submit" variant="contained" sx={{mt: '5px'}}>
                    Add
                </Button>
            </Stack>
        </Box>
    )
}
