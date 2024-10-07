import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Outlines Tech",
  description: "Technology partner for large businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
