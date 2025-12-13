import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://xacos.zoherdev.xyz"),
  title: {
    default: "Xacos – Production Ready Node.js Backend Scaffolding",
    template: "%s | Xacos",
  },
  description:
    "Xacos is a powerful CLI to scaffold production-ready Node.js backends with TypeScript, Prisma, Redis, Docker, and best practices.",
  applicationName: "Xacos",
  authors: [{ name: "Zoher Rangwala" }],
  creator: "Zoher Rangwala",
  publisher: "Zoher Rangwala",
  keywords: [
    "Node.js backend",
    "Express.js boilerplate",
    "Backend scaffolding",
    "Xacos CLI",
    "TypeScript backend",
    "Prisma ORM",
    "Redis caching",
    "Docker backend",
    "API starter kit",
    "Zoher Rangwala",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xacos.zoherdev.xyz",
    siteName: "Xacos",
    title: "Xacos – Production Ready Node.js Backend Scaffolding",
    description:
      "Scaffold professional Node.js backends with TypeScript, Prisma, Redis, Docker and CI/CD in minutes.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Xacos – Node.js Backend Scaffolding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Xacos – Production Ready Node.js Backend Scaffolding",
    description:
      "Build scalable Node.js backends faster with Xacos CLI.",
    creator: "@zoherr",
    images: ["/logo.png"],
  },

  category: "technology",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
