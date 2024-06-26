"use client";

// -> Next Fonts
import { Roboto } from "next/font/google";

// -> ContextAPI
import { SearchPriceProvider } from "@/context/SearchPriceContext";

// -> Lib
import StyledComponentsRegistry from "../lib/registry";

// -> Global Styles
import { GlobalStyles } from "../styles/globalStyles";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body className={roboto.className}>
          <SearchPriceProvider>
            <GlobalStyles />
            {children}
          </SearchPriceProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
