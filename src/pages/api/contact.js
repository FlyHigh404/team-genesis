import { Resend } from 'resend'
import { EmailTemplate } from '@/components/email/EmailTemplate'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { first_name, last_name, phone, message, email } = req.body

    if (!first_name || !last_name || !phone || !message || !email) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const resend = new Resend('ENV=API_KEY')

    const { data, error } = await resend.emails.send({
      from: `Betulin Website <info@mail.prinafsika.world>`,
      to: '21081010190@student.upnjatim.ac.id',
      subject: `New Message from ${first_name} ${last_name}`,
      react: EmailTemplate({ email, message, first_name, last_name, phone }),
    })

    if (error) {
      return res.status(400).json({ message: 'Email sending failed', error })
    }

    return res.status(200).json({ message: 'Email sent successfully', data })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: 'Failed to send email', error })
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
}
