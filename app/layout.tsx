import { Metadata } from 'next'
import ClientOnly from '../components/ClientOnly'
import Header from '../components/navbar/Header'
import StarknetProvider from './providers/StarknetProvider'
import './globals.css'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Tobi',
  description: 'Welcome to Starknet react',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <Suspense fallback={<p>Loading feed...</p>}>
          <StarknetProvider>
            <ClientOnly>
              <Header />
            </ClientOnly>
            <div className="grow bg-cat-base">{children}</div>
          </StarknetProvider>
        </Suspense>
      </body>
    </html>
  )
}
