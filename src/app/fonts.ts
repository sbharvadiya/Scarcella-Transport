import localFont from "next/font/local";

export const archivo = localFont({
  src: [
    {
      path: "../../public/fonts/Archivo-Variable.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Archivo-Italic-Variable.ttf",
      style: "italic",
    },
  ],
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

export const pinyonScript = localFont({
  src: "../../public/fonts/PinyonScript-Regular.ttf",
  variable: "--font-pinyon",
  display: "swap",
  weight: "400",
});
