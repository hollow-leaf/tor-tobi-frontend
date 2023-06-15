'use client'

import HookSection from '../../components/HookSection'
import SectionHeading from '../../components/SectionHeading'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRightIcon } from 'lucide-react'
import { SelectChain } from '../../components/SelectChain'
import { Input } from '@/components/ui/input'
import { WalletBar } from '@/components/WalletBar'

function deposit() {
  console.log("deposit")
}

export default function DepositHome() {
  const chains = new Array('BNB', 'ETH', 'Polygon')
  const tokens = new Array('USDC', 'USDT', 'DAI', 'WETH')

  return (
    <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
      <HookSection>
        <SectionHeading>Deposit</SectionHeading>
        <Card className='bg-cat-lavender p-5 rounded'>
          <CardBody className='space-y-2'>
            <div className='flex flex-row items-center justify-between space-x-2'>
              <SelectChain items={chains} placeholder="From" />
              <ArrowRightIcon className='w-10' />
              <SelectChain items={chains} placeholder="To" />
            </div>
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-rosewater'>You send</Text>
              <Text className='text-cat-rosewater'>Balance: </Text>
            </div>
            <div className='flex flex-row items-center justify-between space-x-4'>
              <SelectChain items={tokens} placeholder="Token" className='grow bg-cat-sky basis-1/4'/>
              <Input className='bg-cat-sky' type='number' placeholder='0.00' />
            </div>
            <WalletBar placeholder='Kamui' className='pt-5' deposit={deposit}/>
          </CardBody>
        </Card>
      </HookSection>
    </div>
  )
}
