import { Box, BoxProps, Button, ButtonProps } from '@chakra-ui/react'

export type WalletBarProps = BoxProps

export interface walletProcessProps extends WalletBarProps {
  process?: () => void
  loading?: boolean
  loadingText?: string
  walletConfig: any
  disabled?: boolean
  textColor?: string
}

export function ProcessButton({ ...props }: walletProcessProps) {
  return (
    <>
      <Box {...props}>
        <FormatButton
          width="100%"
          onClick={props.process}
          isLoading={props.loading}
          loadingText={props.loadingText}
          disabled={props.disabled ? props.disabled : false}
          textColor={props.textColor}
        >
          {props.placeholder}
        </FormatButton>
      </Box>
    </>
  )
}

export function FormatButton(props: ButtonProps) {
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
        color={!props.disabled ? '#cdd6f4' : '#cdd6f4'}
        isLoading={props.isLoading}
        loadingText={props.loadingText}
        _hover={!props.disabled ? { bg: '#fab387', color: '#1e1e2e' } : {}}
        spinner={props.spinner}
        {...props}
      />
    </>
  )
}
