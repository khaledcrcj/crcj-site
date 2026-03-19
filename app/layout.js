export const metadata = {
  title: "CRCJ | Cairo Regional Center for Criminal Justice",
  description:
    "CRCJ is a Cairo-based regional platform advancing criminal justice through accredited credit-hour programs, non-credit professional training, policy engagement, and strategic cooperation across Egypt, Africa, and the Middle East.",
  keywords: [
    "CRCJ",
    "Cairo Regional Center for Criminal Justice",
    "criminal justice",
    "Egypt",
    "Africa",
    "Middle East",
    "credit-hour programs",
    "professional training",
    "capacity building",
    "rule of law",
    "security",
    "justice sector",
  ],
  authors: [{ name: "CRCJ" }],
  creator: "CRCJ",
  publisher: "CRCJ",
  metadataBase: new URL("https://crcj.org"),
  openGraph: {
    title: "CRCJ | Cairo Regional Center for Criminal Justice",
    description:
      "A regional hub for advancing criminal justice across Egypt, Africa, and the Middle East.",
    url: "https://crcj.org",
    siteName: "CRCJ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CRCJ - Cairo Regional Center for Criminal Justice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRCJ | Cairo Regional Center for Criminal Justice",
    description:
      "A regional hub for advancing criminal justice across Egypt, Africa, and the Middle East.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
