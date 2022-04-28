import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { motion } from "framer-motion"

///MUI
import {
    Grid,
    Container,
    Button,
    Box,
    Typography,
    styled,
    createTheme,
    ThemeProvider,
    Input,
    TextField,
    InputAdornment,
    Modal,
    TextareaAutosize
} from '@mui/material'

//Icons
import FeatherIcon from 'feather-icons-react'
import { AccountCircle } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

//Assets
import logoDefault from '../../assets/logo-default.svg';
import logoWhite from '../../assets/logo-white.svg'

import modalPhone from '../../assets/radio-intro.png'
import modalContact from '../../assets/img-03.png'
import iosIcon from '../../assets/ios.svg'
import googleIcon from '../../assets/googlePlay.svg'
import emailjs from 'emailjs-com'
import MenuIcon from '@mui/icons-material/Menu';
import { height } from '@mui/system';

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: #000000BF;
`;

const contatoTheme = createTheme();

contatoTheme.typography.subtitle1 = {
    fontSize: '1rem',
    fontWeight: 'bold',
    '@media (min-width:600px)': {
        fontSize: '1.1rem',
    },
    [contatoTheme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
};

export default function Header(e) {

    //Header sticky
    const [isSticky, setIsSticky] = useState()
    window.addEventListener('scroll', function () {
        var value = window.scrollY;
        var innerWidth = window.innerWidth
        if (value > 120 || innerWidth < 900) {
            document.querySelector('.header').classList.add('sticky')
            setIsSticky(true)
        } else {
            document.querySelector('.header').classList.remove('sticky')
            setIsSticky(false)
        }
    });

    //Emailjs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('emailMessage', 'template_j58aq2e', form.current, 'user_RcZXxALTePHJXYxrX0PcV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    //Header
    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }),
                    document.querySelector('.header').classList.add('sticky'),
                    setIsSticky(true))
                : setState((prevState) => ({ ...prevState, mobileView: false }),
                    document.querySelector('.header').classList.remove('sticky'),
                    setIsSticky(false));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    //Modal
    const [open, setOpenDownload] = useState(false);
    const handleOpenDownload = () => {
        setOpenDownload(true);
        setOpenHeader(openHeader ? false : true)
    }
    const handleCloseDownload = () => setOpenDownload(false);

    const [openContato, setOpenContato] = useState(false);
    const handleOpenContato = () => {
        setOpenContato(true);
        setOpenHeader(openHeader ? false : true)
    }
    const handleCloseContato = () => setOpenContato(false);

    const [isContact, setIsContact] = useState(true)
    const handleIsContact = () => setIsContact(true)
    const handleIsMessage = () => setIsContact(false)

    const [openHeader, setOpenHeader] = useState(false)
    const handleHeaderOpen = () => {
        setOpenHeader(openHeader ? false : true)
    }

    return (
        <Container className='header' maxWidth='false' >
            <Grid className='header__container' maxWidth='lg' container spacing={0} >
                <Grid className='header__logo' item >
                    {isSticky ?
                        (
                            <img src={logoDefault} />
                        ) :
                        (
                            <img src={logoWhite} />
                        )}
                </Grid>

                {mobileView ? (
                    <>
                        <Grid className='header__downloadBtn'>
                            <Button onClick={handleHeaderOpen}>
                                <MenuIcon sx={{ color: '#2d3748', fontSize: '35px' }} />
                            </Button>
                        </Grid>
                        {openHeader ? (
                            <Grid className='header--mobile'>
                                <a href="#sobre-o-app" onClick={handleHeaderOpen}>Sobre o app</a>
                                {/* <a href='#planos' onClick={handleHeaderOpen}>Planos</a> */}
                                <Link to="" onClick={handleOpenContato}>Contato</Link>
                                <Link to="" onClick={handleOpenDownload}>Download</Link>
                            </Grid>) :
                            (null)}

                    </>
                ) : (
                    <>
                        <Grid className='header__navLinks' item >
                            <a className='header__navlink' href='#sobre-o-app'>Sobre o app</a>
                            {/* <a className='header__navlink' href='#planos'>Planos</a> */}
                            <Link className='header__navlink' to="" onClick={handleOpenContato}>Contato</Link>
                        </Grid>
                        <Grid className='header__downloadBtn'>
                            <Button onClick={handleOpenDownload} className='btn-styled' style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                Download
                            </Button>
                        </Grid>
                    </>
                )}

            </Grid>


            {/* MODAL DOWNLOAD */}
            <Modal
                open={open}
                onClose={handleCloseDownload}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropComponent={Backdrop}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid container
                    sx={{
                        backgroundColor: "white",
                        width: '100%',
                        maxWidth: '1000px',
                        height: '80%',
                        display: 'flex',
                        margin: '10% 10%',
                        borderRadius: '13px'
                    }}
                >
                    <Grid item md={6} xs={12}
                        sx={{
                            background: 'radial-gradient(at 50% 50%, rgba(255,166,0,1) 0%, rgba(249,115,22,1) 80%)',
                            borderTopLeftRadius: '13px',
                            borderTopRightRadius: { md: '0px', xs: '13px' },
                            borderBottomLeftRadius: { md: '13px', xs: '0px' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            position: 'relative',
                            minHeight: '200px'
                        }}>
                        <img
                            className='download__img'
                            src={modalPhone} />
                    </Grid>

                    <Grid item md={6} xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderTopRightRadius: { md: '13px', xs: '0px' },
                            borderBottomRightRadius: '13px',
                            borderBottomLeftRadius: { md: '0px', xs: '13px' },
                            // overflow: 'scroll !important',
                            height: '100% !important',
                            maxHeight: { md: 'unset !important', xs: '350px' }
                        }}
                    >
                        <Typography variant='h4' sx={{
                            textAlign: "center",
                            fontWeight: 'bold',
                            margin: 'unset !important',
                            marginTop: { xs: '50px', md: '0px' },
                            marginBottom: { xs: '15px !important', md: '65px !important' }
                        }}>
                            Baixe agora o<br />app Radioteraquiz!
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: { md: 'flex-start', xs: 'center' },
                            maxWidth: '270px'
                        }}>
                            <Typography variant='p'
                                sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '10px',
                                    textAlign: { md: 'start', xs: 'center' },

                                }}>Inscreva-se gratuitamente!</Typography>
                            <Typography variant='p'
                                sx={{
                                    color: '#718096',
                                    textAlign: { md: 'start', xs: 'center' },
                                }}>Faça o cadastro no app e começe agora sua jornada de estudos com o Radioteraquiz!</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { sm: 'row', xs: 'column' },
                            justifyContent: { sm: 'space-between', xs: 'center' },
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '270px',
                            marginTop: { md: "50px", xs: '15px' }
                        }}>
                            <img style={{ width: '100%', maxWidth: '125px', marginBottom: '20px' }} src={googleIcon} />
                            <img style={{ width: '100%', maxWidth: '125px', marginBottom: '20px' }} src={iosIcon} />
                        </Box>
                    </Grid>
                </Grid>
            </Modal>


            {/* NEW MODAL CONTATO */}
            <Modal
                open={openContato}
                onClose={handleCloseContato}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropComponent={Backdrop}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid container
                    sx={{
                        backgroundColor: "white",
                        width: '100%',
                        maxWidth: '1000px',
                        height: '80%',
                        display: 'flex',
                        margin: '10% 10%',
                        borderRadius: '13px',
                    }}
                >
                    <Grid item md={6} xs={12}
                        sx={{
                            // background: 'radial-gradient(at 50% 50%, rgba(255,166,0,1) 0%, rgba(249,115,22,1) 80%)',
                            borderTopLeftRadius: '13px',
                            borderTopRightRadius: { md: '0px', xs: '13px' },
                            borderBottomLeftRadius: { md: '13px', xs: '0px' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            position: 'relative',
                            minHeight: '200px',
                            maxHeight:{xs:'200px', md:'none'}
                        }}>
                        <img
                            className='contact__img'
                            style={{
                                width:'100% !important',
                                top:'0px'
                            }}
                            src={modalContact}

                        />
                    </Grid>

                    <Grid item md={6} xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            backgroundColor: 'white',
                            borderTopRightRadius: { md: '13px', xs: '0px' },
                            borderBottomRightRadius: '13px',
                            borderBottomLeftRadius: { md: '0px', xs: '13px' },
                            overflowY: {xs:'scroll !important', md:'hidden !important'},
                            height: '100% !important',
                            maxHeight: { md: 'unset !important', xs: '350px' }
                        }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginTop: '25px',

                        }}>
                            <ThemeProvider theme={contatoTheme} >
                                <a onClick={handleIsContact} style={{ padding: '0px 25px' }} className={`contact__underline ${isContact ? ('active') : (null)}`}>
                                    <Typography variant='subtitle1'>
                                        Mensagem
                                    </Typography>
                                </a>
                            </ThemeProvider>
                            <ThemeProvider theme={contatoTheme}>
                                <a onClick={handleIsMessage} style={{ padding: '0px 25px' }} className={`contact__underline ${!isContact ? ('active') : (null)}`}>
                                    <Typography variant='subtitle1'>
                                        Contato
                                    </Typography>
                                </a>
                            </ThemeProvider>
                        </Box>
                        {isContact ? (
                            <Box 
                            sx={{
                                display:'flex',
                                flexDirection:'column'
                        }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: '270px',
                                    textAlign: 'center',
                                    margin: '25px auto',

                                }}>
                                    <h1 style={{ marginBottom: '25px' }}>Fale Conosco</h1>
                                    <p style={{ maxWidth: '270px', marginTop: '0px', margin:'0px 10px' }}>Está precisando de ajuda? Responderemos o seu contato o mais breve possível!</p>
                                </Box>
                                <Box
                                    ref={form}
                                    onSubmit={sendEmail}
                                    component='form'
                                    noValidate
                                    autoComplete='off'
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: '25px'
                                    }}
                                >
                                    <TextField
                                        name='name'
                                        className='contact__input'
                                        required
                                        // id="outlined-required"
                                        placeholder='Seu Nome'
                                        variant='filled'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FeatherIcon icon='user' style={{ color: '#FFA929' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                    <TextField
                                        name='email'
                                        className='contact__input'
                                        required
                                        // id="outlined-required"
                                        placeholder='Seu email'
                                        variant='filled'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FeatherIcon icon='mail' style={{ color: '#FFA929' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                    <TextField
                                        name='subject'
                                        className='contact__input'
                                        required
                                        // id="outlined-required"
                                        placeholder='Assunto'
                                        variant='filled'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FeatherIcon icon='message-circle' style={{ color: '#FFA929' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                    <TextareaAutosize
                                        name='message'
                                        className='contact__textarea'
                                        minRows={3}
                                        placeholder="Sua Mensagem"
                                        style={{ width: '80%', marginBottom: '20px' }}
                                    />
                                    <Button type='submit' className='btn-styled' style={{ width: '100%', maxWidth: '200px' }}> Enviar </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{
                                display:'flex',
                                flexDirection:"column"
                            }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        maxWidth: '270px',
                                        textAlign: 'center',
                                        margin: '25px auto',
                                        height:'100%'
                                    }}
                                >
                                    <Typography variant='h3' sx={{ marginBottom: "25px", fontWeight:'bold', marginTop:'25px' }}>
                                        Informações <br /> de contato
                                    </Typography>
                                    <p style={{ marginTop: '0px', margin:'0px 10px' }}>
                                        Você pode entrar em contato conosco através dos endereços abaixo!
                                    </p>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '0 auto',
                                    maxWidth: '300px',
                                    justifyContent:'flex-start'
                                }}>
                                    <a href='mailto:contato@radioteraquiz.com.br' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', marginBottom: '25px' }}>
                                        <MailOutlineIcon sx={{ color: '#FF8635' }} />
                                        <Typography variant='p' sx={{ margin: '0px', marginLeft: '15px', fontWeight: 'bold', color: '#2D3748', overflowWrap:'break-word'  }}>
                                            contato@radioteraquiz.com.br
                                        </Typography>
                                    </a>
                                    <a href='mailto:contato@radioteraquiz.com.br' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', marginBottom: '25px' }}>
                                        <InstagramIcon sx={{ color: '#FF8635' }} />
                                        <Typography variant='p' sx={{ margin: '0px', marginLeft: '15px', fontWeight: 'bold', color: '#2D3748' }}>
                                            @radioteraquiz
                                        </Typography>
                                    </a>
                                    <a href='mailto:contato@radioteraquiz.com.br' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', marginBottom: '25px' }}>
                                        <LinkedInIcon sx={{ color: '#FF8635' }} />
                                        <Typography variant='p' sx={{ margin: '0px', marginLeft: '15px', fontWeight: 'bold', color: '#2D3748' }}>
                                            Radioteraquiz
                                        </Typography>
                                    </a>

                                </Box>
                            </Box>
                        )}
                    </Grid>

                    {/* <Grid item md={6} xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderTopRightRadius: { md: '13px', xs: '0px' },
                            borderBottomRightRadius: '13px',
                            borderBottomLeftRadius: { md: '0px', xs: '13px' },
                            // overflow: 'scroll !important',
                            height: '100% !important',
                            maxHeight: { md: 'unset !important', xs: '350px' }
                        }}
                    >
                        <Typography variant='h4' sx={{
                            textAlign: "center",
                            fontWeight: 'bold',
                            margin: 'unset !important',
                            marginTop: { xs: '50px', md: '0px' },
                            marginBottom: { xs: '15px !important', md: '65px !important' }
                        }}>
                            Baixe agora o<br />app Radioteraquiz!
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: { md: 'flex-start', xs: 'center' },
                            maxWidth: '270px'
                        }}>
                            <Typography variant='p'
                                sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '10px',
                                    textAlign: { md: 'start', xs: 'center' },

                                }}>Inscreva-se gratuitamente!</Typography>
                            <Typography variant='p'
                                sx={{
                                    color: '#718096',
                                    textAlign: { md: 'start', xs: 'center' },
                                }}>Faça o cadastro no app e começe agora sua jornada de estudos com o Radioteraquiz!</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { sm: 'row', xs: 'column' },
                            justifyContent: { sm: 'space-between', xs: 'center' },
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '270px',
                            marginTop: { md: "50px", xs: '15px' }
                        }}>
                            <img style={{ width: '100%', maxWidth: '125px', marginBottom: '20px' }} src={googleIcon} />
                            <img style={{ width: '100%', maxWidth: '125px', marginBottom: '20px' }} src={iosIcon} />
                        </Box>
                    </Grid> */}
                </Grid>
            </Modal>

            {/* MODAL CONTATO */}
            {/* <Modal
                open={openContato}
                onClose={handleCloseContato}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropComponent={Backdrop}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                <Grid container spacing={2} sx={{
                    maxWidth: "1000px",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    maxHeight: '80vh',
                }}>
                    <Grid item lg={6} sx={{
                        paddingTop: '0px !important',
                        paddingLeft: '0px !important'
                    }}>
                        <Box sx={{
                            height: '100%',
                            width: '100%'
                        }}>
                            <img className='img-teste' style={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderTopLeftRadius: '13px',
                                borderBottomLeftRadius: '13px',
                            }}
                                src={modalContact} />
                        </Box>
                    </Grid>

                    <Grid
                        className='teste__modal-contato'
                        item lg={6} sx={{
                            maxHeight: '80vh',
                            overflowY: 'scroll',
                        }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: '25px',

                        }}>
                            <ThemeProvider theme={contatoTheme} >
                                <a href='#' onClick={handleIsContact} style={{ padding: '0px 25px' }} className={`contact__underline ${isContact ? ('active') : (null)}`}>
                                    <Typography variant='subtitle1'>
                                        Mensagem
                                    </Typography>
                                </a>
                            </ThemeProvider>
                            <ThemeProvider theme={contatoTheme}>
                                <a href='#' onClick={handleIsMessage} style={{ padding: '0px 25px' }} className={`contact__underline ${!isContact ? ('active') : (null)}`}>
                                    <Typography variant='subtitle1'>
                                        Contato
                                    </Typography>
                                </a>
                            </ThemeProvider>
                        </Box>
                        {isContact ? (
                            <Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: '270px',
                                    textAlign: 'center',
                                    margin: '25px auto',

                                }}>
                                    <h1 style={{ marginBottom: '0px' }}>Fale Conosco</h1>
                                    <p style={{ maxWidth: '270px', marginTop: '0px' }}>Está precisando de ajuda? Responderemos o seu contato o mais breve possível!</p>
                                </Box>
                                <Box
                                    ref={form}
                                    onSubmit={sendEmail}
                                    component='form'
                                    noValidate
                                    autoComplete='off'
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: '25px'
                                    }}
                                >
                                    <TextField
                                        name='name'
                                        className='contact__input'
                                        required
                                        // id="outlined-required"
                                        placeholder='Seu Nome'
                                        variant='filled'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FeatherIcon icon='user' style={{ color: '#FFA929' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                    <TextField
                                        name='email'
                                        className='contact__input'
                                        required
                                        // id="outlined-required"
                                        placeholder='Seu email'
                                        variant='filled'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FeatherIcon icon='mail' style={{ color: '#FFA929' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                    <TextField
                                        name='subject'
                                        className='contact__input'
                                        required
                                        // id="outlined-required"
                                        placeholder='Assunto'
                                        variant='filled'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FeatherIcon icon='message-circle' style={{ color: '#FFA929' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                    <TextareaAutosize
                                        name='message'
                                        className='contact__textarea'
                                        minRows={3}
                                        placeholder="Sua Mensagem"
                                        style={{ width: '80%', marginBottom: '20px' }}
                                    />
                                    <Button type='submit' className='btn-styled' style={{ width: '100%', maxWidth: '200px' }}> Enviar </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        maxWidth: '270px',
                                        textAlign: 'center',
                                        margin: '25px auto',
                                    }}
                                >
                                    <h1 style={{ marginBottom: "25px" }}>
                                        Informações <br /> de contato
                                    </h1>
                                    <p style={{ marginTop: '0px' }}>
                                        Have some feedback for us? Give us a call or send an email.
                                    </p>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '0 auto',
                                    maxWidth: '300px',
                                }}>
                                    <a href='mailto:contato@radioteraquiz.com.br' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', marginBottom: '25px' }}>
                                        <MailOutlineIcon sx={{ color: '#FF8635' }} />
                                        <p style={{ margin: '0px', marginLeft: '15px', fontWeight: 'bold', color: '#2D3748' }}>
                                            contato@radioteraquiz.com.br
                                        </p>
                                    </a>
                                    <a href='mailto:contato@radioteraquiz.com.br' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', marginBottom: '25px' }}>
                                        <InstagramIcon sx={{ color: '#FF8635' }} />
                                        <p style={{ margin: '0px', marginLeft: '15px', fontWeight: 'bold', color: '#2D3748' }}>
                                            @radioteraquiz
                                        </p>
                                    </a>
                                    <a href='mailto:contato@radioteraquiz.com.br' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', marginBottom: '25px' }}>
                                        <LinkedInIcon sx={{ color: '#FF8635' }} />
                                        <p style={{ margin: '0px', marginLeft: '15px', fontWeight: 'bold', color: '#2D3748' }}>
                                            Radioteraquiz
                                        </p>
                                    </a>

                                </Box>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Modal> */}


        </Container >
    );
}
