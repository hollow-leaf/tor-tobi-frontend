'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Input,
  Tooltip,
} from '@chakra-ui/react'
import { XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { DepositParameter, Wallet } from '../../app/appModel'
import Loading from '../../app/loading'
import { ProcessButton } from '../../components/Button/ProcessButton'
import { sleep } from '../../utils/util'
import { ArrowForwardIcon, CopyIcon } from '@chakra-ui/icons'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { useKamuiContractAddressHook } from '../../hooks/useContractAddress.hook'
import { kamuiABI } from '../../app/contracts/Kamui'
import { parseEther } from 'ethers/lib/utils'
import Image from 'next/image';

export interface DepositDialogProps {
  isOpen: boolean
  onClose: any
  onConfirm: any
  contractParameter: DepositParameter
  walletConfig: any
  selectedWalletNetwork: any
  chain: any
}

// export function TransitionExample() {
export function DepositDialog({ ...props }: DepositDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [transactionHashState, setTransactionHashState] = useState('');
  const [isTransactionHashDialog, setIsTransactionHashDialog] = useState(false);
  // const [isCopyOpen, setIsCopyOpen] = useState(false);
  const [isCopyAlertOpen, setIsCopyAlertOpen] = useState(false)
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
          // console.log('depositEVM', props.chain?.name)
          if(props.contractParameter.token === 'WETH'){
            const { request } = await prepareWriteContract({
              address: kamuiAddresses,
              abi: kamuiABI,
              functionName: 'deposit',
              args: [parseEther(props.contractParameter.amount)],
            })
    
            const { hash } = await writeContract(request)
            await waitForTransaction({ hash })
            // const hash = '0x1047d21334e4d1f99cb3180e79b33a0a3a0fa23ab4cdb44d9f68e37d5ea7d122'
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
            <div> Confirm Deposit </div>
            <button onClick={handleClose}><XIcon/></button>
          </AlertDialogHeader>
            <AlertDialogBody className='flex items-center justify-between' fontWeight='bold'> 
              <div>
                <div style={{ fontSize: 16 }}> Source: {props.contractParameter.sourceChain} </div>
                <div style={{ fontSize: 16 }}> Token: {props.contractParameter.token} </div>
              </div>
              <ArrowForwardIcon className={'pl-3 pr-3'} boxSize={'16'}/>
              <div>
                <div style={{ fontSize: 16 }}> Target: {props.contractParameter.targetChain} </div>
                <div style={{ fontSize: 16 }}> Amount: {props.contractParameter.amount} </div>
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
        <AlertDialogContent bgImage='/frontend/tobi-sharingan.png' bgRepeat='no-repeat' bgPosition='center' bgSize='cover' className='max-w-1/2 h-1/3 rounded-lg'>
          <AlertDialogHeader className='flex items-center justify-center text-cat-white rounded-t-lg'>
            <div> Kamui Successfully </div>
          </AlertDialogHeader>
          <AlertDialogBody className='flex items-center justify-between' fontWeight='bold'> 
            <Input className='bg-cat-white hover:opacity-0' size='md' value={transactionHashState} isReadOnly={true}/>
            <div className='pl-2'>
              <Tooltip hasArrow label='Copy!' bg='red.600'>
                <IconButton 
                  className='bg-cat-white'
                  aria-label='Copy text' 
                  onClick={() => { 
                    navigator.clipboard.writeText(transactionHashState) 
                  }} 
                  icon={<CopyIcon />} 
                />
              </Tooltip>
            </div>
          </AlertDialogBody>
          <AlertDialogFooter className='flex justify-center'>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> : ''}
    </>
  )
}
