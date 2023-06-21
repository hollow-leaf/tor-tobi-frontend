import { Box, BoxProps, Button, ButtonProps } from '@chakra-ui/react'
import { WalletButton } from '../WalletBar'

export type WalletBarProps = BoxProps

interface walletConnectedProps extends WalletBarProps {
  deposit?: () => void
  loading?: boolean
  loadingText?: string
  walletConfig: any
}

export function ProcessButton(props: ButtonProps) {
  return (
    <>
      <Button
        bg={!props.disabled ? "transparent" : '#d3d4e4'}
        borderColor={!props.disabled ? "#fab387" : '#d3d4e4'}
        borderWidth={1}
        borderRadius="5px"
        paddingLeft="10px"
        paddingTop="5px"
        paddingBottom="5px"
        paddingRight="10px"
        color={!props.disabled ? "#cdd6f4" : "#3d3f67"}
        isLoading={props.isLoading}
        loadingText={props.loadingText}
        _hover={!props.disabled ? { bg: '#fab387', color: '#1e1e2e' } : {}}
        spinner={props.spinner}
        {...props}
      />
    </>
  )
}

export function DepositButton({ ...props }: walletConnectedProps) {
  return (
    <>
      <Box {...props}>
        <ProcessButton
          width="100%"
          onClick={props.deposit}
          isLoading={props.loading}
          loadingText={props.loadingText}
          disabled={(props.walletConfig.address != '' && props.walletConfig.network != '') ? false : true}
        >
          {props.placeholder}
        </ProcessButton>
      </Box>
    </>
  )
}