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
      <body>{children}</body>
    </html>
  );
}
