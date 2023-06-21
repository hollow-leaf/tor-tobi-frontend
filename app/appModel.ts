export enum Wallet {
    ArgentX = 'ArgentX',
    Wagmi = 'Wagmi',
  }
  
  export enum AvailableChains {
    Ethereum = 'Ethereum',
    Goerli = 'Goerli',
    Sepolia = 'Sepolia',
    Polygon = 'Polygon',
    Mumbai = 'Mumbai',
    BSC = 'BSC',
    StarkNet = 'StarkNet'
  }
  
  export enum AvailableTokens {
    ETH = 'ETH',
    WETH = 'WETH',
  }
  
  export interface ChainObject {
    key: string;
    value: Wallet;
  }

  export interface TokenObject {
    key: string;
    value: string;
  }

  export interface DepositParameter { 
    sourceChain: string, 
    targetChain: string, 
    token: string,
    balance: string
}