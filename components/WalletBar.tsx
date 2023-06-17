'use client'
import { Box, BoxProps, Button, ButtonProps, HStack, Spinner, Text } from '@chakra-ui/react'
import { useAccount, useConnectors } from '@starknet-react/core'
import { JSXElementConstructor, ReactElement, useMemo } from 'react'

interface walletConnectedProps extends WalletBarProps {
  deposit?: () => void
  withdraw?: () => void
  loading?: boolean
  loadingText?: string
  spinner?: ReactElement<any, string | JSXElementConstructor<any>>
}

export function WalletButton(props: ButtonProps) {
  return (
    <>
      <Button
        bg="transparent"
        borderColor="#fab387"
        borderWidth={1}
        borderRadius="5px"
        paddingLeft="10px"
        paddingTop="5px"
        paddingBottom="5px"
        paddingRight="10px"
        color="#cdd6f4"
        isLoading={props.isLoading}
        loadingText={props.loadingText}
        _hover={{ bg: '#fab387', color: '#1e1e2e' }}
        spinner={props.spinner}
        {...props}
      />
    </>
  )
}

function ConnectWallet() {
  const { connectors, connect } = useConnectors()

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
  const { address } = useAccount()
  const { disconnect } = useConnectors()

  const short = useMemo(() => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }, [address])

  return (
    <HStack w="full" justifyContent="center">
      <WalletButton
        width="100%"
        onClick={props.deposit ? props.deposit : (props.withdraw ? props.withdraw : disconnect)}
        isLoading={props.loading}
        loadingText={props.loadingText}
        spinner={props.spinner}
      >
        {props.placeholder ? props.placeholder : short}
      </WalletButton>
    </HStack>
  )
}

export type WalletBarProps = BoxProps

export function WalletBar({ ...props }: walletConnectedProps) {
  const { address } = useAccount()

  return <Box {...props}>{address ? <WalletConnected {...props} /> : <ConnectWallet />}</Box>
}
