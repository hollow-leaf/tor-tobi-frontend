'use client'

import HookSection from '../../components/HookSection'
import SectionHeading from '../../components/SectionHeading'
import {
  Button,
  Card,
  CardBody,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { SelectChain } from '../../components/SelectChain'
import { Input } from '@/components/ui/input'
import { WalletBar } from '@/components/WalletBar'
import Loading from '../loading'
import { DepositDialog } from '@/components/DepositDialog'
import React from 'react'

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default function DepositHome() {
  const chains = new Array('BNB', 'ETH', 'Polygon')
  const tokens = new Array('USDC', 'USDT', 'DAI', 'WETH')

  const [isLoading, setIsLoading] = useState(false);
  const [from, setFrom] = React.useState("")
  
  const handleFrom = (fromChain: FormEvent<HTMLDivElement>) => {
    setFrom(fromChain)
    console.log(from)
  };

  async function deposit() {
    setIsLoading(true);
    await sleep(5000)
    console.log("deposit")
    setIsLoading(false)
  }

  return (
    <>
      <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
        {isLoading && <Loading />}
        <HookSection>
          <SectionHeading>Deposit</SectionHeading>
          <Card className='bg-cat-mantle p-5 rounded'>
            <CardBody className='space-y-2'>
              <Text className='text-cat-text'>Chain</Text>
              <div className='flex flex-row items-center justify-between space-x-2'>
                <SelectChain items={chains} placeholder="From" onSelectionUpdate={handleFrom} />
                <ArrowRightIcon className='w-10' />
                {/* <SelectChain items={chains} placeholder="To" /> */}
              </div>
              <div className='flex flex-row items-center justify-between pt-5'>
                <Text className='text-cat-text'>You send</Text>
                <Text className='text-cat-text'>Balance: </Text>
              </div>
              <div className='flex flex-row items-center justify-between space-x-4'>
                {/* <SelectChain items={tokens} placeholder="Token" className='grow bg-cat-mantle text-cat-text basis-1/4' /> */}
                <Input className='bg-cat-mantle text-cat-text' type='number' placeholder='0.00' />
              </div>
              <DepositDialog onClick={deposit} />
            </CardBody>
          </Card>
        </HookSection>
      </div>
    </>
  )
}
