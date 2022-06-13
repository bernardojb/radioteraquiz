import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Button, Box, createTheme, useMediaQuery, styled, Typography } from '@mui/material'
import { motion } from 'framer-motion';

//Images
import phoneIntro from '../../assets/radio-intro.png'
import iosIcon from '../../assets/ios.svg'
import googleIcon from '../../assets/googlePlay.svg'

import { ToastContainer, toast } from 'react-toastify';


export default function Intro() {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
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
                                <Typography variant='p' sx={{ fontSize: '20px', marginBottom: "25px", color: "white" }}>Oferece em sua mão uma metodologia Gamificada, que traz a união de conhecimento, tecnologia e propósito com questões das principais áreas da Radioterapia.</Typography>
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
                                <a href='https://play.google.com/store/apps/details?id=com.hokup.radioteraquiz' target='_blank' >
                                    <img style={{ width: '100%', maxWidth: '150px', marginRight: '35px' }} src={googleIcon} />
                                </a>
                                <a href='https://apps.apple.com/us/app/radioteraquiz/id1603222290' target='_blank' >
                                    <img style={{ width: '100%', maxWidth: '150px' }} src={iosIcon} />
                                </a>
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
                                    justifyContent: { md: 'flex-end', xs: 'center' },
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
        </>
    );
}
