import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'WAIOS · From Detection to Resolution. Autonomously.',
  description:
    'WAIOS is an autonomous enterprise operations system that discovers infrastructure, understands dependencies and risk, governs decisions through policy, executes approved remediation, verifies outcomes, and preserves evidence.',
  openGraph: {
    images: [
      {
        url: '/WAIOS-OG-optimized.jpeg',
        width: 1200,
        height: 630,
        alt: 'WAIOS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/WAIOS-OG-optimized.jpeg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
