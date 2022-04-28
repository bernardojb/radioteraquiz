import React from 'react'
import { Grid, Container, Button, Box } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeatherIcon from 'feather-icons-react'
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
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
                            display:'flex',
                            flexDirection:'column'
                        }}>
                            <Typography variant='p' sx={{ fontWeight: 'bold', color: "#FF8635", marginBottom:'20px' }}>Ajuda</Typography>
                            <Typography variant='h3' sx={{ fontWeight:'bold', marginBottom:'40px' }}>Perguntas frequentes</Typography>
                            <Typography variant='p' sx={{ marginBottom:'40px' }}>Caso precise de suporte adicional, <a href='#' style={{ fontWeight: 'bold', color: "#FF8635", textDecoration: 'underline' }}>entre em contato</a></Typography>
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
                                    <FeatherIcon icon='activity' style={{ color: '#FFA929', margin: '0px 20px' }} />
                                    O app possui algum tipo de assinatura paga?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Não! O app Radioteraquiz é uma plataforma completamente gratuita, que tem como objetivo auxiliar os alunos de Radioterapia.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='faq__accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color: '#2D3748' }}>
                                    <FeatherIcon icon='activity' style={{ color: '#FFA929', margin: '0px 20px' }} />
                                    Qual a frequência de atualizações dos conteúdos?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   O app conta com um banco de questões que estará sempre em constante evolução, mas não possui uma frequência fixa de atualizações. Prezamos pela qualidade e integridade dos conteúdos, não pelo volume.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='faq__accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header">
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color: '#2D3748' }}>
                                    <FeatherIcon icon='activity' style={{ color: '#FFA929', margin: '0px 20px' }} />
                                    Que tipo de conteúdos estão presentes no app?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                O app é um assistente de estudos que possui um Quizz interativo, com perguntas e respostas justificadas sobre todo universo de Radioterapia. Questões das últimas provas de especialização, casos e muito mais. 
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
                                    <FeatherIcon icon='activity' style={{ color: '#FFA929', margin: '0px 20px' }} />
                                    Onde eu consigo fazer o download do app?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    O app está disponível para download nas plataformas Android e iOS. Só clicar em um dos links abaixo e você será redirecionado para a Store!
                                    <br/>
                                    <br/>
                                    <a href='#' style={{color:'#FFA929'}}>Google Play Store (Android)</a>
                                    <br/>
                                    <a href='#' style={{color:'#FFA929'}}>App Store (iOS) </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    )
}
