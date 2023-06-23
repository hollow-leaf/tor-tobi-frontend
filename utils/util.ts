import { Wallet, AvailableChains, AvailableTokens, ChainObject, TokenObject, DepositParameter } from '../app/appModel'


export function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export const AvailableChainsObject: ChainObject[] = [
  { key: AvailableChains.Goerli, value: Wallet.Wagmi },
  { key: AvailableChains.Sepolia, value: Wallet.Wagmi },
  { key: AvailableChains.Mumbai, value: Wallet.Wagmi },
  { key: AvailableChains.StarkNet, value: Wallet.ArgentX },
]

export const AvailableTokensObject: TokenObject[] = [
  { key: AvailableTokens.ETH, value: AvailableTokens.ETH },
  { key: AvailableTokens.WETH, value: AvailableTokens.WETH },
]
