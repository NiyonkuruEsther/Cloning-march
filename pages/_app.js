import localFont from "@next/font/local";
import "../styles/globals.css";

const utopia = localFont({
  src: [
    {
      path: "../public/fonts/UtopiaStd-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/UtopiaStd-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/UtopiaStd-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--utopia",
});
const sourceSans = localFont({
  src: [
    {
      path: "../public/fonts/sourceSansPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sourceSansPro-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--sourceSans",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${utopia.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
