import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

import NavBar from "./components/navbar";
import LandingPage from "./components/landingpage";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        <Providers>
        <NavBar />
        <LandingPage />
          {children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
