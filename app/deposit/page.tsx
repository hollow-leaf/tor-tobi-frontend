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
import { InputAmount, SelectChain } from '../../components/SelectChain'
import { ProcessButton } from '../../components/Button/ProcessButton'
import { useAccount as useAccountStark, useConnectors as useConnectorsStark } from '@starknet-react/core'
import { useAccount as useAccountWagmi, useSwitchNetwork, useNetwork } from 'wagmi'
import { WalletBar, WalletButton } from '@/components/WalletBar'
import { RainbowConnectButton } from '@/components/Button/RainbowConnectButton'
import { DepositDialog } from '../../components/DIalog/DepositDialog'
import { Wallet, AvailableChains, ChainObject, TokenObject, DepositParameter } from '../appModel'
import { AvailableChainsObject, AvailableTokensObject } from '../../utils/util'


export default function DepositHome() {

  const [selectedWalletNetwork, setWalletNetwork] = useState<ChainObject>({key: '', value: Wallet.Wagmi});
  const [selectedToken, setToken] = useState<TokenObject>({key: '', value: ''});
  const [walletConfig, setConfig] = useState({ address: '', wallet: '', network: '' });
  const [contractParameter, setContractParameter] = useState<DepositParameter>({ sourceChain: '', targetChain: '', token: '', amount: '' });
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
  
  useEffect(()=>{
    setContractParameter({...contractParameter, sourceChain: selectedWalletNetwork.key, token: selectedToken.key})
  },[selectedWalletNetwork.key, selectedToken.key])

  async function openDepositDialog() {
    setIsDepositDialogOpen(true)
  }

  return (
    <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
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
              <SelectChain items={AvailableChainsObject} placeholder="From" setState={{setWalletNetwork}} />
              <ArrowRightIcon className='w-10' color='#cdd6f4' />
              <SelectChain items={AvailableChainsObject} placeholder="To" setState={{setContractParameter}} disabled={(selectedWalletNetwork.key == '') ? true : false}/>
            </div>

            <div className='flex flex-row items-center justify-between space-x-4 pt-5'>
              <div className='flex-col basis-1/4'>
                <Text className='text-cat-text pb-2'>Token</Text>
                <SelectChain items={AvailableTokensObject} placeholder="Token" className='bg-cat-mantle text-cat-text' setState={{setToken}} disabled={(selectedWalletNetwork.key == '') ? true : false}/>
              </div>
              <div className='flex-col basis-3/4'>
                <Text className='text-cat-text pb-2'>Amount</Text>
                <InputAmount setState={{setContractParameter}} disabled={(selectedWalletNetwork.key == '') ? true : false}/>
              </div>
            </div>
            <ProcessButton
              placeholder={'Deposit'}
              loadingText={'Deposit'}
              loading={false}
              className='pt-10'
              process={openDepositDialog}
              walletConfig={walletConfig}
              textColor='#cdd6f4'
              disabled={(walletConfig.address == '' || walletConfig.network == '' || contractParameter.sourceChain == '' || contractParameter.targetChain == '' || contractParameter.token == '' || contractParameter.amount == '')}
            />
          </CardBody>
        </Card>
      </HookSection>
      <DepositDialog 
        isOpen={isDepositDialogOpen} 
        onClose={setIsDepositDialogOpen} 
        contractParameter={contractParameter} 
        walletConfig={walletConfig}
        selectedWalletNetwork={selectedWalletNetwork}
        chain={chain}
      />
    </div>

  )
}
