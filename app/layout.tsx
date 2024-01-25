import './globals.css'

interface Props {
  children: React.ReactNode
}

export default function RootLayout ({ children }: Props) {
  return (
    <html>
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
          type='text/css'
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

