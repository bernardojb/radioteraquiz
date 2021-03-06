import React, { useState, useEffect } from 'react'
import { Grid, Container, Button, Box } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import HandleModal from '../1-Intro/TesteModal';

import FeatherIcon from 'feather-icons-react'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const { openModal, modalOpen } = HandleModal()

    return (
        <motion.div
            initial='hidden'
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                    }
                },
                hidden: { opacity: 0, y: 100 }
            }}
        >
            <Container maxWidth='md' className='faq' id='faq'>
                <Grid container spacing={2} className='faq__container'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <Grid item >
                        <Box sx={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* <p>{`TESTE ${modalOpen}`}</p> */}
                            <Typography variant='p' sx={{ fontWeight: 'bold', color: "#FF8635", marginBottom: '20px' }}>Ajuda</Typography>
                            <Typography variant='h3' sx={{ fontWeight: 'bold', marginBottom: '40px' }}>Perguntas frequentes</Typography>
                            <Typography variant='p' sx={{ marginBottom: '40px', color: '#718096' }}>
                                Caso precise de suporte adicional, entre em contato pelo email <a href='mailto:contato@radioteraquiz.com.br' style={{ fontWeight: 'bold', color: "#FF8635", textDecoration: 'underline', cursor: 'pointer' }}> contato@radioteraquiz.com.br</a></Typography>
                        </Box>
                    </Grid>
                    <Grid item >
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='faq__accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color: '#2D3748' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <FeatherIcon icon='shopping-cart' size="24" style={{ color: '#FFA929', padding: '0px 20px' }} />
                                    </Box>
                                    O app possui algum tipo de assinatura paga?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    display: 'flex',
                                    paddingLeft: '40px',
                                    paddingRight: '100px',
                                    paddingBottom: '30px'
                                }}
                            >
                                <Typography sx={{ color: '#718096' }}>
                                    N??o! O app Radioteraquiz ?? uma plataforma completamente gratuita, que tem como objetivo auxiliar os profissionais da Radioterapia, em forma????o ou atualiza????o.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='faq__accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >

                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color: '#2D3748' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <FeatherIcon icon='rotate-cw' size="24" style={{ color: '#FFA929', margin: '0px 20px' }} />
                                    </Box>
                                    Qual a frequ??ncia de atualiza????es dos conte??dos?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    display: 'flex',
                                    paddingLeft: '40px',
                                    paddingRight: '100px',
                                    paddingBottom: '30px'
                                }}
                            >
                                <Typography>
                                    O app conta com um banco de quest??es que estar?? sempre em constante evolu????o, mas n??o possui uma frequ??ncia fixa de atualiza????es. Prezamos pela qualidade e integridade dos conte??dos, n??o pelo volume.
                                </Typography>
                            </AccordionDetails>
                        </Accordion> */}

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='faq__accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header">
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color: '#2D3748' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <FeatherIcon icon='file-plus' size="24" style={{ color: '#FFA929', margin: '0px 20px' }} />
                                    </Box>
                                    Que tipo de conte??dos est??o presentes no app?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    display: 'flex',
                                    paddingLeft: '40px',
                                    paddingRight: '100px',
                                    paddingBottom: '30px'
                                }}
                            >
                                <Typography sx={{ color: '#718096' }}>
                                    O app ?? um assistente de estudos que possui um quiz interativo, com perguntas e respostas justificadas sobre todo universo de Radioterapia. Quest??es das ??ltimas provas de especializa????o, casos e muito mais.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='faq__accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color: '#2D3748' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <FeatherIcon icon='download' size="24" style={{ color: '#FFA929', margin: '0px 20px' }} />
                                    </Box>
                                    Onde eu consigo fazer o download do app?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    display: 'flex',
                                    paddingLeft: '40px',
                                    paddingRight: '100px',
                                    paddingBottom: '30px'
                                }}
                            >
                                <Typography sx={{ color: '#718096' }}>
                                    O app est?? dispon??vel para download nas plataformas Android e iOS. S?? clicar em um dos links abaixo e voc?? ser?? redirecionado para a Store!
                                    <br />
                                    <br />
                                    <a href='https://play.google.com/store/apps/details?id=com.hokup.radioteraquiz' target='_blank' style={{ color: '#FFA929', display: 'flex', textDecoration: 'none' }}>
                                        <AndroidIcon sx={{ marginRight: '15px' }} />
                                        Google Play Store (Android)
                                    </a>
                                    <br />
                                    <a href='https://apps.apple.com/us/app/radioteraquiz/id1603222290' target='_blank' style={{ color: '#FFA929', display: 'flex', textDecoration: 'none' }}>
                                        <AppleIcon sx={{ marginRight: '15px' }} />
                                        App Store (iOS) </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    )
}
