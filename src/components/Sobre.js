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
import { textAlign } from '@mui/system'

export default function Sobre(props) {
    return (
        <>
            <Box sx={{
                marginBottom: '50px'
            }}>
                {props.number != "" ? (
                    <Typography variant='h5' sx={{ fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '35px' }}>
                        <span style={{ color: '#FF8635', marginRight: '75px' }}>{props.number}</span>{props.title}
                    </Typography>
                ) :
                    <Typography variant='h5' sx={{ fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '35px' }}>
                        {props.title}
                    </Typography>
                }

                <Typography variant='h6'
                    sx={{
                        color: '#718096',
                        textAlign: 'justify'
                    }}
                >
                    {props.text}
                </Typography>
            </Box>
        </>
    )
}
