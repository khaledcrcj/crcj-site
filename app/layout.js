export const metadata = {
  title: "CRCJ",
  description: "Cairo Regional Center for Criminal Justice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
