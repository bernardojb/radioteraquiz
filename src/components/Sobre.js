import React from 'react'
import {
    Grid,
    Container,
    Button,
    Box,
    Typography,
    styled,
    createTheme,
    ThemeProvider,
    Input,
    TextField,
    InputAdornment,
    Modal,
    TextareaAutosize,
    Snackbar,
    Alert,
    CircularProgress
} from '@mui/material'

export default function Sobre(props) {
    return (
        <>
            <Box sx={{
                marginBottom:'50px'
            }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', textTransform: 'uppercase', marginBottom:'35px' }}>
                    <span style={{ color: '#FF8635', marginRight: '75px' }}>{props.number}</span>{props.title}
                </Typography>
                <Typography variant='h6'
                sx={{
                    color:'#718096'
                }}
                >
                    {props.text}
                </Typography>
            </Box>
        </>
    )
}
