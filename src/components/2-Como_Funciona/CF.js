import React from 'react';
import { Grid, Container, Button, Box } from '@mui/material'

//Images
import uiComoFunciona from '../../assets/img-02.1.png'


export default function CF() {

    return (
        <Container maxWidth='lg' className='comoFunciona' sx={{
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
                            <Box>
                                <p style={{ fontSize: '24px' }}>1</p>
                            </Box>
                            <Box>
                                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Temas e perguntas</p>
                                <p>Selecione quais temas você quer estudar e quantas perguntas você quer adicionar no seu quiz.</p>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}>
                            <Box>
                                <p style={{ fontSize: '24px' }}>2</p>
                            </Box>
                            <Box>
                                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Dificuldade</p>
                                <p>Escolha qual a dificuldade das perguntas que você quer estudar: Fácil, médio ou difícil.</p>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}>
                            <Box>
                                <p style={{ fontSize: '24px' }}>3</p>
                            </Box>
                            <Box>
                                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Pronto!</p>
                                <p>Agora é só iniciar o quiz e estudar!</p>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
