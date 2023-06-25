'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { WithdrawParameter, Wallet } from '../../app/appModel'
import Loading from '../../app/loading'
import { ProcessButton } from '../Button/ProcessButton'
import { sleep } from '../../utils/util'
import { useKamuiContractAddressHook } from '../../hooks/useContractAddress.hook'
import { prepareWriteContract, waitForTransaction, writeContract } from '@wagmi/core'
import { kamuiABI } from '../../app/contracts/Kamui'
import { parseEther } from 'ethers/lib/utils'

export interface WithdrawDialogProps {
  isOpen: boolean
  onClose: any
  contractParameter: WithdrawParameter
  walletConfig: any
  selectedWalletNetwork: any
  chain: any
}

export function WithdrawDialog({ ...props }: WithdrawDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [transactionHashState, setTransactionHashState] = useState('');
  const [isTransactionHashDialog, setIsTransactionHashDialog] = useState(false);
  const cancelRef = React.useRef<HTMLButtonElement>(null)

  const kamuiAddresses = useKamuiContractAddressHook()

  let transactionHash: string = ''

  const handleClose = () => {
    props.onClose(false)
  }

  const handleTransactionDialogClose = () => {
    handleClose()
    setIsTransactionHashDialog(false)
  }

  const handleConfirm = async() => {
    setIsLoading(true);

    try {
      switch (props.selectedWalletNetwork.value) {
        case Wallet.Wagmi: {
          if(props.contractParameter.token === 'WETH'){
            const { request } = await prepareWriteContract({
              address: kamuiAddresses,
              abi: kamuiABI,
              functionName: 'withdraw',
              args: [parseEther('1')],
            })
    
            const { hash } = await writeContract(request)
            await waitForTransaction({ hash })

            transactionHash = hash
            setTransactionHashState(hash)
          }
          break;
        }
        case Wallet.ArgentX: {
          console.log('depositStarkNet', props.chain?.name)
          await sleep(3000)
          break;
        }
        default: {
          await sleep(3000)
          console.log('depositDefault')
          break;
        }
      }
      setIsLoading(false)
      if (transactionHash !== '') {
        setIsTransactionHashDialog(true)
      }
    } catch (error) {
      console.log('error: ', error)
      setIsLoading(false)
    }
  }
  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={handleClose}
        isOpen={props.isOpen}
        isCentered
        lockFocusAcrossFrames={true}
      >
        <AlertDialogOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(1px)'
        />
        <AlertDialogContent className='max-w-1/2 h-1/3 rounded-lg'>
          {isLoading && <Loading />}
          <AlertDialogHeader className='flex items-center justify-between bg-cat-peach300 text-cat-surface rounded-t-lg'>
            <div> Confirm Withdraw </div>
            <button onClick={handleClose}><XIcon/></button>
          </AlertDialogHeader>
            <AlertDialogBody className='flex items-center justify-between' fontWeight='bold'> 
              <div>
                <div style={{ fontSize: 16 }}> Chain: {props.contractParameter.chain} </div>
                <div style={{ fontSize: 16 }}> Token: {props.contractParameter.token} </div>
              </div>
            </AlertDialogBody>
          <AlertDialogFooter>
            <ProcessButton
              placeholder={'KAMUI'}
              loadingText={'KAMUI'}
              className='flex-grow'
              process={handleConfirm}
              walletConfig={props.walletConfig}
              loading={isLoading}
              textColor='#f67c41'
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      { isTransactionHashDialog ? 
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={handleTransactionDialogClose}
        isCentered
        isOpen={props.isOpen}
        lockFocusAcrossFrames={true}
      >
        <AlertDialogOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(1px)'
        />
        <AlertDialogContent bgImage='/frontend/obito-sharingan.png' bgRepeat='no-repeat' bgPosition='center' bgSize='cover' className='max-w-1/2 h-1/3 rounded-lg'>
          <AlertDialogHeader className='flex items-center justify-center text-cat-white rounded-t-lg'>
            <div> Kamui Successfully </div>
          </AlertDialogHeader>
          
          <AlertDialogBody className='flex items-center justify-between' fontWeight='bold'> 
          </AlertDialogBody>

          <AlertDialogFooter className='flex justify-center'>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> : ''}
    </>
  )
}
