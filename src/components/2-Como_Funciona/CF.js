// import React from 'react';
import { Grid, Container, Button, Box, Typography } from '@mui/material'

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

//Images
import uiComoFunciona from '../../assets/img-02.1.png'
import uiComoFunciona2 from '../../assets/img-02.2.png'
import uiComoFunciona3 from '../../assets/img-02.3.png'


export default function CF() {

    return (
        <AnimatePresence>
            <Container maxWidth='lg' className='comoFunciona' id='sobre-o-app' sx={{
                paddingTop: { xs: '50px', md: '250px' },
                paddingBottom: { xs: '50px', md: '250px' },
            }}>
                <Grid container spacing={2} className='comoFunciona__container'>
                    <Grid item md={6} className='comoFunciona__image' sx={{
                        order: { md: '1', xs: '2' },
                        position: 'relative',
                        height: { md: 'auto', xs: '100%' },
                        width: '100%'
                    }}>
                        <Box sx={{
                            display:{md:'block', xs:'none'}
                        }}>
                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5
                                        }
                                    },
                                    hidden: { opacity: 0 }
                                }}
                            >
                                <img src={uiComoFunciona}
                                    style={{
                                        position: 'absolute',
                                        top: '-25px',
                                        left: '-100px'
                                    }} />
                            </motion.div>

                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2
                                        }
                                    },
                                    hidden: { opacity: 0 }
                                }}
                            >
                                <img src={uiComoFunciona2}
                                    style={{
                                        position: 'absolute',
                                        top: '25%',
                                        right: '0'
                                    }} />
                            </motion.div>

                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.4
                                        }
                                    },
                                    hidden: { opacity: 0 }
                                }}
                            >
                                <img src={uiComoFunciona3}
                                    style={{
                                        position: 'absolute',
                                        bottom: '-100px',
                                        left: '-50px'
                                    }} />
                            </motion.div>
                        </Box>
                    </Grid>

                    <Grid item md={6} className='comoFunciona__text' sx={{ order: { md: '2', xs: '1' } }}>
                        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='p' sx={{ color: '#FF8635', fontWeight: 'bold', marginBottom: '20px !important' }}>Como funciona</Typography>
                            <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: '25px' }}>O app Radioteraquiz</Typography>
                            <Typography variant='p' sx={{ marginBottom: '45px' }}>A proposta do aplicativo é dar a liberdade ao usuário para criação de estudo personalizado, que acontece em 3 passos:</Typography>

                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                        }
                                    },
                                    hidden: {
                                        opacity: 0,
                                        y: -100
                                    }
                                }}
                            >
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
                                        <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '0px' }}>Temas e perguntas</p>
                                        <p style={{ marginTop: '10px', marginBottom: '25px' }}>Selecione quais temas você quer estudar e quantas perguntas você quer adicionar no seu quiz.</p>
                                    </Box>
                                </Box>
                            </motion.div>

                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2
                                        }
                                    },
                                    hidden: {
                                        opacity: 0,
                                        y: -100
                                    }
                                }}
                            >
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
                                        <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '0px' }}>Dificuldade</p>
                                        <p style={{ marginTop: '10px', marginBottom: '25px' }}>Escolha qual a dificuldade das perguntas que você quer estudar: Fácil, médio ou difícil.</p>
                                    </Box>
                                </Box>
                            </motion.div>

                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.4
                                        }
                                    },
                                    hidden: {
                                        opacity: 0,
                                        y: -100
                                    }
                                }}
                            >
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
                                        <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '0px' }}>Pronto!</p>
                                        <p style={{ marginTop: '10px', marginBottom: '25px' }}>Agora é só iniciar o quiz e estudar!</p>
                                    </Box>
                                </Box>
                            </motion.div>

                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </AnimatePresence>
    );
}
