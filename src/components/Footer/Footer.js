import React from 'react'
import { Grid, Container, Button, Box } from '@mui/material'

//Images
import radioteraquizLogo from '../../assets/logo-default.svg'
import hokupLogo from '../../assets/logo-inverted.svg'

export default function Footer() {
    return (
        <Container className='footer' maxWidth='false' sx={{
            backgroundColor:'#F6F7FA',
            padding:'50px 0px',
            display:'flex',
            justifyContent:'center'
        }} >
            <Grid container maxWidth={'lg'} className='footer__container'
            sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'flex-start'
            }}>
                <Grid item >
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'flex-start'
                    }}>
                        <img src={radioteraquizLogo} style={{width:'100%', maxWidth:'200px'}}/>
                        <p>© 2021 - Radioteraquiz LTDA</p>
                        <span style={{display:'flex', flexDirection:'row', width:'100%'}}>
                            <p style={{fontWeight:'bold', marginRight:'15px'}}>Powered by</p>
                            <img style={{width:'100%', maxWidth:"90px"}} src={hokupLogo} />
                        </span>
                    </Box>
                </Grid>
                <Grid item
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start'
                }}>
                    <Box>
                        <p style={{fontWeight:'bold'}}>Informações</p>
                        <Box>
                            <p>Como Funciona</p>
                            <p>Planos</p>
                            <p>FAQ</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start'
                }}>
                    <Box>
                        <p style={{fontWeight:'bold'}}>Download</p>
                        <Box>
                            <p>Android</p>
                            <p>iOS</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start'
                }}>
                    <Box>
                        <p style={{fontWeight:'bold'}}>Social Media</p>
                        <Box>
                            <p>Instagram</p>
                            <p>Linkedin</p>
                            <p>Facebook</p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
