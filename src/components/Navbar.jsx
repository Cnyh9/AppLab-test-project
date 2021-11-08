import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        App Lab Project
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
