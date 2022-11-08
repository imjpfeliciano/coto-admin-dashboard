import SidebarRoutes from "../constants/sidebar"
import Sidebar from "../components/V2/Sidebar"
import Navbar from "../components/V2/Navbar";
import "../styles/globals.css";

const SIDEBAR_ROUTES = SidebarRoutes;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
        <div className="h-full flex flex-row">
          <Sidebar options={SIDEBAR_ROUTES} />
          <div className="flex flex-col w-3/4">
            <Navbar />
            <div className="p-4 bg-slate-200 h-full">
              {children}
            </div>

          </div>

        </div>
      </body>
    </html>
  )
}
