import { Box, BoxProps, Button, ButtonProps, HStack, Spinner, Text } from '@chakra-ui/react'
import { useAccount as useAccountStark, useConnectors as useConnectorsStark } from '@starknet-react/core'
import { useAccount as useAccountWagmi } from 'wagmi'
import { JSXElementConstructor, ReactElement, useMemo, useState } from 'react'
import { WalletButton } from '../WalletBar'

export type WalletBarProps = BoxProps

interface walletConnectedProps extends WalletBarProps {
  deposit?: () => void
  loading?: boolean
  loadingText?: string
  walletConfig: any
}


export function DepositButton({ ...props }: walletConnectedProps) {
  return (
    <>
    <Box {...props}>
      <WalletButton
          width="100%"
          onClick={props.deposit}
          isLoading={props.loading}
          loadingText={props.loadingText}
          disabled={props.walletConfig.address != '' ? false : true}
        >
        {props.placeholder}
      </WalletButton>
    </Box>
    </>
  )
}