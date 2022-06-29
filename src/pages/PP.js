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
        <Typography variant='h6'
          sx={{
            color: '#718096',
            textAlign: 'justify'
          }}>
          Esta política traz as principais informações sobre o tratamento de seus dados pessoais pela RADIOTERAQUIZ LTDA, CNPJ 42.385.311/0001-66, sociedade empresária com sede em São Paulo, SP, na rua Artur Prado, 621, Bela Vista, CEP 01322000 (“Radioteraquiz”). Sempre que tratamos os seus dados pessoais, temos o cuidado de seguir as exigências da <span style={{ fontWeight: "bold" }}>Lei Geral de Proteção de Dados Pessoais</span> (LGPD) e de outras normas que possam ser aplicáveis, bem como as orientações dos órgãos fiscalizadores e regulatórios sobre o assunto.
        </Typography>
      </Box>

      <Sobre
        number=''
        title='O que são dados pessoais e o que é o tratamento de dados?'
        text={
          <>
            A LGPD define como dado pessoal qualquer “informação relacionada a pessoa natural identificada ou identificável”. Assim, se é possível <span style={{ fontWeight: 'bold' }}>associar uma informação a alguém</span> específico diretamente ou através de outras informações, ela é um dado pessoal. A pessoa a quem os dados pessoais se referem é chamada de <span style={{ fontWeight: 'bold' }}>titular</span>.
            <br />
            <br />
            Considera-se tratamento, de acordo com a LGPD, qualquer atividade realizada com dados pessoais. São exemplos: coleta, produção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, modificação, comunicação, transferência ou extração de dados pessoais.
          </>
        }
      />
      <Sobre
        number=''
        title='Quem é responsável pelo que é feito com os dados pessoais tratados por meio do App?'
        text='A Radioteraquiz é quem toma as decisões relativas ao que é feito com os dados pessoais mencionados na seção seguinte.'
      />
      <Sobre
        number=''
        title='Quais são os dados pessoais tratados pela Radioteraquiz?'
        text={
          <>
            Os dados pessoais de usuários tratados pela Radioteraquiz por meio do App são: <span style={{fontWeight:'bold'}}>dados de cadastro</span> (nome completo, e-mail, data de nascimento, telefone, país, endereço, vinculação institucional, cargo e CRM), <span style={{fontWeight:'bold'}}>dados sobre a utilização do App</span> (como datas e horários de acesso, tempo médio de uso do App, número de dias consecutivos em que o usuário acessa o App, número total de perguntas respondidas, percentual de acertos, número de acertos em sequência e número de acertos por tema) e <span style={{fontWeight:'bold'}}>registros de comunicações mantidas com a Radioteraquiz</span> (incluindo endereço e assinatura de e-mail e o teor das mensagens enviadas). Desta forma, a Radioteraquiz trata exclusivamente dados pessoais não-sensíveis.
          </>
        }
      />
      <Sobre
        number=''
        title='Quem são as pessoas cujos dados pessoais são tratados pela Radioteraquiz?'
        text={
          <>
            No contexto da Radioteraquiz, os titulares são os <span style={{fontWeight:'bold'}}>profissionais que se cadastram</span> no App, ou seja, os usuários do App.
          </>
        }
      />
      <Sobre
        number=''
        title='Como é feita a coleta de dados pessoais?'
        text={
          <>
            A coleta de dados de cadastro ocorre no momento do cadastro do usuário.
            <br/>
            <br/>
            Os dados sobre a utilização do App podem ser coletados diretamente do usuário (no momento em que ele submete uma resposta a uma questão, por exemplo) ou podem ser coletados e gerados pelo App à medida que o usuário o utiliza (como acontece com o tempo de uso do App e com as métricas relacionadas ao número de perguntas respondidas e ao número de acertos do usuário).
            <br/>
            <br/>
            Os registros de comunicações mantidas com a Radioteraquiz são coletados quando há o envio de uma mensagem por meio dos canais de comunicação da Radioteraquiz.
          </>
        }
      />

      <Sobre
        number=''
        title='Quem é responsável pelo que é feito com os dados pessoais tratados por meio do App?'
        text={
          <>
            A Radioteraquiz é a controladora das atividades realizadas com os dados pessoais mencionados nesta Política de Privacidade.
          </>
        }
      />

      <Sobre
        number=''
        title='Com quais objetivos os dados pessoais são tratados pela Radioteraquiz?'
        text={
          <>
            A Radioteraquiz trata os dados pessoais dos usuários com as seguintes finalidades:
            <br/>
            a.	Executar os Termos de Uso firmados entre a Radioteraquiz e o usuário, inclusive para permitir o acesso e a utilização do App;
            <br/>
            b.	Responder a dúvidas e a solicitações e prestar suporte aos usuários;
            <br/>
            c.	Entrar em contato com os usuários para prestar informações sobre alterações nos Termos de Uso do App ou nesta Política de Privacidade;
            <br/>
            d.	Realizar pesquisas de mercado com os usuários, para fins de aferir seu interesse em produtos ou serviços próprios ou de terceiros;
            <br/>
            e.	Elaborar campanhas de marketing que busquem oferecer aos usuários produtos e serviços próprios ou de terceiros;
            <br/>
            f.	Permitir o cumprimento, pela Radioteraquiz, de suas obrigações legais ou regulatórias;
            <br/>
            g.	Permitir que a Radioteraquiz exerça seus direitos no âmbito de eventuais processos judiciais, administrativos ou arbitrais;
            <br/>
            h.	Criar modelos e análises estatísticas a partir da anonimização dos dados pessoais para análise de comportamento dos usuários e melhoria de nossos serviços e ações;
            <br/>
            i.	Informar o usuário quanto aos seus resultados e quanto ao seu rendimento ao responder perguntas, disponibilizando-lhe ferramentas para que possa acompanhar e monitorar seus estudos;
            <br/>
            j.	Compreender o comportamento dos usuários, a fim de entender quais perguntas geram mais interesse, quais têm maior índice de acertos ou de erros, quais temas geram mais dificuldades, entre outras métricas que possam ser relevantes para o aprimoramento de nossos produtos e serviços, inclusive para fins de identificar e de disponibilizar novos conteúdos didáticos que possam auxiliar na compreensão de temas de maior dificuldade;
            <br/>
            k.	Permitir que a Radioteraquiz realize auditorias em seus processos internos.
            <br/>
            <br/>
            Em qualquer caso, os dados pessoais dos usuários são tratados pela Radioteraquiz com fundamento em alguma das hipóteses previstas no art. 7º da LGPD.
          </>
        }
      />
      <Sobre
        number=''
        title='Duração do tratamento de dados pessoais'
        text={
          <>
            A Radioteraquiz somente realiza o tratamento de dados pessoais pelo tempo necessário para que as finalidades mencionadas na seção anterior sejam atingidas. Posteriormente, são descartados, sem que a Radioteraquiz possa recuperá-los.
          </>
        }
      />
      <Sobre
        number=''
        title='Como a Radioteraquiz protege os dados pessoais dos usuários?'
        text={
          <>
            A Radioteraquiz adota uma série de medidas técnicas e administrativas de segurança aptas a proteger os dados pessoais dos usuários contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação e outras formas de tratamento inadequado ou ilícito que os envolvam, entre as quais: emprego de criptografia para armazenamento de senhas, proteção de banco de dados contra acesso de terceiros, práticas de restrição de acesso a informações contidas em bancos de dados, proteção dos dados transmitidos entre seu smartphone e o servidor que hospeda o App, restrição de login a usuários devidamente autenticados, entre outras.
          </>
        }
      />
      <Sobre
        number=''
        title='Com quem a Radioteraquiz compartilha os dados pessoais dos usuários?'
        text={
          <>
            A Radioteraquiz possui contrato com uma empresa de tecnologia da informação que mantém o App em funcionamento e que o gerencia, de modo que ela tem acesso aos dados pessoais coletados, armazenados e processados a partir do App. Tal empresa atua como operadora de dados pessoais, processando-os de acordo com as determinações da Radioteraquiz, a qual permanece em seu papel de controladora.
            <br/>
            <br/>
            A Radioteraquiz somente contrata prestadores de serviços que adotam padrões adequados de proteção de dados pessoais e de segurança da informação.
          </>
        }
      />
      <Sobre
        number=''
        title='Quais são os direitos do titular de dados pessoais?'
        text={
          <>
            Os usuários, enquanto titulares de dados pessoais, têm os seguintes direitos:
            <br/>
            a.	Confirmação da existência de tratamento;
            <br/>
            b.	Acesso aos dados;
            <br/>
            c.	Correção de dados incompletos, inexatos ou desatualizados;
            <br/>
            d.	Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;
            <br/>
            e.	Portabilidade dos dados a outro fornecedor de serviço ou produto;
            <br/>
            f.	Eliminação dos dados pessoais tratados com o consentimento do titular;
            <br/>
            g.	Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;
            <br/>
            h.	Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;
            <br/>
            i.	Revogação do consentimento.
            <br/>
            <br/>
            O exercício destes direitos será viabilizado mediante requisição a ser enviada pelo usuário ao seguinte endereço de e-mail: <a href='mailto:radioteraquiz@gmail.com' style={{color:'#718096'}}>radioteraquiz@gmail.com</a>. A Radioteraquiz poderá formular exigências para que o requerente comprove ser, de fato, o titular dos dados pessoais objeto da requisição.
            <br/>
            <br/>
            Os direitos listados acima podem sofrer limitações previstas em lei, de modo que a Radioteraquiz poderá ou não atender à solicitação. Em qualquer caso, a resposta será fundamentada.

          </>
        }
      />
      <Sobre
        number=''
        title='Como entrar em contato com a Radioteraquiz?'
        text={
          <>
            Para resolver dúvidas ou questões sobre privacidade e proteção de dados pessoais, entre em contato com nosso encarregado de proteção de dados pessoais pelo endereço de e-mail <a href='mailto:radioteraquiz@gmail.com' style={{color:'#718096'}}>radioteraquiz@gmail.com</a>.
          </>
        }
      />



    </Container>
  )
}
