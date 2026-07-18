import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'WAIOS · The Operating Layer for Autonomous Enterprise Operations',
  description:
    'WAIOS connects enterprise systems, AI reasoning, governance, approval, execution and learning into one accountable operational loop.',
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
