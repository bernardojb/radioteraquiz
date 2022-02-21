import { Grid, Container, Button, Box } from '@mui/material'
import React from 'react'
import FeatherIcon from 'feather-icons-react'

export default function Planos() {
    return (
        <Container maxWidth='lg' className='planos' id='planos'>
            <Grid container spacing={2} className='planos__container'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: '120px'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <p style={{ color: '#FF8635', fontWeight: 'bold', fontSize: '24px' }}>Radioteraquiz</p>
                    <h1 style={{ marginTop: '0px', fontSize: '48px' }}>Nossos planos</h1>
                    <p style={{ marginTop: '0px', fontSize: '20px' }}>Escolha seu plano e aproveite agora mesmo nossos benefícios!</p>
                </Box>
            </Grid>
            <Grid container
                spacing={5}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '25px'
                }}
            >
                <Grid item>
                    <Box sx={{
                        boxShadow: '0px 3px 15px #1319301A',
                        borderRadius: '20px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Box
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
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
                                <FeatherIcon icon='chevrons-up' style={{ color: '#FFA929' }} />
                            </Box>
                            <p style={{ color: '#FF8635', fontWeight: 'bold', fontSize: '30px' }}>Assinatura Anual</p>
                            <h1 style={{ fontSize: '36px', marginTop: '0px' }}>R$<span style={{ fontSize: '48px' }}>39,00</span><span style={{ fontSize: '16px', color: '#718096' }}>/mês</span></h1>
                            <p>Aproveite 100% da nossa plataforma</p>
                        </Box>
                        <Box sx={{
                            marginBottom: '30px'
                        }}>
                            <ul>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                            </ul>
                        </Box>
                        <Button className='btn-styled' className='btn-styled' style={{ width: '100%', maxWidth: '230px', margin: '0 auto' }}>
                            Eu quero!
                        </Button>
                    </Box>
                </Grid>

                <Grid item
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Box sx={{
                        boxShadow: '0px 3px 15px #1319301A',
                        borderRadius: '20px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Box
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
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
                                <FeatherIcon icon='chevron-up' style={{ color: '#FFA929' }} />
                            </Box>
                            <p style={{ color: '#FF8635', fontWeight: 'bold', fontSize: '30px' }}>Assinatura Mensal</p>
                            <h1 style={{ fontSize: '36px', marginTop: '0px' }}>R$<span style={{ fontSize: '48px' }}>49,00</span><span style={{ fontSize: '16px', color: '#718096' }}>/mês</span></h1>                            <p>Aproveite 100% da nossa plataforma</p>
                        </Box>
                        <Box sx={{
                            marginBottom: '30px'
                        }}>
                            <ul>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                                <li>XYZ Benefício</li>
                            </ul>
                        </Box>
                        <Button className='btn-styled' style={{ width: '100%', maxWidth: '230px', margin: '0 auto' }}>
                            Eu quero!
                        </Button>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}
