import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <>
      <header>Tamagochi</header>
      <main>{children}</main>
    </>
  );
}
