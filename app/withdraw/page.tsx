'use client'

import HookSection from '../../components/HookSection'
import SectionHeading from '../../components/SectionHeading'
import {
  Card,
  CardBody,
  Text
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { SelectChain } from '../../components/SelectChain'
import { Input } from '@/components/ui/input'
import { WalletBar } from '@/components/WalletBar'
import { ProcessButton, FormatButton } from '../../components/Button/ProcessButton'
import { Wallet, AvailableChains, ChainObject, TokenObject, WithdrawParameter } from '../appModel'
import { useAccount as useAccountStark, useConnectors as useConnectorsStark } from '@starknet-react/core'
import { useAccount as useAccountWagmi, useSwitchNetwork, useNetwork } from 'wagmi'
import { RainbowConnectButton } from '@/components/Button/RainbowConnectButton'
import { AvailableChainsObject, AvailableTokensObject } from '../../utils/util'
import { WithdrawDialog } from '../../components/DIalog/WithdrawDialog'


export default function WithdrawHome() {

  const [selectedWalletNetwork, setWalletNetwork] = useState<ChainObject>({key:'', value: Wallet.Wagmi});
  const [selectedToken, setToken] = useState<TokenObject>({key: '', value: ''});
  const [walletConfig, setConfig] = useState({ address: '', wallet: '', network: '' });
  const [contractParameter, setContractParameter] = useState<WithdrawParameter>({ chain: '', proof: '', token: ''});
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);

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
    ,[selectedWalletNetwork.key, wagmiAddress, starkAddress])

  useEffect(()=>{
    setContractParameter({...contractParameter, chain: selectedWalletNetwork.key, token: selectedToken.key})
  },[selectedWalletNetwork.key, selectedToken.key])

  async function openWithdrawDialog() {
    setIsWithdrawDialogOpen(true)
  }

  return (
    <div className="max-w-70 pt-12 mb-12 mx-4 lg:mx-0">
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
              <SelectChain items={AvailableChainsObject} placeholder="From" setState={{setWalletNetwork}} />
            </div>
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-text'>Proof</Text>
            </div>
            <Input 
              className='bg-cat-mantle text-cat-text' 
              type='text' 
              placeholder='Your Proof' 
              disabled={(selectedWalletNetwork.key == '') ? true : false}
              onChange={(e) => {
                const proof = e.target.value
                setContractParameter((preState:any) => ({
                  ...preState,
                  proof: proof
                }))
              }}
            />
            <div className='flex flex-row items-center justify-between pt-5'>
              <Text className='text-cat-text '>Token</Text>
            </div>
            <SelectChain 
              items={AvailableTokensObject} 
              placeholder="Token" 
              className='bg-cat-mantle text-cat-text' 
              setState={{setToken}} 
              disabled={(selectedWalletNetwork.key == '') ? true : false}
            />

            <ProcessButton
              placeholder={'Withdraw'}
              loadingText={'Withdraw'}
              loading={false}
              className='pt-10'
              process={openWithdrawDialog}
              walletConfig={walletConfig}
              textColor='#cdd6f4'
              disabled={(walletConfig.address == '' || walletConfig.network == '' || contractParameter.chain == '' || contractParameter.proof == '' || contractParameter.token == '')}
            />
          </CardBody>
        </Card>
      </HookSection>
      <WithdrawDialog 
        isOpen={isWithdrawDialogOpen} 
        onClose={setIsWithdrawDialogOpen} 
        contractParameter={contractParameter} 
        walletConfig={walletConfig}
        selectedWalletNetwork={selectedWalletNetwork}
        chain={chain}
      />
    </div>
  )
}
