export const metadata = {
  title: "SOF-Track",
  description: "Sledovanie výroby",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
