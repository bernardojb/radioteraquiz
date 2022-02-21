import React from 'react'
import { Grid, Container, Button, Box } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeatherIcon from 'feather-icons-react'

export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
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
                        textAlign: 'center'
                    }}>
                        <p style={{ fontSize: '24px', fontWeight: 'bold', color: "#FF8635" }}>Ajuda</p>
                        <h1 style={{ fontSize: '48px' }}>Perguntas frequentes</h1>
                        <p style={{ fontSize: '20px' }}>Caso precise de suporte adicional, <a href='#' style={{ fontWeight: 'bold', color: "#FF8635", textDecoration: 'underline' }}>entre em contato</a></p>
                    </Box>
                </Grid>
                <Grid item >
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='faq__accordion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color:'#2D3748' }}>
                                <FeatherIcon icon='activity' style={{ color: '#FFA929', margin:'0px 20px' }} />
                                Como funciona o sistema de assinaturas?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='faq__accordion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color:'#2D3748' }}>
                                <FeatherIcon icon='activity' style={{ color: '#FFA929', margin:'0px 20px' }} />
                                Qual a frequência de atualizações dos conteúdos?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='faq__accordion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header">
                            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color:'#2D3748' }}>
                                <FeatherIcon icon='activity' style={{ color: '#FFA929', margin:'0px 20px' }} />
                                Que tipo de conteúdos estão presentes no app?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='faq__accordion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: '20px', display: 'flex', minHeight: "50px", justifyContent: "flex-start", alignItems: "center", color:'#2D3748' }}>
                                <FeatherIcon icon='activity' style={{ color: '#FFA929', margin:'0px 20px' }} />
                                Onde eu consigo fazer o download do app?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    )
}
