import React from 'react';
import { Grid, Container, Button, Box } from '@mui/material'

//Images
import uiComoFunciona from '../../assets/img-02.1.png'


export default function CF() {

    return (
        <Container maxWidth='lg' className='comoFunciona' id='sobre-o-app' sx={{
            paddingTop: { xs: '50px', md: '150px' },
            paddingBottom: { xs: '50px', md: '150px' },
        }}>
            <Grid container spacing={2} className='comoFunciona__container'>
                <Grid item md={6} className='comoFunciona__image' sx={{ order: { md: '1', xs: '2' } }}>
                    <img src={uiComoFunciona} />
                </Grid>
                <Grid item md={6} className='comoFunciona__text' sx={{ order: { md: '2', xs: '1' } }}>
                    <Box>
                        <p style={{ fontSize: '24px', color: '#FF8635', fontWeight: 'bold' }}>Como funciona</p>
                        <h1 style={{ fontSize: '36px' }}>O app Radioteraquiz</h1>
                        <p style={{ fontSize: '20px' }}>A proposta do aplicativo, é a liberdade ao usuário para criação de estudo personalizado que acontece em 3 passos:</p>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}>
                            <Box sx={{
                                boxSizing: 'border-box',
                                margin: '0px 2rem 0px 0px',
                                minWidth: '0px',
                                position: 'relative',
                                flexShrink: '0',
                            }}>
                                <Box
                                    sx={{
                                        boxSizing: 'border-box',
                                        margin: '0px',
                                        minWidth: '0px',
                                        lineHeight: '1.55',
                                        display: 'block',
                                        textDecoration: 'none',
                                        fontSize: '1.5rem',
                                        fontWeight: 'normal',
                                        borderRadius: '9999px',
                                        width: '48px',
                                        height: '48px',
                                        textAlign: 'center',
                                        padding: '0.5rem',
                                        backgroundColor: '#0A105F',
                                        color: 'white'
                                    }}>
                                    <span style={{ fontSize: '24px' }}>1</span>
                                    <span style={{
                                        boxSizing: 'border-box',
                                        margin: '0px',
                                        minWidth: '0px',
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '50%',
                                        width: '1px',
                                        height: 'calc(100% - 68px)',
                                        transform: 'translateX(-50%)',
                                        zIndex: '1',
                                        backgroundColor: '#a0aec0'
                                    }} />
                                </Box>

                            </Box>
                            <Box sx={{
                                maxWidth: '400px'
                            }}>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '0px' }}>Temas e perguntas</p>
                                <p>Selecione quais temas você quer estudar e quantas perguntas você quer adicionar no seu quiz.</p>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}>
                            <Box sx={{
                                boxSizing: 'border-box',
                                margin: '0px 2rem 0px 0px',
                                minWidth: '0px',
                                position: 'relative',
                                flexShrink: '0',
                            }}>
                                <Box
                                    sx={{
                                        boxSizing: 'border-box',
                                        margin: '0px',
                                        minWidth: '0px',
                                        lineHeight: '1.55',
                                        display: 'block',
                                        textDecoration: 'none',
                                        fontSize: '1.5rem',
                                        fontWeight: 'normal',
                                        borderRadius: '9999px',
                                        width: '48px',
                                        height: '48px',
                                        textAlign: 'center',
                                        padding: '0.5rem',
                                        backgroundColor: '#0A105F',
                                        color: 'white'
                                    }}>
                                    <span style={{ fontSize: '24px' }}>2</span>
                                    <span style={{
                                        boxSizing: 'border-box',
                                        margin: '0px',
                                        minWidth: '0px',
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '50%',
                                        width: '1px',
                                        height: 'calc(100% - 68px)',
                                        transform: 'translateX(-50%)',
                                        zIndex: '1',
                                        backgroundColor: '#a0aec0'
                                    }} />
                                </Box>

                            </Box>
                            <Box sx={{
                                maxWidth: '400px'
                            }}>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '0px' }}>Dificuldade</p>
                                <p>Escolha qual a dificuldade das perguntas que você quer estudar: Fácil, médio ou difícil.</p>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}>
                            <Box sx={{
                                boxSizing: 'border-box',
                                margin: '0px 2rem 0px 0px',
                                minWidth: '0px',
                                position: 'relative',
                                flexShrink: '0',
                            }}>
                                <Box
                                    sx={{
                                        boxSizing: 'border-box',
                                        margin: '0px',
                                        minWidth: '0px',
                                        lineHeight: '1.55',
                                        display: 'block',
                                        textDecoration: 'none',
                                        fontSize: '1.5rem',
                                        fontWeight: 'normal',
                                        borderRadius: '9999px',
                                        width: '48px',
                                        height: '48px',
                                        textAlign: 'center',
                                        padding: '0.5rem',
                                        backgroundColor: '#0A105F',
                                        color: 'white'
                                    }}>
                                    <span style={{ fontSize: '24px' }}>3</span>
                                </Box>
                            </Box>
                            <Box sx={{
                                maxWidth: '400px'
                            }}>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '0px' }}>Pronto!</p>
                                <p>Agora é só iniciar o quiz e estudar!</p>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
}
