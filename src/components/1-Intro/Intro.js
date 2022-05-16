import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Button, Box, createTheme, useMediaQuery, styled, Typography } from '@mui/material'
import { motion } from 'framer-motion';

//Images
import phoneIntro from '../../assets/radio-intro.png'
import iosIcon from '../../assets/ios.svg'
import googleIcon from '../../assets/googlePlay.svg'


export default function Intro() {
return (

        <Container maxWidth='lg' className='intro' sx={{
            paddingTop: { xs: '50px', md: '50px' },
            paddingBottom: { xs: '50px', md: '100px' },
        }}>
            <Grid container spacing={2}>
                <Grid item md={6} className='intro__text'
                    sx={{
                        // paddingLeft: { md: '0px !important' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItem: 'center',
                        flexDirection: 'column'
                    }}>
                    <motion.div
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    opacity: {
                                        duration: 0.5
                                    },
                                    y: {
                                        duration: 0.5
                                    }
                                }
                            },
                            hidden: {
                                opacity: 0,
                                y: -50
                            }
                        }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItem: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItem: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            {/* <IntroText> */}
                            <Typography variant='p' sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: '25px !important' }}>Radioteraquiz</Typography>
                            <Typography variant='h3' sx={{ color: 'white', fontWeight: 'bold', marginBottom: '40px' }}>Um app de estudo personalizado para Radioterapeutas.</Typography>
                            <Typography variant='p' sx={{ fontSize: '20px', marginBottom: "25px", color:"white" }}>O Radioteraquiz traz diversas questões de<br /> diferentes temas para estudo avançado e dinâmico.</Typography>
                            {/* </IntroText> */}
                        </Box>
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={{
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.7,
                                    duration: 0.5
                                }
                            },
                            hidden: { opacity: 0, x: 100 }
                        }}
                    >
                        <Box sx={{ width: '100%' }}>
                            <Link to='/' >
                                <img style={{ width: '100%', maxWidth: '150px', marginRight: '35px' }} src={googleIcon} />
                            </Link>
                            <Link to='/'>
                                <img style={{ width: '100%', maxWidth: '150px' }} src={iosIcon} />
                            </Link>
                        </Box>
                    </motion.div>
                </Grid>
                <Grid item md={6} className='intro__image' sx={{ width: '100%' }} >
                    <motion.div
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={{
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.5
                                }
                            },
                            hidden: { opacity: 0, x: 100 }
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: {md:'flex-end', xs:'center'},
                                alignItems: 'center'
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    maxWidth: '470px'
                                }}
                                src={phoneIntro} />
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>

    );
}
