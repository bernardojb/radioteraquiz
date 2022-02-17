import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Button, Box, createTheme, useMediaQuery, styled } from '@mui/material'

//Images
import phoneIntro from '../../assets/img-01.png'
import iosIcon from '../../assets/ios.svg'
import googleIcon from '../../assets/googlePlay.svg'

export default function Intro() {

    const IntroText = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display:'flex',
            textAlign: 'center',
            marginTop: '50px',
            flexDirection:'column'
        },
        [theme.breakpoints.up('md')]: {
            display:'flex',
            textAlign: 'start',
            flexDirection:'column'
        },
    }));

    const IntroIcons = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25px'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
    }));

    const IntroImage = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25px'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
    }));

    return (
        <Container maxWidth='lg' className='intro' sx={{
            paddingTop:{xs:'50px', md:'0px'},
            paddingBottom:{xs:'50px', md:'100px'},
        }}>
            <Grid container spacing={2} className='intro__container'>
                <Grid item md={6} className='intro__text' sx={{paddingLeft:'0px !important'}}>
                    <Box>
                        <IntroText>
                            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Radioteraquiz</p>
                            <h1 style={{ fontSize: '48px', color: 'white' }}>Um app de estudo personalizado para Radioterapeutas.</h1>
                            <p style={{ fontSize: '20px' }}>O Radioteraquiz traz diversas questões de<br /> diferentes temas para estudo avançado e dinâmico.</p>
                        </IntroText>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <IntroIcons>
                            <img style={{ width: '100%', maxWidth: '120px', marginRight: '35px' }} src={googleIcon} />
                            <img style={{ width: '100%', maxWidth: '120px' }} src={iosIcon} />
                        </IntroIcons>
                    </Box>
                </Grid>
                <Grid item md={6} className='intro__image' sx={{ width: '100%' }} >
                    <Box>
                        <IntroImage>
                            <img src={phoneIntro} />
                        </IntroImage>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
}
