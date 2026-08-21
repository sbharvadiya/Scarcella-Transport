import type { Metadata } from "next";
import { archivo, pinyonScript } from "./fonts";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "F&A Scarcella Transport | Interstate Freight, Done Properly",
    template: "%s | F&A Scarcella Transport",
  },
  description:
    "Family-run interstate freight since the late 1960s. Refrigerated, general, oversize and dangerous goods across Sydney, Darwin, Adelaide, Brisbane and Melbourne.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
