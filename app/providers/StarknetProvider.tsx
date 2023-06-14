'use client'

import { ReactNode } from 'react'
import { InjectedConnector, StarknetConfig } from '@starknet-react/core'

interface StarknetProviderProps {
  children: ReactNode
}

const StarknetProvider = ({ children }: StarknetProviderProps) => {
  const connectors = [
    new InjectedConnector({options: {id: 'argentX'}})
  ]
  return (
    <StarknetConfig connectors={connectors}>
      <>{children}</>
    </StarknetConfig>
  )
}

export default StarknetProvider
