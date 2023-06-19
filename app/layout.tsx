import { Metadata } from 'next'
import ClientOnly from '../components/ClientOnly'
import Header from '../components/navbar/Header'
import StarknetProvider from './providers/StarknetProvider'
import './globals.css'
import { Suspense } from 'react'
import { RainbowProvider } from './providers/WagmiProvider'


export const metadata: Metadata = {
  title: 'Tobi',
  description: 'Welcome to Starknet react',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col overflow-hidden">
        <Suspense fallback={<p>Loading feed...</p>}>
          <RainbowProvider>
            <StarknetProvider>
              <ClientOnly>
                <Header />
              </ClientOnly>
              <div className="grow bg-cat-base overflow-y-auto" style={{ height: 'calc(100vh - 68px)' }}>{children}</div>
            </StarknetProvider>
          </RainbowProvider>
        </Suspense>
      </body>
    </html>
  )
}
