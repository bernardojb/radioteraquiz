import React, { useEffect } from 'react'

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
  TextareaAutosize,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material'

import Sobre from '../components/Sobre'

export default function PP() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container maxWidth='lg'
      sx={{
        marginBottom: '100px'
      }}
    >
      <Box
        sx={{
          marginBottom: '65px',
          marginTop: '150px'
        }}>
        <Typography variant='h5' sx={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}>Radioteraquiz</Typography>
        <Typography variant='h3' sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#FF8635',
          marginBottom: '50px',
        }}>Política de Privacidade</Typography>
      </Box>

      <Sobre
        number='I.'
        title='PRIVACIDADE '
        text={
          <>
          Ao aceitar a presente Política de Privacidade compreende e concorda com a coleta de informações, uso e práticas de divulgação nela descritas. 
          <br/>
          <br/>
          O App não deseja nem aceita publicar material confidencial. Toda informação eventualmente enviada para recursos do App ou recebida por intermédio deles ou dos endereços de contato de sua equipe será́ tratada como não sendo confidencial, independentemente de qualquer declaração do autor da comunicação que não tenha sido previamente aceita por escrito pelos responsáveis pelo App. 
          <br/>
          <br/>
          Ao enviar os as informações pessoais, você aceita ser o único e total responsável, sem nenhum compartilhamento com a Radioteraquiz, quanto à veracidade da informação em referência à titularidade das informações enviadas, bem como quanto às implicações legais e morais de sua eventual publicação.
          </>
        }
      />
      <Sobre
        number='II.'
        title='COMO UTILIZAMOS OS DADOS'
        text='Utilizamos os dados, tanto genéricos como pessoais, para melhorar cada vez mais a experiência de aprendizado dos Usuários. RESSALVAMOS O DIREITO DE COMPARTILHAR SUAS INFORMAÇÕES PESSOAIS COM ANUNCIANTES, PARCEIROS E/OU PATROCINADORES.'
      />
      <Sobre
        number='III.'
        title='COLETA DE INFORMAÇÕES'
        text='Coletamos informações através de interações voluntárias do Usuário com o App. Ao se registrar no App você fornece seu nome e email e outros dados pessoais. Registrando no App, você declara que concorda com nossa política de privacidade.'
      />
      <Sobre
        number='IV.'
        title='COOKIES'
        text='Cookie é uma pequena quantidade de dados, que pode ser enviada para seu navegador a partir de um web site e armazenado em seu computador. Quando o usuário optar por permanecer logado ao site após fechar o navegador, o App utilizará um cookie para este procedimento. As informações são tratadas com sigilo, e PODERÃO SER COMPARTILHADAS COM TERCEIROS E/OU PARCEIROS COM INTUITO DE MELHORIA DA EXPERIÊNCIA DO USUÁRIO NO APP.'
      />
      <Sobre
        number='V.'
        title='SEGURANÇA'
        text='Tomamos uma série de medidas para proteger suas informações pessoais apresentadas App. Lembramos que nenhum procedimento pela internet é 100% seguro, entretanto tomamos todas as medidas possíveis para minimizar ao máximo qualquer exposição de suas informações na internet, e informamos que trabalhamos dia-a-dia para melhorar nossos sistemas.'
      />
      <Sobre
        number='VI.'
        title='COMPARTILHAMENTO DE INFORMAÇÕES'
        text='Ao utilizar este sistema ou fornecer informações pessoais para a Radioteraquiz, você concorda que podemos nos comunicar com você por via eletrônica para os seguintes fins: questões de privacidade, assuntos administrativos, assuntos relacionados ao uso do site. Em todo o processo de comunicação, é considerada a política de privacidade do App.'
      />
      <Sobre
        number='VII.'
        title='DÚVIDAS'
        text='Qualquer questionamento sobre nossa política de privacidade deve ser endereçado para radioteraquiz@gmail.com.'
      />
      <Sobre
        number='VIII.'
        title='LINKS'
        text='O App pode apresentar links para outros sites, a Radioteraquiz não controla as políticas de privacidade destes outros sites. Recomendamos que você analise a política de privacidade destes sites antes de fazer seu cadastro.'
      />
      <Sobre
        number='IX.'
        title='ALTERAÇÕES'
        text='A Radioteraquiz pode ocasionalmente atualizar esta política. Vamos notificá-lo sobre mudanças significativas na forma como tratamos informações pessoais, enviando um aviso para o e-mail especificado em inscrição no App.'
      />
    </Container>
  )
}
