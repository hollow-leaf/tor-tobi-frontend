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
import { DepositButton } from '../../components/Button/DepositeButton'
import Loading from '../loading'
import { useAccount as useAccountStark, useConnectors as useConnectorsStark } from '@starknet-react/core'
import { useAccount as useAccountWagmi } from 'wagmi'
import { WalletBar } from '@/components/WalletBar'
import { RainbowConnectButton } from '@/components/Button/RainbowConnectButton'

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export enum Wallet {
  ArgentX = 'ArgentX',
  Wagmi = 'Wagmi',
}
interface ChainObject {
  key: string;
  value: Wallet;
}

export default function DepositHome() {

  const chains: ChainObject[] = [
    { key: 'Ethereum', value: Wallet.Wagmi },
    { key: 'Polygon', value: Wallet.Wagmi },
    { key: 'Binance', value: Wallet.Wagmi },
    { key: 'StarkNet', value: Wallet.ArgentX }
  ]
  const tokens = new Array('USDC', 'USDT', 'DAI', 'WETH')

  const [isLoading, setIsLoading] = useState(false);
  const [selectedWallet, setWallet] = useState(Wallet.Wagmi);
  const [selectedNetwork, setNetwork] = useState('Ethereum');
  const [walletConfig, setConfig] = useState({address: '', wallet: '', network:''});

  const { address:wagmiAddress,  } = useAccountWagmi()
  const { address:starkAddress } = useAccountStark()
  
  useEffect(
    () => {
      if (selectedWallet == Wallet.Wagmi){
        setConfig(() => {return {network: selectedNetwork, wallet: selectedWallet, address: wagmiAddress?? ''}})
      }else{
        setConfig(() => {return {network: selectedNetwork, wallet: selectedWallet, address: starkAddress?? ''}})
      }
    }
    ,[selectedNetwork])

  async function deposit() {
    setIsLoading(true);
    switch (selectedWallet) {
      case Wallet.Wagmi: {
        await sleep(1000)
        console.log("depositEVM")
        break;
      }
      case Wallet.ArgentX: {
        await sleep(1000)
        console.log("depositStarkNet")
        break;
      }
      default: {
        await sleep(1000)
        console.log("depositDefault")
        break;
      }
    }
    setIsLoading(false)
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
                selectedWallet == Wallet.ArgentX
                ? <WalletBar></WalletBar>
                : <RainbowConnectButton></RainbowConnectButton>
              }
            </div>
            <div className='flex flex-row items-center justify-between space-x-2'>
              <SelectChain items={chains} placeholder="From" setWallet={setWallet} setNetwork={setNetwork}/>
              <ArrowRightIcon className='w-10' />
              <SelectChain items={chains} placeholder="To" />
            </div>
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-text'>You send</Text>
              <Text className='text-cat-text'>Balance: </Text>
            </div>
            <div className='flex flex-row items-center justify-between space-x-4'>
              <SelectChain items={tokens} placeholder="Token" className='grow bg-cat-mantle text-cat-text basis-1/4' />
              <Input className='bg-cat-mantle text-cat-text' type='number' placeholder='0.00' />
            </div>
            <DepositButton
              placeholder= {walletConfig.address !='' ? 'Kamui' : 'Please Connect First'}
              className='pt-10'
              deposit={deposit}
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
