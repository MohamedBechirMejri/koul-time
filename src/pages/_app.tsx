import { type AppType } from "next/dist/shared/lib/utils";

import { Bangers } from "next/font/google";

import "~/styles/globals.css";

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div style={bangers.style}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
