import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "CleanHomes | Professional Cleaning Services",
  description:
    "Premium home and office cleaning across the UK. Reliable, insured, and satisfaction guaranteed.",
  metadataBase: new URL("https://www.cleanhomes.online"),
  openGraph: {
    title: "CleanHomes | Professional Cleaning Services",
    description: "Spotless homes. Seamless service.",
    url: "https://www.cleanhomes.online",
    siteName: "CleanHomes",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "CleanHomes" }],
    locale: "en_GB",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        {/* Optional Google Analytics – set NEXT_PUBLIC_GA_ID in Vercel to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
