import './globals.css';

interface Props {
  children: React.ReactNode;
  session?: any;
}

const RootLayout = ({ children, session }: Props) => {
  console.log({ session });
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
    {children}
      </body>
    </html>
  );
};

export default RootLayout;