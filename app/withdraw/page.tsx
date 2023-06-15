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

function withdraw() {
  console.log("withdraw")
}

export default function WithdrawHome() {
  const chains = new Array('BNB', 'ETH', 'Polygon')
  const tokens = new Array('USDC', 'USDT', 'DAI', 'WETH')

  return (
    <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
      <HookSection>
        <SectionHeading>Withdraw</SectionHeading>
        <Card className='bg-cat-mantle p-5 rounded'>
          <CardBody className='space-y-2'>
            <div className='flex flex-row items-center justify-between'>
              <Text className='text-cat-text'>Proof</Text>
            </div>
            <Input className='bg-cat-mantle text-cat-text' type='text' placeholder='Your Proof' />
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-text'>Address</Text>
            </div>
            <Input className='bg-cat-mantle text-cat-text' type='text' placeholder='Your Address' />
            <WalletBar placeholder='Kamui' className='pt-10' withdraw={withdraw} />
          </CardBody>
        </Card>
      </HookSection>
    </div>
  )
}
