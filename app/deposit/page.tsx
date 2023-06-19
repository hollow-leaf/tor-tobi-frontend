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
import { WalletBar } from '@/components/WalletBar'
import Loading from '../loading'

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

enum WalletNetwork {
  StarkNet = 0,
  EVM = 1,
  De=999
}
interface ChainBase {
  key: string;
  value: WalletNetwork;
}

export default function DepositHome() {

  const chains : ChainBase[] =[
    {key:'BNB',value: WalletNetwork.EVM}, 
    {key:'ETH',value:WalletNetwork.EVM}, 
    {key:'Polygon',value:WalletNetwork.EVM}, 
    {key:'StarkNet',value:WalletNetwork.StarkNet}
  ]
  const tokens = new Array('USDC', 'USDT', 'DAI', 'WETH')

  const [isLoading, setIsLoading] = useState(false);
  const [selectedNetwork, setWalletNetwork] = useState(WalletNetwork.De);

  async function deposit() {
    setIsLoading(true);
    switch(selectedNetwork) { 
      case WalletNetwork.EVM: { 
        await sleep(1000)
        console.log("depositEVM")
        break; 
      } 
      case WalletNetwork.StarkNet: { 
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
            <Text className='text-cat-text'>Chain</Text>
            <div className='flex flex-row items-center justify-between space-x-2'>
              <SelectChain items={chains} placeholder="From" setWalletNetwork={setWalletNetwork}/>
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
                placeholder='Kamui' 
                className='pt-10' 
                deposit={deposit}
                loading={isLoading} 
                loadingText="Kamuiing" 
                 />
          </CardBody>
        </Card>
      </HookSection>
    </div>

  )
}
