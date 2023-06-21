'use client'

import HookSection from '../../components/HookSection'
import SectionHeading from '../../components/SectionHeading'
import {
  Card,
  CardBody,
  Text
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { SelectChain } from '../../components/SelectChain'
import { Input } from '@/components/ui/input'
import { ProcessButton } from '../../components/Button/ProcessButton'
import Loading from '../loading'
import { useAccount as useAccountStark, useConnectors as useConnectorsStark } from '@starknet-react/core'
import { useAccount as useAccountWagmi, useDisconnect, useSwitchNetwork, useNetwork } from 'wagmi'
import { WalletBar, WalletButton } from '@/components/WalletBar'
import { RainbowConnectButton } from '@/components/Button/RainbowConnectButton'
import { DepositDialog } from '../../components/DIalog/DepositDialog'

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

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

interface TokenObject {
  key: string;
  value: string;
}

export default function DepositHome() {

  const chains: ChainObject[] = [
    { key: AvailableChains.Goerli, value: Wallet.Wagmi },
    { key: AvailableChains.Sepolia, value: Wallet.Wagmi },
    { key: AvailableChains.Mumbai, value: Wallet.Wagmi },
    { key: AvailableChains.StarkNet, value: Wallet.ArgentX },
  ]

  const tokens: TokenObject[] = [
    { key: AvailableTokens.ETH, value: AvailableTokens.ETH },
    { key: AvailableTokens.WETH, value: AvailableTokens.WETH },
  ]

  const [isLoading, setIsLoading] = useState(false);
  const [selectedWalletNetwork, setWalletNetwork] = useState<ChainObject>({key:'', value: Wallet.Wagmi});
  const [selectedToken, setToken] = useState<TokenObject>({key:AvailableTokens.ETH, value: AvailableTokens.ETH});
  const [walletConfig, setConfig] = useState({ address: '', wallet: '', network: '' });
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);

  const { address: wagmiAddress, isConnected: isConnectedWagmi } = useAccountWagmi()
  const { address: starkAddress, isConnected: isConnectedStark } = useAccountStark()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  useEffect(
    () => {
      if (isConnectedWagmi && selectedWalletNetwork.value == Wallet.Wagmi) {
        switch (selectedWalletNetwork.key) {
          case AvailableChains.Goerli: {
            switchNetwork?.(5)
            break;
          }
          case AvailableChains.Sepolia: {
            switchNetwork?.(11155111)
            break;
          }
          case AvailableChains.Mumbai: {
            switchNetwork?.(80001)
            break;
          }
        }
        setConfig(() => { return { network: selectedWalletNetwork.key, wallet: selectedWalletNetwork.value, address: wagmiAddress ?? '' } })
      } else if (isConnectedStark && selectedWalletNetwork.value == Wallet.ArgentX) {
        setConfig(() => { return { network: selectedWalletNetwork.key, wallet: selectedWalletNetwork.value, address: starkAddress ?? '' } })
      } else {
        if (selectedWalletNetwork.value == Wallet.Wagmi) {
          setConfig(() => { return { network: selectedWalletNetwork.key, wallet: selectedWalletNetwork.value, address: wagmiAddress ?? '' } })
        } else {
          setConfig(() => { return { network: selectedWalletNetwork.key, wallet: selectedWalletNetwork.value, address: starkAddress ?? '' } })
        }
      }
    }
    , [selectedWalletNetwork.key, wagmiAddress, starkAddress])

  async function deposit() {
    setIsDepositDialogOpen(true)
    // setIsLoading(true);
    // switch (selectedWallet) {
    //   case Wallet.Wagmi: {
    //     await sleep(1000)
    //     console.log("depositEVM", chain?.name)
    //     break;
    //   }
    //   case Wallet.ArgentX: {
    //     await sleep(1000)
    //     console.log("depositStarkNet", chain?.name)
    //     break;
    //   }
    //   default: {
    //     await sleep(1000)
    //     console.log("depositDefault")
    //     break;
    //   }
    // }
    // setIsLoading(false)
  }

  return (
    <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
      {isLoading && <Loading />}
      <HookSection>
        <SectionHeading>Deposit</SectionHeading>

        <Card className='bg-cat-mantle p-5 rounded'>
          <CardBody className='space-y-2'>

            <div className='flex flex-row items-center justify-between space-x-2'>
              <Text className='text-cat-text'>Chain</Text>
              {
                selectedWalletNetwork.key !== ''
                  ? selectedWalletNetwork.value == Wallet.ArgentX
                    ? <WalletBar></WalletBar>
                    : <RainbowConnectButton></RainbowConnectButton>
                  : <WalletButton disabled={true}>{'Please Select Network'}</WalletButton>
              }
            </div>
            <div className='flex flex-row items-center justify-between space-x-2'>
              <SelectChain items={chains} placeholder="From" setState={{setWalletNetwork}} />
              <ArrowRightIcon className='w-10' color='#cdd6f4' />
              <SelectChain items={chains} placeholder="To" setState={{}}/>
            </div>
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-text'>You send</Text>
              <Text className='text-cat-text'>Balance: </Text>
            </div>
            <div className='flex flex-row items-center justify-between space-x-4'>
              <SelectChain items={tokens} placeholder="Token" className='grow bg-cat-mantle text-cat-text basis-1/4' setState={{setToken}}/>
              <Input className='bg-cat-mantle text-cat-text' type='number' placeholder='0.00' />
            </div>
            <ProcessButton
              placeholder={(walletConfig.address != '' && walletConfig.network != '') ? 'Kamui' : 'Please Connect First'}
              className='pt-10'
              process={deposit}
              loading={isLoading}
              loadingText="Kamuiing"
              walletConfig={walletConfig}
            />
          </CardBody>
        </Card>
        
      </HookSection>
    </div>

  )
}
