import React from 'react'
import { Grid, Container, Button, Box } from '@mui/material'
import FeatherIcon from 'feather-icons-react';
import { display } from '@mui/system';

export default function Gamification() {
    return (
        <Container maxWidth='lg' className='gamification' sx={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Grid container spacing={2} className='gamification__container'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                    maxWidth: '1200px',
                    boxShadow: '0px 3px 15px #1319301A',
                    borderRadius: '40px',
                    padding: '25px 0px',
                    backgroundColor: 'white',
                    margin: '0px'
                }}>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                    <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>+700</h1>
                    <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Perguntas</p>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                    <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>+650</h1>
                    <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Respostas<br />comentadas</p>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                    <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>3</h1>
                    <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Temas únicos</p>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                    <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>50</h1>
                    <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Perguntas novas<br />por mês</p>
                </Grid>
            </Grid>


            <Grid container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '100px'
            }}>
                <Grid item sx={{
                    textAlign: 'center'
                }}>
                    <h1 style={{ fontSize: "36px" }}>Gamificação que te ajuda a<br /><span style={{ color: '#FF8635' }}>evoluir constantemente.</span></h1>
                    <p style={{ fontSize: "20px" }}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt.<br /> Consectetur sed do eiusmod tempor incididunt adipisicing eiusmod tempor incididunt elit.</p>
                </Grid>
            </Grid>


            <Grid container spacing={2} className='gamification__container' sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                maxWidth: '1200px',
                marginTop: '50px'
            }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0px 3px 15px #1319301A',
                        borderRadius: '20px',
                        padding: '20px',
                        backgroundColor: 'white'
                    }}>
                        <Box sx={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: "#FFF9EF",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FeatherIcon icon='check-circle' style={{ color: '#FFA929' }} />
                        </Box>
                        <p style={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '20px' }}>Percentual de acerto</p>
                        <p style={{ marginTop: '0px', maxWidth: '190px' }}>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0px 3px 15px #1319301A',
                        borderRadius: '20px',
                        padding: '20px',
                        backgroundColor: 'white'
                    }}>
                        <Box sx={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: "#FFF9EF",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FeatherIcon icon='bar-chart' style={{ color: '#FFA929' }} />
                        </Box>
                        <p style={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '20px' }}>Acertos em sequência</p>
                        <p style={{ marginTop: '0px', maxWidth: '190px' }}>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0px 3px 15px #1319301A',
                        borderRadius: '20px',
                        padding: '20px',
                        backgroundColor: 'white'
                    }}>
                        <Box sx={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: "#FFF9EF",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FeatherIcon icon='book-open' style={{ color: '#FFA929' }} />
                        </Box>
                        <p style={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '20px' }}>Perguntas respondidas</p>
                        <p style={{ marginTop: '0px', maxWidth: '190px' }}>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0px 3px 15px #1319301A',
                        borderRadius: '20px',
                        padding: '20px',
                        backgroundColor: 'white'
                    }}>
                        <Box sx={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: "#FFF9EF",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FeatherIcon icon='activity' style={{ color: '#FFA929' }} />
                        </Box>
                        <p style={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '20px' }}>Tempo médio<br />de estudo</p>
                        <p style={{ marginTop: '0px', maxWidth: '190px' }}>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </Box>
                </Grid>
            </Grid>

        </Container >
    )
}
