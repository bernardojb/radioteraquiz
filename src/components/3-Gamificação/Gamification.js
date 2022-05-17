import React from 'react'
import { Grid, Container, Button, Box, Typography } from '@mui/material'
import FeatherIcon from 'feather-icons-react';
import { display } from '@mui/system';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import zIndex from '@mui/material/styles/zIndex';

export default function Gamification() {
    return (
        <Container maxWidth='false' 
        sx={{
            // overflow:'hidden !important',
            overflow:'hidden',
            height:'100% !important',
            paddingTop:'100px',
            paddingBottom:'150px'
        }}>

            <Container maxWidth='lg' className='gamification'
                sx={[{
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    position: 'relative',
                    marginBottom: '200px'
                },
                {
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '110%',
                        height: '100%',
                        backgroundColor: '#F5F7FB',
                        zIndex: '-1',
                        top: '100px',
                        borderRadius: '50px'

                    }
                },
                {
                    '&::before': {
                        content: '" "',
                        width: '100%',
                        height: '80%',
                        position: 'absolute',
                        top: '5%',
                        left: '80%',
                        zIndex: '-2',
                        transform: 'skew(23deg, 0deg) rotate(-10deg)',
                        backgroundPosition: '650px bottom',
                        background: 'radial-gradient(at 0% 60%, rgba(255,166,0,1) 0%, rgba(249,115,22,1) 36%)',
                        borderRadius: '50px',
                        height: '120%'
                    }
                }
                ]}>
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
                        margin: '0px',
                    }}>


                    <Grid item xs={12} sm={6} md={3}>
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
                                hidden: { opacity: 0, y: -50 }
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>+700</h1>
                            <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Perguntas</p>
                        </motion.div>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>

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
                                hidden: { opacity: 0, y: -50 }
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>+650</h1>
                            <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Respostas<br />comentadas</p>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
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
                                hidden: { opacity: 0, y: -50 }
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>3</h1>
                            <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Grandes áreas da Radioterapia</p>
                        </motion.div>
                    </Grid>

                    {/* <Grid item xs={12} sm={6} md={3}>
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
                                        delay: 0.6

                                    }
                                },
                                hidden: { opacity: 0, y: -50 }
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >

                            <h1 style={{ marginBottom: '0px', fontSize: '48px', marginTop: '0px' }}>50</h1>
                            <p style={{ height: '55px', marginTop: '0px', color: '#FF8635', fontSize: '20px' }}>Perguntas novas<br />por mês</p>
                        </motion.div>
                    </Grid> */}

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
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold', marginBottom: '45px' }}>Gamificação que te ajuda a<br /><span style={{ color: '#FF8635' }}>evoluir constantemente.</span></Typography>
                        <Typography variant='p' sx={{ maxWidth: '700px !important' }}>Através de um sistema dinâmico e de fácil usabilidade, o app auxilia a sua jornada de estudos exibindo uma série informações sobre seu progresso!  </Typography>
                    </Grid>
                </Grid>


                <Grid container spacing={4} className='gamification__container' sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    maxWidth: '1200px',
                    marginTop: '50px'
                }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial='hidden'
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                    }
                                },
                                hidden: { opacity: 0, scale: 0 }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0px 3px 15px #1319301A',
                                borderRadius: '20px',
                                padding: '20px',
                                backgroundColor: 'white',
                                minHeight: {md:'325px', sm:'270px', xs:'auto'}
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
                                <p style={{ marginTop: '0px',  }}>O app Radioteraquiz traça médias de acordo com sua usabilidade, informando ao usuário seu desempenho.</p>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial='hidden'
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2
                                    }
                                },
                                hidden: { opacity: 0, scale: 0 }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0px 3px 15px #1319301A',
                                borderRadius: '20px',
                                padding: '20px',
                                backgroundColor: 'white',
                                minHeight: {md:'325px', sm:'270px', xs:'auto'}
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
                                <p style={{ marginTop: '0px',  }}>Uma forma descontraída que incentiva o aluno a superar seus prórios limites, acelerando o processo de aprendizagem.</p>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial='hidden'
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.4
                                    }
                                },
                                hidden: { opacity: 0, scale: 0 }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0px 3px 15px #1319301A',
                                borderRadius: '20px',
                                padding: '20px',
                                backgroundColor: 'white',
                                minHeight: {md:'325px', sm:'270px', xs:'auto'}
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
                                <p style={{ marginTop: '0px',  }}>O app também informa o número total de perguntas respondidas, auxiliando o usuário a bater suas metas de estudo.</p>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial='hidden'
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.6
                                    }
                                },
                                hidden: { opacity: 0, scale: 0 }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0px 3px 15px #1319301A',
                                borderRadius: '20px',
                                padding: '20px',
                                backgroundColor: 'white',
                                minHeight: {md:'325px', sm:'270px', xs:'auto'}
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
                                <p style={{ marginTop: '0px',  }}>Saiba a média do tempo investido em seus estudos, mas também não se esqueça de fazer uma pausa para tomar um cafézinho.</p>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Container >
    )
}
