import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const faqJsonLd = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Czy to w ogóle legalne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak. Zdanie egzaminu w Czechach i uzyskanie prawa jazdy jest legalne i uznawane w całej Unii Europejskiej, w tym w Polsce."
      }
    },
    {
      "@type": "Question",
      "name": "Czy muszę znać język czeski?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nie. Wszystko organizujemy po polsku. Zapewniamy pomoc tłumacza i dokładnie wyjaśniamy każdy krok."
      }
    },
    {
      "@type": "Question",
      "name": "Jak wygląda egzamin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jest podobny do polskiego, ale bardziej przyjazny. Trasy są prostsze, a egzaminatorzy mniej surowi. Możesz też odbyć jazdy próbne."
      }
    },
    {
      "@type": "Question",
      "name": "Ile to kosztuje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cena zależy od terminu i lokalizacji. Podczas pierwszego kontaktu podajemy konkretną wycenę – bez ukrytych kosztów."
      }
    },
    {
      "@type": "Question",
      "name": "Jak długo to trwa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Najczęściej 3–4 dni. Pomagamy ustalić termin i organizujemy cały proces od początku do końca."
      }
    },
    {
      "@type": "Question",
      "name": "Czy ktoś już z tego skorzystał?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, dziesiątki osób, zwłaszcza po kilku niezdanych egzaminach w Polsce. To sprawdzona i skuteczna opcja."
      }
    }
  ]
}`;

export const metadata: Metadata = {
  title: "Prawo jazdy w Czechach – Egzaminy praktyczne, szybka zdawalność | czeskieprawojazdy.pl",
  description: "Zdaj egzamin praktyczny na prawo jazdy w Czechach! Szybko, legalnie, bez stresu. Kompleksowa obsługa, wsparcie po polsku, wysoka zdawalność. Sprawdź ofertę!",
  openGraph: {
    title: "Prawo jazdy w Czechach – Egzaminy praktyczne, szybka zdawalność",
    description: "Zdaj egzamin praktyczny na prawo jazdy w Czechach! Szybko, legalnie, bez stresu. Kompleksowa obsługa, wsparcie po polsku, wysoka zdawalność.",
    url: "https://czeskieprawojazdy.pl/",
    type: "website",
    images: [
      {
        url: "https://czeskieprawojazdy.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prawo jazdy w Czechach – egzamin praktyczny bez stresu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prawo jazdy w Czechach – Egzaminy praktyczne, szybka zdawalność",
    description: "Zdaj egzamin praktyczny na prawo jazdy w Czechach! Szybko, legalnie, bez stresu. Kompleksowa obsługa, wsparcie po polsku, wysoka zdawalność.",
    images: ["https://czeskieprawojazdy.pl/og-image.jpg"],
  },
  alternates: {
    canonical: "https://czeskieprawojazdy.pl/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#e3f0ff" />
        <link rel="canonical" href="https://czeskieprawojazdy.pl/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17128297535"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17128297535');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50 text-blue-900`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}