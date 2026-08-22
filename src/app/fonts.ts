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
  // Archivo-Variable.ttf carries a wght axis spanning 100-900. Without this
  // range next/font emits no font-weight descriptor, so the browser pins the
  // face to 400 and synthesises anything heavier instead of using the axis.
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
