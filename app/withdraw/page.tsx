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
import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRightIcon } from 'lucide-react'
import { SelectChain } from '../../components/SelectChain'
import { Input } from '@/components/ui/input'
import { WalletBar } from '@/components/WalletBar'
import Loading from '../loading'
import { ProcessButton, FormatButton } from '../../components/Button/ProcessButton'
import { AvailableChains, Wallet, ChainObject } from '../deposit/page'
import { useAccount as useAccountStark, useConnectors as useConnectorsStark } from '@starknet-react/core'
import { useAccount as useAccountWagmi, useDisconnect, useSwitchNetwork, useNetwork } from 'wagmi'
import { RainbowConnectButton } from '@/components/Button/RainbowConnectButton'

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default function WithdrawHome() {
  const chains: ChainObject[] = [
    { key: AvailableChains.Goerli, value: Wallet.Wagmi },
    { key: AvailableChains.Sepolia, value: Wallet.Wagmi },
    { key: AvailableChains.Mumbai, value: Wallet.Wagmi },
    { key: AvailableChains.StarkNet, value: Wallet.ArgentX },
  ]

  const [isLoading, setIsLoading] = useState(false);
  const [selectedWalletNetwork, setWalletNetwork] = useState<ChainObject>({key:'', value: Wallet.Wagmi});
  const [walletConfig, setConfig] = useState({ address: '', wallet: '', network: '' });
  const [contractParameter, setContractParameter] = useState({ chain: '', proof: '', address: '' });

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

  useEffect(()=>{
    setContractParameter({chain: selectedWalletNetwork.key, proof: contractParameter.proof, address:contractParameter.address})
  },[contractParameter])

  async function withdraw() {
    setIsLoading(true);
    switch (selectedWalletNetwork.value) {
      case Wallet.Wagmi: {
        await sleep(1000)
        console.log("withdrawEVM", chain?.name)
        console.log(contractParameter.chain, contractParameter.proof, contractParameter.address)
        break;
      }
      case Wallet.ArgentX: {
        await sleep(1000)
        console.log("withdrawStarkNet", chain?.name)
        break;
      }
      default: {
        await sleep(1000)
        console.log("withdrawDefault")
        break;
      }
    }
    setIsLoading(false)
  }

  return (
    <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
      {isLoading && <Loading />}
      <HookSection>
        <SectionHeading>Withdraw</SectionHeading>
        <Card className='bg-cat-mantle p-5 rounded'>
          <CardBody className='space-y-2'>
          <div className='flex flex-row items-center justify-between space-x-2'>
              <Text className='text-cat-text'>Chain</Text>
              {
                selectedWalletNetwork.key !== ''
                  ? selectedWalletNetwork.value == Wallet.ArgentX
                    ? <WalletBar></WalletBar>
                    : <RainbowConnectButton></RainbowConnectButton>
                  : <FormatButton disabled={true}>{'Please Select Network'}</FormatButton>
              }
            </div>
            <div className='flex flex-row items-center justify-between space-x-2'>
              <SelectChain items={chains} placeholder="From" setState={{setWalletNetwork}} />
            </div>
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-text'>Proof</Text>
            </div>
            <Input className='bg-cat-mantle text-cat-text' type='text' placeholder='Your Proof' 
              onChange={(e) => {
              const value = e.target.value
              setContractParameter({...contractParameter, proof:value})
              }} />
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-text'>Address</Text>
            </div>
            <Input className='bg-cat-mantle text-cat-text' type='text' placeholder='Your Address' 
              onChange={(e) => {
                const value = e.target.value
                setContractParameter({...contractParameter, address: value})
              }} />
            <ProcessButton
              placeholder={(walletConfig.address != '' && walletConfig.network != '') ? 'Kamui' : 'Please Connect First'}
              className='pt-10'
              process={withdraw}
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
