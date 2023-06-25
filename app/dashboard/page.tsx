'use client'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from '@chakra-ui/react'
import { kamuiAddresses } from '../../utils/contract-address'
import { readContracts } from '@wagmi/core'
import { kamuiABI } from '../../app/contracts/Kamui'
import { useEffect, useState } from 'react'
import { RepeatIcon } from '@chakra-ui/icons'
import { formatEther } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'

const DashboardHome = () => {
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const [goerliBalance, setGoerliBalance] = useState('0');
  const [sepoliaBalance, setSepoliaBalance] = useState('0');
  const [mumbaiBalance, setMumbaiBalance] = useState('0');

  const goerliContract = {
    address: kamuiAddresses.Goerli as `0x${string}`,
    abi: kamuiABI,
    functionName: 'balanceOf',
    args: [kamuiAddresses.Goerli],
    chainId: 5
  }

  const sepoliaContract = {
    address: kamuiAddresses.Sepolia as `0x${string}`,
    abi: kamuiABI,
    functionName: 'balanceOf',
    args: [kamuiAddresses.Sepolia],
    chainId: 11155111
  }

  const mumbaiContract = {
    address: kamuiAddresses['Polygon Mumbai'] as `0x${string}`,
    abi: kamuiABI,
    functionName: 'balanceOf',
    args: [kamuiAddresses['Polygon Mumbai']],
    chainId: 80001
  }

  const getBalance = async () => {
    setIsLoadingBalance(true)

    const data = await readContracts({
      // @ts-ignore
      contracts: [goerliContract, sepoliaContract, mumbaiContract],
    })
    setGoerliBalance(formatEther(BigNumber.from(data[0].result)))
    setSepoliaBalance(formatEther(BigNumber.from(data[1].result)))
    setMumbaiBalance(formatEther(BigNumber.from(data[2].result)))

    if (data) {
      setIsLoadingBalance(false)
    }
  }

  useEffect(()=>{
    getBalance()
  },[goerliBalance, sepoliaBalance, mumbaiBalance])

  return (
    <div className='flex flex-col pl-3 pr-3 pt-3 items-center'>
      <div className="flex flex-col pt-10 justify-center sm:text-center items-center">
        <div className=" text-cat-text text-7xl font-bold text-center md:text-left lg:text-center">
          Dashboard
        </div>
      </div>
      <div>
        <div className='flex justify-end'>
          <IconButton 
            className='bg-transparent'
            aria-label='Copy text'
            colorScheme='whiteAlpha'
            variant='ghost'
            onClick={() => { 
              getBalance()
            }} 
            icon={<RepeatIcon />} 
          />
        </div>
        <TableContainer className='pt-2'>
          <Table 
            size='md'
            variant='striped' 
            colorScheme='gray'
            className='bg-cat-rosewater'>
            <Thead>
              <Tr className='bg-cat-peach400'>
                <Th className='text-center text-cat-white' fontSize={'md'}>Chain</Th>
                <Th width={180} className='text-center text-cat-white' fontSize={'md'}>Balance</Th>
                <Th className='text-center text-cat-white' fontSize={'md'}>Contract Address</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td className='flex flex-row justify-center items-center'>
                  <img src='../frontend/ethers.png' alt='Goerli' style={{ height: '18px'}}/>
                  <div className='pl-1'>Goerli</div>
                </Td>
                { 
                  isLoadingBalance ? 
                  <Td className='text-center'>Loading...</Td>
                  :
                  <Td className='text-end'>{goerliBalance + ' WETH'}</Td>
                }
                <Td>{kamuiAddresses.Goerli}</Td>
              </Tr>
              <Tr>
                <Td className='flex flex-row justify-center items-center'>
                  <img src='../frontend/ethers.png' alt='Sepolia' style={{ height: '18px'}}/>
                  <div className='pl-1'>Sepolia</div>
                </Td>
                { 
                  isLoadingBalance ? 
                  <Td className='text-center'>Loading...</Td>
                  :
                  <Td className='text-end'>{sepoliaBalance + ' WETH'}</Td>
                }
                <Td>{kamuiAddresses.Sepolia}</Td>
              </Tr>
              <Tr>
                <Td className='flex flex-row justify-center items-center'>
                  <img src='../frontend/polygon.png' alt='Polygon Mumbai' style={{ height: '18px'}}/>
                  <div className='pl-1'>Polygon Mumbai</div>
                </Td>
                { 
                  isLoadingBalance ? 
                  <Td className='text-center'>Loading...</Td>
                  :
                  <Td className='text-end'>{mumbaiBalance + ' WETH'}</Td>
                }
                <Td>{kamuiAddresses['Polygon Mumbai']}</Td>
              </Tr>
              <Tr>
                <Td className='flex flex-row justify-center items-center'>
                  <img src='../frontend/starknet.png' alt='Starknet' style={{ height: '18px'}}/>
                  <div className='pl-1'>Starknet</div>
                </Td>
                { 
                  isLoadingBalance ? 
                  <Td className='text-center'>Loading...</Td>
                  :
                  <Td className='text-end'>1327.48 WETH</Td>
                }
                <Td>{kamuiAddresses.StarkNet}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default DashboardHome
