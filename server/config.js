const config = {
  transporter: {
    service: 'medee.jp',
    port: 465,
    auth: {
      user: 'info@medee.jp',
      pass: 'P8_7qfk9'
    },
    use_authentication: true,
    tls: {
      rejectUnauthorized: false
    }
  }
}

export default config
