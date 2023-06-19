import { Box, BoxProps, Button, ButtonProps, HStack, Spinner, Text } from '@chakra-ui/react'
import { useAccount as useAccountStark, useConnectors as useConnectorsStark} from '@starknet-react/core'
import {useAccount as useAccountWagmi} from 'wagmi'
import { JSXElementConstructor, ReactElement, useMemo } from 'react'
import { WalletButton } from '../WalletBar'

export type WalletBarProps = BoxProps

interface walletConnectedProps extends WalletBarProps {
    deposit?: () => void
    loading?: boolean
    loadingText?: string
  }

function ConnectWallet() {
    const { connectors, connect } = useConnectorsStark()
    return (
        <HStack w="full" justifyContent="center">
        {connectors.map((conn) => (
            <WalletButton
            width="100%"
            key={conn.id()}
            onClick={() => connect(conn)}
            isDisabled={!conn.available()}
            >
            <Text>Connect wallet</Text>
            </WalletButton>
        ))}
        </HStack>
    )
}

function WalletConnected({ ...props }: walletConnectedProps) {
    const { address } = useAccountStark()

    return (
        <HStack w="full" justifyContent="center">
        <WalletButton
            width="100%"
            onClick={props.deposit}
            isLoading={props.loading}
            loadingText={props.loadingText}
        >
            {props.placeholder}
        </WalletButton>
        </HStack>
    )
}
  
export function DepositButton({ ...props }: walletConnectedProps) {
    const { address: sAddress } = useAccountStark()
    const { address: wAddress } = useAccountWagmi()
  
    return (
        <Box {...props}>{sAddress||wAddress ? <WalletConnected {...props} /> : <ConnectWallet /> }</Box>
    )
  }