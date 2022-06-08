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
            textAlign:'justify'
          }}>
          O App é de propriedade da RADIOTERAQUIZ LTDA, CNPJ 42.385.311/0001-66, sociedade empresária com sede em São Paulo, SP, na rua Artur Prado, 621, Bela Vista, CEP 01322000 (“Radioteraquiz”). Você poderá entrar em contato conosco pelos meios digitais disponibilizados no App.
          <br />
          <br />
          <br />
          O acesso ao App da Radioteraquiz (“App”) está sujeito à aceitação do presente instrumento (“Termos de Uso”) que o vincula legalmente. Ao acessar, navegar, compartilhar, contribuir ou usar o App, você reconhece que leu, entendeu e concordou com as disposições a seguir estabelecidas.
        </Typography>
      </Box>

      <Sobre
        number='I.'
        title='DISPOSIÇÕES GERAIS'
        text={
          <>
            Os Termos e Condições de Uso ("Termos de Uso") deste App regulam os termos e condições para que o Usuário, conforme definição abaixo, acesse e utilize a Radioteraquiz, também conforme definição abaixo.
            <br />
            <br />
            Este App e todo o seu conteúdo são de propriedade exclusiva da Radioteraquiz.
            <br />
            <br />
            É considerado usuário (“Usuário”) qualquer pessoa, física ou jurídica, que de qualquer modo acessar este App, e poderá ser referido neste documento como “você”.
            <br />
            <br />
            Ao registrar-se no App você concorda e se compromete em: (i) não utilizar dados ou registro de outras pessoas; (ii) não divulgar suas informações de registro e/ou login para outra pessoa; (iii) não permitir que outra pessoa use suas informações de registro e/ou login;
            <br />
            <br />
            Não será permitido o cadastro para menores de 18 (dezoito) anos.
            <br />
            <br />
            Caso você identifique a utilização não autorizada de sua conta, ou encontre qualquer outra violação de segurança, você concorda em notificar a Radioteraquiz, imediatamente. Você poderá encerrar sua conta a qualquer momento.
            <br />
            <br />
            O App é um aplicativo de educação na área médica que traz provas com questões comentadas que buscam facilitar o aprendizado do conteúdo divulgado.
          </>
        }
      />
      <Sobre
        number='II.'
        title='USO DO APP'
        text={
          <>
            O Usuário poderá utilizar do App e de suas funcionalidades de forma gratuita. Fica facultado à Radioteraquiz cobrar do Usuário pelo uso do App, mediante notificação ao e-mail do Usuário.
            <br />
            <br />
            Ao cadastrar-se para o uso do App, o Usuário declara, sob as penas da Lei, a precisão, completude e veracidade dos dados informados.
            <br />
            <br />
            O Usuário está obrigado e responsabiliza-se por atualizar, de forma imediata, a Radioteraquiz quaisquer dados e informações originalmente fornecidos que tenham deixado de ser precisos, completos e verdadeiros.
            <br />
            <br />
            O descumprimento da cláusula acima por um Usuário ou a apresentação de informações incorretas, incompletas ou falsas sujeitá-lo-á as penalidades cíveis e criminais aplicáveis, além de pena de suspensão temporária ou definitiva do direito de acesso do App, a exclusivo critério da Radioteraquiz.
            <br />
            <br />
            O login e senha de cada Usuário deverão ser utilizados exclusivamente pelo seu titular, sendo expressamente proibido o compartilhamento de login e/ou senha com terceiros.
            <br />
            <br />
            Usuário é exclusiva e integralmente responsável pela guarda, sigilo e boa utilização de seu login e senha, ficando a Radioteraquiz isenta de qualquer responsabilidade por inadequada utilização.
            <br />
            <br />
            A Radioteraquiz poderá, a qualquer momento, sem aviso prévio, suspender temporariamente ou definitivamente do App qualquer Usuário que, a exclusivo critério da Radioteraquiz, tenha feito uso inadequado da Radioteraquiz, sem prejuízos de outras penalidades cíveis e/ou criminais.
            <br />
            <br />
            O acesso como “Usuário” no App implica na concordância em comportar-se de acordo com a moral e bons costumes, em total consonância com as seguintes disposições:
            <br />
            <br />
            O Usuário concorda em não publicar ou fazer upload de material de cunho difamatório, obsceno, pornográfico e/ou ilegal,
            <br />
            <br />
            O Usuário concorda em não ameaçar ou ofender outros Usuários em espaços públicos de comentários, bem como em não interromper eventuais discussões enviando reiteradamente comentários sem sentido ou qualquer tipo de spam.
            <br />
            <br />
            O Usuário concorda em utilizar uma linguagem respeitosa. O Usuário concorda em não fazer uso de linguagem preconceituosa e/ou discriminatória e não endossar qualquer tipo de discurso de ódio. O descumprimento dessa obrigação implicará em suspensão imediata e/ou definitiva do direito de acesso do Usuário ao App, a exclusivo critério da Radioteraquiz.
            <br />
            <br />
            O Usuário concorda em não fazer qualquer tipo de ataque pessoal visando ofender ou difamar outro Usuário.
            <br />
            <br />
            O Usuário concorda em somente apresentar e divulgar informações precisas, completas e verídicas, incluindo, mas sem limitação, no que tange a dados de cadastro, dados relativos a outros Usuários.
          </>
        }
      />
      <Sobre
        number='III.'
        title='PROPRIEDADE INTELECTUAL'
        text={
          <>
            Você reconhece que todo e qualquer conteúdo disponibilizado no App como imagens, textos, documentos, arquivos de áudio, vídeo e audiovisuais e os demais materiais divulgados no App (doravante denominado “Conteúdo”) são protegidos pela legislação brasileira, principalmente, mas não exclusivamente, a Lei de Direitos Autorais (Lei Federal nº 9.610/1998), sendo de propriedade da Radioteraquiz. Portanto, você poderá́ acessar e utilizar os Conteúdos do App exclusivamente para seu uso pessoal. Você não poderá́ realizar qualquer cópia, reprodução, distribuição, transmissão, exibição, publicação, modificação, publicação, licença, criação de trabalho derivado, colocação e/ou uso em outra página da internet, transferência ou venda qualquer informação, software, lista de usuários e outras listas, produtos ou serviços obtidos no App sem o prévio consentimento por escrito da Radioteraquiz.
            <br />
            <br />
            Você entende que o uso não autorizado, por meio de pirataria, total ou parcial, publicação, reprodução ou apresentação do conteúdo do App, ainda que parcialmente, fere o direito da Radioteraquiz, que poderá́ buscar tutela judicial na esfera cível ou criminal para a defesa de seus direitos. O App, seu logotipo, todas as marcas comerciais e imagens gráficas são marcas da Radioteraquiz. Outras marcas comerciais imagens gráficas e logotipos usados em conexão com o App podem ser marcas comerciais de terceiros. O uso do App não concede a você nenhum direito ou licença para reproduzir ou de outra forma usar qualquer marca constante no App.
            <br />
            <br />
            A inobservância das condições, dos termos e das observações de uso do App poderá́, a critério da Radioteraquiz, ensejar o cancelamento ou suspensão da permissão de utilização do App pelo usuário infrator, sem prejuízo das cominações legais pertinentes. As licenças aqui concedidas não alterarão sua condição de detentor de direitos autorais.
          </>
        }
      />
      <Sobre
        number='IV.'
        title='HIPERLINKS'
        text={
          <>
            O App poderá conter links para outros websites além de seus Conteúdos. A Radioteraquiz não possui controle sobre websites ou recursos fornecidos por empresas ou indivíduos terceiros. Todo e qualquer link para websites de terceiros são disponibilizados apenas em caráter informativo, para que você acesse por sua conta e risco.
            <br />
            <br />
            A RADIOTERAQUIZ NÃO É RESPONSÁVEL PELO CONTEÚDO DE QUALQUER SITE OU QUALQUER LINK DE TERCEIROS, BEM COMO QUALQUER MUDANÇA OU ATUALIZAÇÃO EM TAIS SITES. ALÉM DISSO, A RADIOTERAQUIZ NÃO PODERÁ SER RESPONSABILIZADA PELO CONTEÚDO RECEBIDO DE QUALQUER SITE DE TERCEIRO.
          </>
        }
      />
      <Sobre
        number='V.'
        title='FINALIDADES DO TRATAMENTO DOS DADOS'
        text='O tratamento dos dados pessoais listados neste termo possui as seguintes finalidades: i) Efetuar qualquer comunicação resultante de atividade do próprio App ou a identificação do respectivo destinatário; ii)Responder a eventuais dúvidas e solicitações do Usuário; iii) Fornecer acesso à área restrita do App ou às suas funcionalidades exclusivas; iv) Cumprir ordem legal, judicial e/ou administrativa; v) Constituir, defender ou exercer regularmente direitos em âmbito judicial e/ou administrativo; vi) Possibilitar que a Radioteraquiz mantenha atualizados os cadastros dos Usuários para fins de contato autorizado a ser feito por telefone, correio eletrônico, SMS, mala-direta ou por outros meios de comunicação e promova atividades de atendimento ao Usuário para fins de relacionamento em prestação de serviço ou comercial; vii) Possibilitar que a Radioteraquiz elabore estatísticas gerais para a identificação do perfil dos Usuários e o desenvolvimento de campanhas publicitárias, para si ou para terceiros; viii) Possibilitar que a Radioteraquiz a estruture, teste, promova e faça propaganda de serviços, personalizados ou não, ao perfil do Usuário; ix) Possibilitar que a Radioteraquiz utilize tais dados em pesquisas de mercado; x) Possibilitar que a Radioteraquiz utilize tais dados para as suas peças de comunicação; xi) Possibilitar que a Radioteraquiz utilize tais dados para a elaboração de contratos, emissão de boletos, notas fiscais e documentos financeiros correlatos, viabilizando, caso aplicável, a cobrança pelos serviços prestados; xii) Possibilitar que a Radioteraquiz mantenha tais dados em banco de dados para o envio de campanhas publicitárias relacionadas com os serviços prestados pela mesma.'
      />
      <Sobre
        number='VI.'
        title='CESSÃO DE DIREITOS '
        text={
          <>
            Nesse caso, pelo presente Termos de Uso, você cede e transfere à Radioteraquiz os direitos de sua imagem, expressões artísticas, intelectuais e sobre o Conteúdo que dispuser no Radioteraquiz, tendo em vista a sua plena titularidade e direito de dispor, sem nenhum ônus ou contraprestação.
            <br />
            <br />
            Desde já́, você declara-se titular de todos os direitos sobre as imagens, expressões artísticas e intelectuais e do conteúdo que venha a postar e/ou produzir no App.
            <br />
            <br />
            Todo material poderá ser cedido a jornais, terceiros patrocinadores, e/ou veículos de mídia pela internet para divulgação do App.
            <br />
            <br />
            A presente cessão será́ concedida em caráter irrevogável e irretratável, obrigando a você e seus herdeiros. A Radioteraquiz não se responsabiliza pela utilização, por terceiros, do Conteúdo que você publicar no App.
          </>
        }
      />
      <Sobre
        number='VII.'
        title='SEGURANÇA DOS DADOS'
        text={
          <>
            A Radioteraquiz responsabiliza-se pela manutenção de medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
            <br />
            <br />
            Considerando que nenhum sistema de segurança é absolutamente seguro, a Radioteraquiz se exime de quaisquer responsabilidades por eventuais danos e/ou prejuízos decorrentes de falhas, vírus ou invasões do banco de dados do App, salvo nos casos de dolo ou culpa pela mesma.
            <br />
            <br />
            Em conformidade com o art. 48 da Lei nº 13.709, a Radioteraquiz comunicará ao Usuário e à Autoridade Nacional de Proteção de Dados (ANPD) a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante.
          </>
        }
      />
      <Sobre
        number='VIII.'
        title='DIREITO DE REVOGAÇÃO DO CONSENTIMENTO'
        text={
          <>
            Você poderá revogar este consentimento a qualquer momento, mediante o envio de solicitação ao seguinte email:
            <br />
            <br />
            E-mail: radioteraquiz@gmail.com
          </>
        }
      />
      <Sobre
        number='IX.'
        title='SEGURANÇA E ERROS '
        text={
          <>
            A Radioteraquiz adotará os procedimentos de segurança e sigilo para proteger o conteúdo atinente às suas informações pessoais, nos termos da lei.
            <br />
            <br />
            A Radioteraquiz envidará seus melhores esforços para manter o App livre de erros, mas não poderá́ garantir o funcionamento contínuo e livre de interrupções.
          </>
        }
      />
      <Sobre
        number='X.'
        title='LIMITAÇÃO DE RESPONSABILIDADE '
        text={
          <>
            Em nenhuma situação, a Radioteraquiz será responsável por quaisquer danos, prejuízos ou outro efeito, direto ou indireto, relacionados ao uso deste App, de seu Conteúdo ou de qualquer outro site aqui mencionado. Nenhuma das negociações em torno dos direitos autorais para acesso, que não a leitura, a consulta, a pesquisa, o visionamento em tela, a coleta de informações textuais, é de responsabilidade do App.
            <br />
            <br />
            A Radioteraquiz não será́ responsável por quaisquer perdas, diretas ou indiretas, perda de renda ou receita, perda de economias antecipadas, perda de lucro, perda de fundo de comércio ou perda de reputação nos negócios ou qualquer perda de dados.
            <br />
            <br />
            Ao utilizar o App, você concorda, expressamente, em indenizar, defender e isentar a Radioteraquiz de responsabilidades contra todas as reclamações, responsabilidades, danos, custos e despesas, inclusive despesas e taxas legais aceitáveis, decorrentes de ou relacionadas a: i) Não obediência a qualquer disposição contida neste Termos de Uso; ii) Uso deste App e de qualquer imagem ou informação isolada, ou em combinação com qualquer outro material, sem a expressa e prévia autorização da Radioteraquiz; e iii) Qualquer reclamação de terceiros, relacionada ao uso de imagem e/ou qualquer informação disponível no App, sozinha ou em combinação com qualquer outro material.
          </>
        }
      />
      <Sobre
        number='XI.'
        title='LEGISLAÇÃO'
        text='O Termos de Uso e seu relacionamento com a Radioteraquiz são regidos pelas leis da República Federativa do Brasil.'
      />
      <Sobre
        number='XII'
        title='DO FORO'
        text='É eleito o Foro Central da Comarca de São Paulo como competente para dirigir quaisquer controvérsias oriundas do presente Termos, com renúncia expressa a qualquer outro.'
      />
      <Sobre
        number='XIII.'
        title='ACEITAÇÃO DO TERMOS DE USO'
        text={
          <>
            Os Termos de Uso regulam o uso e acesso ao App. Ao marcar o campo indicando que você aceita este Termos de Uso você concorda com todas as disposições aqui contidas. Se você não concorda com o Termo, não poderá́ acessar o App.
            <br />
            <br />
            Os Termos de Uso poderão ser alterados a qualquer tempo.
          </>
        }
      />
      <Sobre
        number='XIV.'
        title='MUDANÇAS NOS TERMOS DE SERVIÇO'
        text='A Radioteraquiz se reserva no direito, quando necessário, com ou sem aviso prévio, de alterar estes Termos de Uso a nosso critério exclusivo e absoluto. A versão mais recente destes Termos de Uso pode ser revista, clicando em "Termos de Uso", localizado no rodapé do site. A versão mais atual dos Termos substituirá todas as versões anteriores. O uso do site ou do uso continuado dos serviços após as alterações significa que o usuário concorda em ficar vinculado por tais alterações.'
      />
    </Container>
  )
}
