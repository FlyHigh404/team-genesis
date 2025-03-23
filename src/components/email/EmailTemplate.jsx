import { Body, Container, Head, Hr, Html, Preview, Text } from '@react-email/components'

export const EmailTemplate = ({ message, email, first_name, last_name, phone }) => {
  const containerStyle = {
    margin: '0 auto',
    padding: '0 1.25rem',
    marginTop: '1.25rem',
    marginBottom: '3rem',
  }

  const hrStyle = {
    marginTop: '0.625rem',
    marginBottom: '1.875rem',
    border: '1px solid #ccc',
  }

  const textStyle = {
    base: {
      fontSize: '1rem',
      marginTop: '0',
      marginBottom: '0.625rem',
    },
  }

  return (
    <Html>
      <Head />
      <Preview>Test Message</Preview>
      <Body style={{ fontFamily: 'sans-serif', background: '#fff' }}>
        <Container style={containerStyle}>
          <Hr style={hrStyle} />

          <Text style={textStyle.base}>
            From: <i>{email}</i>,
          </Text>
          <Text style={textStyle.base}>
            Name:{' '}
            <i>
              {first_name} {last_name}
            </i>
            ,
          </Text>
          <Text style={textStyle.base}>
            Phone: <i>{phone}</i>,
          </Text>
          <Text style={textStyle.base}>{message}</Text>
          <Text style={textStyle.base}>
            Sent via Contact Form @{' '}
            <a rel="noopener" href="https://prinafsika.world" target="_blank">
              mail.prinafsika.world
            </a>
            <br />
          </Text>
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  )
}

export default EmailTemplate
