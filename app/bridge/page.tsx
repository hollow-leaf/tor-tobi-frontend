'use client'

import HookSection from '../../components/HookSection'
import SectionHeading from '../../components/SectionHeading'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRightIcon } from 'lucide-react'

export default function BridgeHome() {
  const items = new Array('BNB', 'ETH', 'Polygon')
  return (
    <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
      <HookSection>
        <SectionHeading>Bridge</SectionHeading>
        <Card className='bg-cat-lavender p-5 rounded'>
          <CardBody className='space-y-2'>
            <Text className='text-cat-rosewater'>Bridge Deposit</Text>
            <div className='flex flex-row items-center justify-between space-x-2'>
              <Select>
                <SelectTrigger className="grow bg-cat-sky">
                  <SelectValue placeholder="From" />
                </SelectTrigger>
                <SelectContent className="bg-cat-sky">
                  {
                    items.map((item, index) => (
                      <SelectItem 
                        key={index} 
                        value={item} 
                        className='hover:bg-cat-blue'
                      >
                        {item}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <ArrowRightIcon className='w-10' />
              <Select>
                <SelectTrigger className="grow bg-cat-sky">
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent className="bg-cat-sky">
                  {
                    items.map((item, index) => (
                      <SelectItem 
                        key={index} 
                        value={item} 
                        className='hover:bg-cat-blue'
                      >
                        {item}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>
          </CardBody>
        </Card>
      </HookSection>
    </div>
  )
}
