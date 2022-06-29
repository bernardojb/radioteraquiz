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

export default function TU() {

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
        }}>Termos de Uso</Typography>
        <Typography variant='h6'
          sx={{
            color: '#718096',
            textAlign: 'justify'
          }}>
          O App é de propriedade da RADIOTERAQUIZ LTDA, CNPJ 42.385.311/0001-66, sociedade empresária com sede em São Paulo, SP, na rua Artur Prado, 621, Bela Vista, CEP 01322000. Você poderá entrar em contato conosco pelos canais de comunicação disponibilizados no App.
          <br />
          <br />
          Ao utilizar o App da Radioteraquiz, mesmo que parcialmente e por qualquer período de tempo, o Usuário concorda integralmente com estes Termos de Uso, que o vinculam legalmente.
          <br />
          <br />
          Estes Termos de Uso vigorarão por prazo indeterminado, enquanto o Usuário estiver cadastrado no App.

        </Typography>
      </Box>

      <Sobre
        number='I.'
        title='DEFINIÇÕES'
        text={
          <>
            <span style={{ fontWeight: 'bold' }}>Termos de Uso:</span> é este documento, no qual estão previstos os direitos e deveres do Usuário do App.
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>App:</span> é o aplicativo desenvolvido, mantido e disponibilizado pela Radioteraquiz, objeto das regras previstas nestes Termos de Uso.
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>Usuário:</span> é a pessoa física que adere a estes Termos de Uso para que possa utilizar o App.
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>Radioteraquiz:</span> é a pessoa jurídica que disponibiliza o App ao Usuário, qual seja, a RADIOTERAQUIZ LTDA, inscrita no CNPJ sob o número 42.385.311/0001-66, com sede em São Paulo, SP, na rua Artur Prado, 621, bairro Bela Vista, CEP 01322000.
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>Conteúdo:</span> é qualquer conteúdo disponibilizado no App, como imagens, textos, documentos, arquivos de áudio e arquivos de vídeo, entre outros.

          </>
        }
      />
      <Sobre
        number='II.'
        title='SOBRE O APP'
        text={
          <>
            O App é um aplicativo de educação na área médica que disponibiliza provas com questões comentadas que buscam facilitar o aprendizado do conteúdo divulgado.
            <br />
            <br />
            Somente devem utilizar o App Usuários que tenham pelo menos 18 (dezoito) anos completos, sendo proibida sua utilização por crianças e adolescentes.
          </>
        }
      />
      <Sobre
        number='III.'
        title='DIREITOS E DEVERES DO USUÁRIO'
        text={
          <>
            O Usuário poderá utilizar o App e suas funcionalidades de forma gratuita. A Radioteraquiz poderá, a seu critério, instituir cobrança sobre a utilização do App, mas, neste caso, o Usuário será previamente notificado por e-mail e poderá, se assim desejar, deixar de utilizar o App.
            <br />
            <br />
            Para utilizar o App, o Usuário deverá criar uma conta. Para tanto, deverá preencher um cadastro e definir suas credenciais de acesso (login e senha), as quais serão pessoais e intransferíveis. Ao se cadastrar, o Usuário se compromete a não utilizar dados de outras pessoas e a somente preencher informações suas que sejam verdadeiras.
            <br />
            <br />
            O Usuário não poderá compartilhar sua conta com outras pessoas. O Usuário é responsável pela guarda, pelo sigilo e pela boa utilização de seu login e senha.
            <br />
            <br />
            Caso haja suspeita ou confirmação de algum fato que possa comprometer suas credenciais de acesso, o Usuário deverá acessar imediatamente o App e trocar sua senha. Caso não consiga acessá-lo, deverá comunicar o fato imediatamente à Radioteraquiz.
            <br />
            <br />
            Uma vez cadastrado, o Usuário somente poderá utilizar as funcionalidades e os recursos do App cujo acesso lhe seja efetiva e intencionalmente disponibilizado pela Radioteraquiz. É proibido ao Usuário explorar comercialmente o App, contornar ou tentar contornar suas medidas de segurança, bem como piratear ou fazer engenharia reversa integral ou parcial do programa de computador que compõe o App.
            <br />
            <br />
            Caberá ao Usuário manter seus dados sempre atualizados, o que poderá ser feito diretamente por ele em sua conta.
            Ao utilizar o App, o Usuário deverá se comportar em conformidade com a lei, com a moral e com os bons costumes. Neste sentido, sem prejuízo de outras condutas que lhe sejam exigíveis com base em qualquer destes fundamentos, o Usuário se compromete a:
            <br />
            a.	Não publicar ou fazer upload de material de cunho difamatório, obsceno, pornográfico ou ilegal;
            <br />
            b.	Não ameaçar ou ofender outros Usuários em espaços públicos de comentários, bem como não interromper eventuais discussões enviando reiteradamente comentários sem sentido ou qualquer tipo de spam;
            <br />
            c.	Não utilizar termos ou expressões preconceituosas ou discriminatórias;
            <br />
            d.	Não utilizar nem endossar discurso de ódio;
            <br />
            e.	Não fazer qualquer tipo de ataque pessoal visando ofender ou difamar outro Usuário;
            <br />
            f.	Em suas interações com a Radioteraquiz ou com outros Usuários, somente apresentar e divulgar informações precisas, completas e verídicas.
            <br />
            <br />
            A Radioteraquiz não seleciona, não filtra e não tem qualquer ingerência sobre os dados inseridos pelo Usuário no App. A responsabilidade pela licitude e pela veracidade desses dados cabe exclusivamente ao Usuário.
            <br />
            <br />
            O Usuário poderá encerrar sua conta a qualquer momento.

          </>
        }
      />
      <Sobre
        number='IV.'
        title='DIREITOS E DEVERES DA RADIOTERAQUIZ'
        text={
          <>
            A Radioteraquiz é responsável pela disponibilização, pela manutenção e pelo bom funcionamento do App, bem como por zelar pela segurança do App e das informações nele contidas. Apesar disso, considerando que não existe sistema totalmente seguro, a Radioteraquiz não poderá ser responsabilizada por eventuais violações de segurança causadas por terceiros, salvo se ocorridas por culpa ou dolo da Radioteraquiz.
            <br />
            <br />
            A Radioteraquiz empregará seus melhores esforços para manter o App operacional e disponível pelo maior tempo possível, mas eventuais indisponibilidades poderão acontecer para fins de manutenção ou em situações de caso fortuito ou de força maior.
            <br />
            <br />
            A Radioteraquiz poderá, a seu exclusivo critério, independentemente da concordância do Usuário, realizar manutenções ou atualizações no App que impliquem em sua indisponibilidade. Manutenções ou atualizações programadas serão previamente informadas ao Usuário, mas medidas emergenciais poderão ocorrer sem aviso prévio, inclusive por motivo de segurança.
            <br />
            <br />
            A eventual indisponibilidade do App em virtude de manutenção programada ou emergencial não gera, ao Usuário, direito a indenização ou a eventual abatimento no preço pago para utilizar a plataforma.
            <br />
            <br />
            A Radioteraquiz poderá adotar medidas técnicas aptas a aferir o cumprimento, pelo Usuário, das disposições destes Termos de Uso.
            <br />
            <br />
            Em caso de descumprimento ou de suspeita de descumprimento destes Termos de Uso, o Usuário poderá ter o acesso ao App temporariamente suspenso para fins de averiguação do fato, assegurados o contraditório e a ampla defesa.
            <br />
            <br />
            Se confirmada a violação, a Radioteraquiz poderá advertir o Usuário ou suspender seu acesso ao App, de forma temporária ou definitiva, sem prejuízo das medidas judiciais ou extrajudiciais eventualmente cabíveis.
            <br />
            <br />
            Caso a Radioteraquiz venha a ser juridicamente demandada a pagar indenização em virtude de conduta do Usuário, a Radioteraquiz poderá se valer dos meios jurídicos aptos a incluí-lo no polo passivo da demanda, inclusive para fins de exercício de direito de regresso. Além disso, caso a Radioteraquiz sofra prejuízo por fato imputável ao Usuário, poderá se valer das medidas judiciais ou extrajudiciais que considerar necessárias à indenização ou à reparação do dano sofrido.
            <br />
            <br />
            A Radioteraquiz não se responsabiliza pela utilização indevida do App pelo Usuário.
            <br />
            <br />
            O App poderá conter links para outros websites mantidos e disponibilizados por terceiros, sobre os quais a Radioteraquiz não possui qualquer ingerência. Todo e qualquer link para websites de terceiros são disponibilizados apenas em caráter informativo, ficando facultado ao Usuário acessá-los ou não, por sua conta e risco. A Radioteraquiz não poderá ser responsabilizada por qualquer fato relacionado ao conteúdo constante de websites de terceiros, ainda que acessados a partir de links disponibilizados no App.
          </>
        }
      />

      <Sobre
        number='V.'
        title='TRATAMENTO DE DADOS PESSOAIS PELA RADIOTERAQUIZ'
        text={
          <>
            A Radioteraquiz coleta, armazena e utiliza dados pessoais do Usuário. O tratamento de dados pessoais é realizado pela Radioteraquiz em conformidade com as disposições de sua Política de Privacidade, a qual se encontra publicada no App e pode ser acessada a qualquer momento pelo Usuário.
            <br />
            <br />
            O Usuário declara ter ciência do conteúdo da Política de Privacidade da Radioteraquiz, nada tendo a questionar em relação aos seus termos.
            <br />
            <br />
            A Radioteraquiz se reserva o direito de alterar a referida Política de Privacidade a qualquer tempo, com ou sem aviso prévio. Em caso de alteração, será publicada informação a respeito no App.

          </>
        }
      />
      <Sobre
        number='V.'
        title='PROPRIEDADE INTELECTUAL'
        text={
          <>
            Os direitos de propriedade intelectual que recaem sobre os códigos de computador que compõem o App e sobre o Conteúdo pertencem exclusivamente à Radioteraquiz, exceto quanto às questões e respostas produzidas pela Sociedade Brasileira de Radioterapia, cujos direitos de propriedade intelectual pertencem àquela entidade. Em qualquer caso, tais direitos são regidos e protegidos pela Lei Federal nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei Federal nº 9.609/1998.
            <br />
            <br />
            A Radioteraquiz permite ao Usuário devidamente cadastrado que utilize temporariamente o App exclusivamente para uso pessoal, sendo-lhe expressamente proibido que realize qualquer cópia, reprodução, distribuição, transmissão, publicação, exibição, modificação, derivação, licenciamento ou transferência, por qualquer meio e a qualquer título, integral ou parcialmente, do Conteúdo ou do código de computador. O Usuário somente poderá utilizar o App de acordo com o que lhe for expressamente autorizado pela Radioteraquiz.
            <br />
            <br />
            A Radioteraquiz poderá se valer de todos os meios judiciais e extrajudiciais cabíveis para a defesa de seus direitos de propriedade intelectual.
          </>
        }
      />
      <Sobre
        number='VII.'
        title='PROPRIEDADE INDUSTRIAL'
        text={
          <>
            O App, seu logotipo, todas as marcas comerciais e imagens gráficas são marcas da Radioteraquiz. Outras marcas comerciais imagens gráficas e logotipos usados em conexão com o App podem ser marcas comerciais de terceiros. O uso do App não concede a você nenhum direito ou licença para reproduzir ou de outra forma usar qualquer marca constante no App.
          </>
        }
      />
      <Sobre
        number='VIII.'
        title='LEGISLAÇÃO APLICÁVEL'
        text={
          <>
            Estes Termos de Uso e o relacionamento do Usuário com a Radioteraquiz são regidos pelas leis da República Federativa do Brasil.
          </>
        }
      />
      <Sobre
        number='IX.'
        title='FORO DE ELEIÇÃO'
        text={
          <>
            É eleito o Foro Central da Comarca de São Paulo como competente para dirimir quaisquer controvérsias oriundas deste instrumento, com renúncia expressa a qualquer outro.
          </>
        }
      />
      <Sobre
        number='X.'
        title='ALTERAÇÃO DESTES TERMOS DE USO '
        text={
          <>
            A Radioteraquiz se reserva o direito de alterar estes Termos de Uso a qualquer tempo, com ou sem aviso prévio. Em caso de alteração, será publicada informação a respeito no App.
            <br />
            <br />
            A versão mais recente destes Termos de Uso poderá ser consultada a qualquer momento, bastando que o Usuário clique em "Termos de Uso", no site.
            <br />
            <br />
            As alterações destes Termos de Uso vigorarão de imediato e substituirão todas as versões anteriores, salvo expressa disposição em sentido contrário contida na nova versão.
            <br />
            <br />
            Caso o Usuário não concorde com as alterações, deverá deixar de utilizar o App, sendo que o uso continuado dos serviços após as alterações implicará em sua aceitação.
          </>
        }
      />
      <Sobre
        number='XI.'
        title='DISPOSIÇÕES FINAIS'
        text={
          <>
            Ao registrar-se no App, o Usuário declara ter tido a oportunidade de ler estes Termos de Uso e concorda com todas as suas disposições. O Usuário concorda, ainda, que não poderá questionar a validade ou a eficácia destes Termos de Uso em virtude da modalidade de assinatura eletrônica empregada, aceitando-a como válida para todos os fins.
            <br />
            <br />
            A tolerância da Radioteraquiz quanto ao eventual descumprimento de qualquer disposição destes Termos de Uso não gera novação e não isenta o Usuário das penalidades cabíveis.
          </>
        }
      />
    </Container>
  )
}
