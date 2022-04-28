import React from 'react'
import { Grid, Container, Button, Box } from '@mui/material'

//Images
import radioteraquizLogo from '../../assets/logo-default.svg'
import hokupLogo from '../../assets/logo-inverted.svg'

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear()

    return (
        <Container className='footer' maxWidth='false' sx={{
            backgroundColor: '#F6F7FA',
            padding: '50px 0px',
            display: 'flex',
            justifyContent: 'center'
        }} >
            <Grid container maxWidth={'lg'} className='footer__container'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        marginBottom: { xs: '50px', md: '0px' },
                        order: { xs: '4', sm: '1' }
                    }}>
                    <Box
                        sx={{
                            maxWidth: '250px',
                            width: '100%'
                        }}
                    >
                        <a href='https://radioteraquiz.com.br/'>
                        <img src={radioteraquizLogo} style={{ width: '100%', maxWidth: '200px' }} />
                        </a>
                        <p>© {year} - Radioteraquiz LTDA</p>
                        <span style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                            <p style={{ fontWeight: 'bold', marginRight: '15px' }}>Powered by</p>
                            <a href='https://hokup.com.br/' target='_blank' style={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                            <img style={{ width: '100%', maxWidth: "90px" }} src={hokupLogo} />
                            </a>
                        </span>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: { xs: '50px', md: '0px' },
                        order: { xs: '1', sm: '2' }
                    }}>
                    <Box sx={{
                        maxWidth: '250px',
                        width: '100%'
                    }}>
                        <p style={{ fontWeight: 'bold', marginTop: '0px' }}>Informações</p>
                        <Box>
                            <a href="#sobre-o-app">
                                <p>Como Funciona</p>
                            </a>
                            <a href='#planos'>
                                <p>Planos</p>
                            </a>
                            <a href='#faq'>
                                <p>FAQ</p>
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: { xs: '50px', md: '0px' },
                        order: { xs: '2', sm: '3' }
                    }}>
                    <Box sx={{
                        maxWidth: '250px',
                        width: '100%'
                    }}>
                        <p style={{ fontWeight: 'bold', marginTop: '0px' }}>Download</p>
                        <Box>
                            <p>Android</p>
                            <p>iOS</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: { xs: '50px', md: '0px' },
                        order: { xs: '3', sm: '4' }
                    }}>
                    <Box sx={{
                        maxWidth: '250px',
                        width: '100%'
                    }}>
                        <p style={{ fontWeight: 'bold', marginTop: '0px' }}>Social Media</p>
                        <Box>
                            <a href='https://www.instagram.com/radioterapedia/' target='_blank'>
                                <p>Instagram</p>
                            </a>
                            <a href="#" target='_blank' >
                            <p>Linkedin</p>
                            </a>
                            <a href="#" target='_blank' >
                            <p>Facebook</p>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
