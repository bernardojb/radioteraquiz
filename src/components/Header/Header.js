import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
import { AccountCircle } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

//Assets
import logoDefault from '../../assets/logo-default.svg';
import logoWhite from '../../assets/logo-white.svg'

import modalPhone from '../../assets/img-01.png'
import modalContact from '../../assets/img-03.png'
import iosIcon from '../../assets/ios.svg'
import googleIcon from '../../assets/googlePlay.svg'
import emailjs from 'emailjs-com'
import MenuIcon from '@mui/icons-material/Menu';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '1000px',
    height: '100%',
    maxHeight: '750px',
    bgcolor: 'background.paper',
    margin: '25px',
    boxShadow: 24,
    p: 4,
    padding: 0,
    borderRadius: '15px'
};

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
    const handleOpenDownload = () => setOpenDownload(true);
    const handleCloseDownload = () => setOpenDownload(false);

    const [openContato, setOpenContato] = useState(false);
    const handleOpenContato = () => setOpenContato(true);
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
                                <MenuIcon sx={{ color: '#2d3748', fontSize:'35px' }} />
                            </Button>
                        </Grid>
                        {openHeader ? (
                            <Grid className='header--mobile'>
                                <Link to="/">Sobre o app</Link>
                                <Link to="/">Planos</Link>
                                <Link to="" onClick={handleOpenContato}>Contato</Link>
                                <Link to="" onClick={handleOpenDownload}>Download</Link>
                            </Grid>) :
                            (null)}

                    </>
                ) : (
                    <>
                        <Grid className='header__navLinks' item >
                            <Link to="/">Sobre o app</Link>
                            <Link to="/">Planos</Link>
                            <Link to="" onClick={handleOpenContato}>Contato</Link>
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
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item lg={6} sx={{ backgroundColor: '#FF8635', borderTopLeftRadius: '13px', borderBottomLeftRadius: '13px' }}>
                            <Box sx={{
                                position: 'relative',
                            }}>
                                <Box>
                                    <img style={{
                                        width: '100%',
                                        objectFit: 'contain',
                                        overflow: 'hidden',
                                    }}
                                        src={modalPhone} />
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '50px'
                        }}>
                            <h1 style={{ textAlign: "center" }}>Baixe agora o app Radioteraquiz!</h1>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                maxWidth: '270px'
                            }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '0px' }}>Inscreva-se gratuitamente!</p>
                                <p style={{ color: '#718096', marginTop: '15px' }}>Faça o cadastro no app e receba gratuitamente 7 dias para testar!</p>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                maxWidth: '270px'
                            }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '0px' }}>Inscreva-se gratuitamente!</p>
                                <p style={{ color: '#718096', marginTop: '15px' }}>Faça o cadastro no app e receba gratuitamente 7 dias para testar!</p>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '270px',
                                marginTop: "50px"
                            }}>
                                <img style={{ width: '100%', maxWidth: '125px' }} src={googleIcon} />
                                <img style={{ width: '100%', maxWidth: '125px' }} src={iosIcon} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

            {/* MODAL CONTATO */}
            <Modal
                open={openContato}
                onClose={handleCloseContato}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item lg={6}>
                            <Box sx={{
                                position: 'relative',
                            }}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    overflowX: 'hidden',
                                    overflowY: 'hidden',
                                    width: '100%',
                                }}>
                                    <img className='img-teste' style={{
                                        width: 'auto',
                                        height: '750px',
                                        borderTopLeftRadius: '13px',
                                        borderBottomLeftRadius: '13px',
                                        objectFit: 'contain',
                                        left: "-50px"
                                    }}
                                        src={modalContact} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '30px 0px'
                        }}>
                            <Grid container spacing={2} sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Grid item>
                                    <ThemeProvider theme={contatoTheme}>
                                        <a onClick={handleIsContact}>
                                            <Typography variant='subtitle1'>
                                                Mensagem
                                            </Typography>
                                        </a>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item>
                                    <ThemeProvider theme={contatoTheme}>
                                        <a onClick={handleIsMessage}>
                                            <Typography variant='subtitle1'>
                                                Contato
                                            </Typography>
                                        </a>
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                            {/* /////////////////////////////////////////////////////////////// */}
                            {isContact ? (
                                <>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        maxWidth: '270px',
                                        textAlign: 'center'
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
                                            alignItems: 'center'
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
                                                        <AccountCircle />
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
                                                        <AccountCircle />
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
                                                        <AccountCircle />
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
                                </>
                            ) : (
                                <>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            maxWidth: '270px',
                                            textAlign: 'center',
                                            height: '100%',
                                            maxHeight: '750px',
                                            marginBottom: '25px'
                                        }}
                                    >
                                        <h1 style={{ marginBottom: "25px" }}>
                                            Informações <br /> de contato
                                        </h1>
                                        <p style={{ marginTop: '0px' }}>
                                            Have some feedback for us? Give us a call or send an email.
                                        </p>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                </>
                            )}

                            {/* /////////////////////////////////////////////////////////// */}
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Container>
    );
}
