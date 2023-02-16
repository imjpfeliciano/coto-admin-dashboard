import AppContainer from '../containers/AppContainer';
import AppSessionProvider from './SessionProvider';
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
          href="http://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <AppSessionProvider session={session}>
          <AppContainer>{children}</AppContainer>
        </AppSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;